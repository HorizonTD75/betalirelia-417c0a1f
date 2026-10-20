import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_META } from "@/lib/structuredData/routeMeta";
import { applyHeadMetadata, createHeadMetadata } from "@/lib/headMetadata";

/** Navigation only; build-time HTML uses exactly the same metadata source. */
export default function RouteHeadSync() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const meta = ROUTE_META[path];
    applyHeadMetadata(createHeadMetadata(path, meta ? {
      t: meta.title, d: meta.description, og: meta.ogType,
      img: meta.image, imgAlt: meta.imageAlt, noindex: meta.noindex,
    } : { t: "Page introuvable | LIRELIA", d: "Cette page n’existe pas. Retrouvez les conseils et les aides à la lecture LIRELIA.", noindex: true }));
  }, [pathname]);
  return null;
}