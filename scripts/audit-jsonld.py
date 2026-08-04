"""Audit du JSON-LD (@graph) rendu par le site en local.
Usage: python3 scripts/audit-jsonld.py (le serveur dev doit tourner sur :8080)
"""
import asyncio, json, re
from playwright.async_api import async_playwright

INDEXABLE = ["/", "/maladies-yeux/glaucome", "/maladies-yeux/dmla", "/maladies-yeux/cataracte", "/maladies-yeux/nystagmus", "/maladies-yeux/retinite-pigmentaire", "/maladies-yeux/retinopathie-diabetique", "/maladies-yeux/myopie", "/maladies-yeux/hypermetropie", "/maladies-yeux/astigmatisme", "/maladies-yeux/presbytie", "/maladies-yeux/maladies-hereditaires", "/maladies-yeux/maladies-hereditaires/retinite-pigmentaire", "/maladies-yeux/maladies-hereditaires/maladie-de-leber", "/maladies-yeux/maladies-hereditaires/maladie-de-stargardt", "/maladies-yeux/maladies-hereditaires/achromatopsie", "/maladies-yeux/maladies-hereditaires/syndrome-usher", "/maladies-yeux/maladies-hereditaires/aniridie", "/maladies-yeux", "/comprendre-basse-vision", "/vivre-basse-vision", "/aides-financieres-basse-vision", "/aides-financieres-basse-vision/financer-aide-visuelle", "/expert-basse-vision-visiopraticien", "/bilans-bassevision", "/bilans-bassevision/essentiel", "/bilans-bassevision/expert", "/bilans-bassevision/suivi", "/bilans-bassevision/visites-domicile", "/rdv-bilan", "/aides-lecture-bassevision", "/aides-lecture-bassevision/loupes-verre", "/aides-lecture-bassevision/loupes-electroniques", "/aides-lecture-bassevision/lampes", "/aides-lecture-bassevision/tele-agrandisseurs", "/aides-lecture-bassevision/lunettes-loupes", "/aides-lecture-bassevision/lunettes-intelligentes", "/boutique/ray-ban-meta", "/catalogue-aides-basse-vision", "/catalogue-aides-basse-vision/loupes-verre", "/catalogue-aides-basse-vision/loupes-electroniques", "/catalogue-aides-basse-vision/lampes-basse-vision", "/catalogue-aides-basse-vision/teleagrandisseurs", "/catalogue-aides-basse-vision/lunettes-loupes", "/catalogue-aides-basse-vision/lunettes-intelligentes", "/catalogue-aides-basse-vision/accessoires", "/boutique/loupe-amelie", "/boutique/lunettes-loupe-focus", "/boutique/loupe-max-tv", "/boutique/lunettes-loupe-frontale-alva", "/boutique/loupe-main-nora", "/boutique/loupe-dome-eclairante-lina", "/boutique/clip-lunettes-loupe", "/boutique/lampe-basse-vision-eira", "/boutique/lampe-loupe-astrid", "/boutique/lampadaire-solveig", "/boutique/lampe-tour-cou-aina", "/boutique/souris-loupe-electronique-vera", "/boutique/teleagrandisseur-mezzo-focus", "/boutique/loupe-electronique-clover-5", "/boutique/horloge-reveil-gros-chiffres-oskar", "/boutique/reveil-gros-chiffres-ivar", "/boutique/horloge-gros-chiffres-frida", "/club", "/contact-conseil", "/aidants", "/livre-dmla-votre-vie-ne-sarrete-pas", "/livre-aider-proche-dmla", "/qui-sommes-nous", "/mentions-legales", "/politique-de-confidentialite", "/cgv", "/charte-club-lirelia", "/politique-cookies", "/livraison", "/retours-remboursements", "/formulaire-retractation", "/sav-garanties"]
PRODUCT_PATHS = ["/boutique/clip-lunettes-loupe", "/boutique/horloge-gros-chiffres-frida", "/boutique/horloge-reveil-gros-chiffres-oskar", "/boutique/lampadaire-solveig", "/boutique/lampe-basse-vision-eira", "/boutique/lampe-loupe-astrid", "/boutique/lampe-tour-cou-aina", "/boutique/loupe-amelie", "/boutique/loupe-dome-eclairante-lina", "/boutique/loupe-electronique-clover-5", "/boutique/loupe-main-nora", "/boutique/loupe-max-tv", "/boutique/lunettes-loupe-focus", "/boutique/lunettes-loupe-frontale-alva", "/boutique/reveil-gros-chiffres-ivar", "/boutique/souris-loupe-electronique-vera", "/boutique/teleagrandisseur-mezzo-focus"]
NOINDEX = ["/merci-contact", "/merci-bilan-expert", "/merci-bilan-suivi", "/merci-bilan-essentiel", "/merci-visite-domicile", "/merci-club", "/merci-commande", "/unsubscribe", "/admin", "/bientot-disponible"]

