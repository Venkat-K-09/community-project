import { b, type Bi } from "@/i18n/translations";

// ---- Seller business categories ----
export const sellerCategories: { key: string; label: Bi }[] = [
  { key: "handmade-crafts", label: b("Handmade Crafts", "చేతి క్రాఫ్ట్‌లు") },
  { key: "homemade-food", label: b("Homemade Food", "ఇంటి ఆహారం") },
  { key: "jewelry", label: b("Jewelry", "ఆభరణాలు") },
  { key: "tailoring", label: b("Tailoring", "కుట్టు పని") },
  { key: "art-paintings", label: b("Art & Paintings", "కళ & చిత్రాలు") },
  { key: "home-decor", label: b("Home Decor", "ఇంటి అలంకరణ") },
  { key: "customized-gifts", label: b("Customized Gifts", "కస్టమైజ్డ్ బహుమతులు") },
  { key: "plants-gardening", label: b("Plants & Gardening", "మొక్కలు & తోటపని") },
];

export function categoryLabel(key: string): Bi | undefined {
  return sellerCategories.find((c) => c.key === key)?.label;
}

// ---- Types ----
export interface Seller {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  businessName: string;
  category: string; // sellerCategories key
  description: string;
  createdAt: string;
}

export interface SellerProduct {
  id: string;
  sellerId: string;
  name: string;
  description: string;
  category: string; // sellerCategories key
  price: string;
  image?: string; // data URL
  createdAt: string;
}

const SELLERS_KEY = "cmm-sellers";
const PRODUCTS_KEY = "cmm-seller-products";
const CURRENT_KEY = "cmm-current-seller";

function read<T>(key: string): T[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---- Sellers ----
export function getSellers(): Seller[] {
  return read<Seller>(SELLERS_KEY);
}

export function getSeller(id: string): Seller | undefined {
  return getSellers().find((s) => s.id === id);
}

export function getCurrentSellerId(): string | null {
  try {
    return localStorage.getItem(CURRENT_KEY);
  } catch {
    return null;
  }
}

export function getCurrentSeller(): Seller | null {
  const id = getCurrentSellerId();
  if (!id) return null;
  return getSeller(id) ?? null;
}

export function registerSeller(
  data: Omit<Seller, "id" | "createdAt">,
): Seller {
  const seller: Seller = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const sellers = getSellers();
  sellers.push(seller);
  write(SELLERS_KEY, sellers);
  localStorage.setItem(CURRENT_KEY, seller.id);
  return seller;
}

export function updateSeller(id: string, patch: Partial<Seller>): Seller | null {
  const sellers = getSellers();
  const idx = sellers.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  sellers[idx] = { ...sellers[idx], ...patch, id, createdAt: sellers[idx].createdAt };
  write(SELLERS_KEY, sellers);
  return sellers[idx];
}

export function logoutSeller() {
  localStorage.removeItem(CURRENT_KEY);
}

// ---- Products ----
export function getAllSellerProducts(): SellerProduct[] {
  return read<SellerProduct>(PRODUCTS_KEY).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}

export function getProductsForSeller(sellerId: string): SellerProduct[] {
  return getAllSellerProducts().filter((p) => p.sellerId === sellerId);
}

export function getSellerProduct(id: string): SellerProduct | undefined {
  return getAllSellerProducts().find((p) => p.id === id);
}

export function addProduct(
  data: Omit<SellerProduct, "id" | "createdAt">,
): SellerProduct {
  const product: SellerProduct = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const products = read<SellerProduct>(PRODUCTS_KEY);
  products.push(product);
  write(PRODUCTS_KEY, products);
  return product;
}

export function updateProduct(
  id: string,
  patch: Partial<SellerProduct>,
): SellerProduct | null {
  const products = read<SellerProduct>(PRODUCTS_KEY);
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  products[idx] = { ...products[idx], ...patch, id };
  write(PRODUCTS_KEY, products);
  return products[idx];
}

export function deleteProduct(id: string) {
  write(
    PRODUCTS_KEY,
    read<SellerProduct>(PRODUCTS_KEY).filter((p) => p.id !== id),
  );
}
