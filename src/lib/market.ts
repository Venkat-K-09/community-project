import { products as staticProducts, productCategories } from "@/data/content";
import { sellerCategories, getAllSellerProducts, getSeller } from "@/lib/sellers";
import type { Lang, Bi } from "@/i18n/translations";

export interface MarketProduct {
  id: string;
  name: string;
  price: string;
  sellerName: string;
  sellerId?: string;
  categoryKey: string;
  category: string;
  description: string;
  image?: string;
  emoji?: string;
}

const pick = (obj: Bi, lang: Lang) => obj[lang];

/** Combined marketplace list: seller-created products first, then seed products. */
export function getMarketProducts(lang: Lang): MarketProduct[] {
  const sellerItems: MarketProduct[] = getAllSellerProducts().map((p) => {
    const seller = getSeller(p.sellerId);
    const cat = sellerCategories.find((c) => c.key === p.category);
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      sellerName: seller?.businessName ?? "",
      sellerId: p.sellerId,
      categoryKey: p.category,
      category: cat ? pick(cat.label, lang) : p.category,
      description: p.description,
      image: p.image,
    };
  });

  const seedItems: MarketProduct[] = staticProducts.map((p) => ({
    id: p.id,
    name: pick(p.name, lang),
    price: p.price,
    sellerName: pick(p.seller, lang),
    categoryKey: p.categoryKey,
    category: pick(p.category, lang),
    description: pick(p.desc, lang),
    emoji: p.emoji,
  }));

  return [...sellerItems, ...seedItems];
}

export function getMarketProduct(id: string, lang: Lang): MarketProduct | undefined {
  return getMarketProducts(lang).find((p) => p.id === id);
}

/** Merged, de-duplicated category chips from seed + seller categories. */
export function getMarketCategories(lang: Lang): { key: string; label: string }[] {
  const map = new Map<string, string>();
  for (const c of sellerCategories) map.set(c.key, pick(c.label, lang));
  for (const c of productCategories) if (!map.has(c.key)) map.set(c.key, pick(c.label, lang));
  return Array.from(map, ([key, label]) => ({ key, label }));
}
