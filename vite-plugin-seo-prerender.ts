import type { Plugin } from "vite";
import * as fs from "node:fs";
import * as path from "node:path";
import { applyHeadMetadata, type HeadMetadata } from "./src/lib/headMetadata";
const escape = (v: string) => v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
export function renderRouteHead(template: string, r: HeadMetadata): string {
  let html=template.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi,"");
  html=html.replace(/<meta\b[^>]*>/gi,t=>/(?:name|property)=["'](?:description|author|robots|googlebot|og:[^"']+|twitter:[^"']+)["']/i.test(t)?"":t);
  html=html.replace(/<link\b[^>]*>/gi,t=>/rel=["']canonical["']|hreflang=/i.test(t)?"":t);
  const tag=(a:string,n:string,v:string)=>`<meta ${a}="${n}" content="${escape(v)}">`;
  const robots=r.noindex?"noindex, follow":"index, follow";
  const tags=[`<title>${escape(r.title)}</title>`,tag("name","description",r.description),tag("name","author","LIRELIA"),tag("name","robots",robots),tag("name","googlebot",robots),`<link rel="canonical" href="${escape(r.canonical)}">`,tag("property","og:title",r.title),tag("property","og:description",r.description),tag("property","og:url",r.canonical),tag("property","og:type",r.ogType),tag("property","og:site_name","LIRELIA"),tag("property","og:locale","fr_FR"),tag("name","twitter:card",r.ogImage?"summary_large_image":"summary"),tag("name","twitter:title",r.title),tag("name","twitter:description",r.description)];
  if(r.ogImage){tags.push(tag("property","og:image",r.ogImage),tag("name","twitter:image",r.ogImage));if(r.imageAlt)tags.push(tag("property","og:image:alt",r.imageAlt),tag("name","twitter:image:alt",r.imageAlt));}
  return html.replace(/<head\b[^>]*>/i,h=>h+"\n"+tags.join("\n"));
}
export function seoPrerender(routes:HeadMetadata[]):Plugin {
 const map=Object.fromEntries(routes.map(r=>[r.path.replace(/\/+$/,"")||"/",r]));
 return {name:"vite-plugin-seo-prerender",enforce:"post",
 transformIndexHtml(html){const home=map["/"];if(!home)return html;
 const script=`<script data-route-head>(${applyHeadMetadata.toString()})((${JSON.stringify(map).replace(/</g,"\\u003c")})[location.pathname.replace(/\\/+$/,"")||"/"]||{title:"Page introuvable | LIRELIA",description:"Page introuvable",canonical:"https://lirelia.fr"+location.pathname,noindex:true,ogType:"website"});</script>`;
 return renderRouteHead(html,home).replace("</head>",script+"</head>");},
 closeBundle(){const dist=path.resolve("dist");const file=path.join(dist,"index.html");if(!fs.existsSync(file))return;const template=fs.readFileSync(file,"utf8");
 for(const r of routes){const output=path.join(dist,r.path.replace(/^\//,""));fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,"index.html"),renderRouteHead(template,r));}
 }};
}