def walk(o):
    if isinstance(o, dict):
        for k, v in o.items():
            yield k, v
            yield from walk(v)
    elif isinstance(o, list):
        for v in o:
            yield from walk(v)

async def blocks(page, path):
    await page.goto("http://localhost:8080" + path, wait_until="networkidle")
    return await page.eval_on_selector_all('script[type="application/ld+json"]', "els => els.map(e => e.textContent)")

async def main():
    errors, notes = [], []
    async with async_playwright() as pw:
        b = await pw.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1280, "height": 1800})
        page = await ctx.new_page()
        for path in INDEXABLE:
            raw = await blocks(page, path)
            if len(raw) != 1:
                errors.append(f"{path}: expected exactly 1 ld+json block (the registry graph), got {len(raw)}")
                continue
            try:
                pg = json.loads(raw[0])
            except Exception as e:
                errors.append(f"{path}: invalid JSON ({e})"); continue
            if "@graph" not in pg:
                errors.append(f"{path}: page block is not a @graph")
                continue
            types = [n.get("@type") for n in pg["@graph"]]
            for n in pg["@graph"]:
                if not n.get("@id"):
                    errors.append(f"{path}: node {n.get('@type')} without @id")
            for k, v in walk(pg):
                if k in ("url", "item", "@id") and isinstance(v, str) and v.startswith("http") and not v.startswith("https://lirelia.fr"):
                    errors.append(f"{path}: non-canonical URL {v}")
                if k in ("url", "item") and isinstance(v, str) and not v.startswith("https://"):
                    errors.append(f"{path}: relative URL in {k}: {v}")
            bc = next((n for n in pg["@graph"] if n.get("@type") == "BreadcrumbList"), None)
            if bc:
                pos = [i["position"] for i in bc["itemListElement"]]
                if pos != list(range(1, len(pos) + 1)):
                    errors.append(f"{path}: breadcrumb positions {pos}")
                if bc["itemListElement"][-1]["item"].rstrip("/") != ("https://lirelia.fr" + path).rstrip("/"):
                    errors.append(f"{path}: breadcrumb leaf {bc['itemListElement'][-1]['item']} != page URL")
            if len([t for t in types if t in ("Organization", "OnlineStore")]) != 1:
                errors.append(f"{path}: Organization/OnlineStore must appear exactly once, got {types}")
            if types.count("WebSite") != 1:
                errors.append(f"{path}: WebSite must appear exactly once, got {types}")
            # price coherence for product pages
            prod = next((n for n in pg["@graph"] if n.get("@type") in ("Product", "ProductGroup")), None)
            if path in PRODUCT_PATHS:
                if not prod:
                    errors.append(f"{path}: missing Product/ProductGroup")
                else:
                    body = await page.inner_text("main")
                    prices = set(re.findall(r"(\d[\d\s]*(?:,\d{2})?)\s*€", body))
                    prices = {p.replace(" ", "").replace(",", ".") for p in prices}
                    offers = prod.get("offers")
                    if offers:
                        if f"{float(offers['price']):g}" not in {f"{float(p):g}" for p in prices if p}:
                            errors.append(f"{path}: offer price {offers['price']} not visible on page")
                    for v in prod.get("hasVariant", []):
                        if f"{float(v['offers']['price']):g}" not in {f"{float(p):g}" for p in prices if p}:
                            errors.append(f"{path}: variant {v['@id']} price not visible")
            notes.append(f"{path}: {types}")
        for path in NOINDEX:
            raw = await blocks(page, path)
            if len(raw) != 0:
                errors.append(f"{path} (noindex): expected no ld+json block, got {len(raw)}")
            robots = await page.get_attribute('meta[name="robots"]', "content")
            if "noindex" not in (robots or ""):
                errors.append(f"{path}: robots={robots}")
            notes.append(f"{path}: noindex ok, blocks={len(raw)}")
        await b.close()
    print("\n".join(notes))
    print("\nERRORS:", len(errors))
    for e in errors:
        print(" -", e)

asyncio.run(main())
