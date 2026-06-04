export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  createdAt: string;
}

const KEY = "cmm-inquiries";

export function saveInquiry(data: Omit<Inquiry, "id" | "createdAt">): Inquiry {
  const inquiry: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  try {
    const existing: Inquiry[] = JSON.parse(localStorage.getItem(KEY) || "[]");
    existing.push(inquiry);
    localStorage.setItem(KEY, JSON.stringify(existing));
  } catch {
    localStorage.setItem(KEY, JSON.stringify([inquiry]));
  }
  return inquiry;
}

export function getInquiries(): Inquiry[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}
