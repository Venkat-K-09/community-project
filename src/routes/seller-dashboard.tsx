import { useState, useEffect, useCallback } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { toast } from "sonner";
import {
  User,
  Package,
  MessageSquare,
  Pencil,
  Trash2,
  Plus,
  LogOut,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { useSeller } from "@/contexts/SellerContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ProductFormModal } from "@/components/ProductFormModal";
import {
  sellerCategories,
  categoryLabel,
  updateSeller,
  getProductsForSeller,
  deleteProduct,
  type SellerProduct,
} from "@/lib/sellers";
import { getInquiriesForSeller, type Inquiry } from "@/lib/inquiries";

export const Route = createFileRoute("/seller-dashboard")({
  head: () => ({
    meta: [
      { title: "Seller Dashboard — Community Makers' Market" },
      { name: "description", content: "Manage your profile, products and customer inquiries." },
    ],
  }),
  component: DashboardPage,
});

type Tab = "profile" | "products" | "inquiries";

function DashboardPage() {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const { seller, refresh, logout } = useSeller();
  const [tab, setTab] = useState<Tab>("profile");
  const [products, setProducts] = useState<SellerProduct[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => window.scrollTo(0, 0), []);

  const reload = useCallback(() => {
    if (!seller) return;
    setProducts(getProductsForSeller(seller.id));
    setInquiries(getInquiriesForSeller(seller.id));
  }, [seller]);

  useEffect(() => {
    reload();
  }, [reload]);

  // Redirect if not registered
  useEffect(() => {
    const id = setTimeout(() => {
      if (!seller) navigate({ to: "/sell" });
    }, 50);
    return () => clearTimeout(id);
  }, [seller, navigate]);

  if (!seller) return null;

  const tabs: { key: Tab; label: string; icon: typeof User }[] = [
    { key: "profile", label: t("myProfile"), icon: User },
    { key: "products", label: t("myProducts"), icon: Package },
    { key: "inquiries", label: t("customerInquiries"), icon: MessageSquare },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{t("dashboardWelcome")},</p>
          <h1 className="text-2xl font-bold">{seller.businessName}</h1>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            logout();
            toast.success(t("logout"));
            navigate({ to: "/" });
          }}
        >
          <LogOut className="mr-1 h-4 w-4" /> {t("logout")}
        </Button>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-border">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            onClick={() => setTab(tb.key)}
            className={`flex items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              tab === tb.key
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <tb.icon className="h-4 w-4" /> {tb.label}
            {tb.key === "products" && products.length > 0 && (
              <Badge variant="secondary" className="ml-1">{products.length}</Badge>
            )}
            {tb.key === "inquiries" && inquiries.length > 0 && (
              <Badge variant="secondary" className="ml-1">{inquiries.length}</Badge>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "profile" && <ProfileSection key={seller.id} />}
        {tab === "products" && (
          <ProductsSection products={products} sellerId={seller.id} onChange={reload} />
        )}
        {tab === "inquiries" && <InquiriesSection inquiries={inquiries} />}
      </div>
    </div>
  );

  // ----- Profile -----
  function ProfileSection() {
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState({
      businessName: seller!.businessName,
      fullName: seller!.fullName,
      category: seller!.category,
      location: seller!.location,
      description: seller!.description,
      email: seller!.email,
      phone: seller!.phone,
    });

    const save = () => {
      updateSeller(seller!.id, form);
      refresh();
      setEditing(false);
      toast.success(t("profileUpdated"));
    };

    if (editing) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl rounded-3xl border border-border bg-card p-6 shadow-soft">
          <div className="grid gap-4">
            <Row label={t("businessName")}>
              <Input value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
            </Row>
            <Row label={t("fullName")}>
              <Input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            </Row>
            <Row label={t("businessCategory")}>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {sellerCategories.map((c) => (
                  <option key={c.key} value={c.key}>{tr(c.label)}</option>
                ))}
              </select>
            </Row>
            <Row label={t("location")}>
              <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </Row>
            <Row label={t("email")}>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Row>
            <Row label={t("phone")}>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Row>
            <Row label={t("businessDescription")}>
              <Textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </Row>
            <div className="flex gap-2">
              <Button onClick={save}>{t("saveChanges")}</Button>
              <Button variant="outline" onClick={() => setEditing(false)}>{t("cancel")}</Button>
            </div>
          </div>
        </motion.div>
      );
    }

    const cat = categoryLabel(seller!.category);
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl rounded-3xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero text-2xl text-primary-foreground">
              {seller!.businessName.charAt(0).toUpperCase()}
            </span>
            <div>
              <h2 className="text-xl font-bold">{seller!.businessName}</h2>
              {cat && <Badge variant="secondary" className="mt-1 font-normal">{tr(cat)}</Badge>}
            </div>
          </div>
          <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
            <Pencil className="mr-1 h-3.5 w-3.5" /> {t("editProfile")}
          </Button>
        </div>
        <dl className="mt-6 grid gap-3 text-sm">
          <Info label={t("fullName")} value={seller!.fullName} icon={User} />
          <Info label={t("location")} value={seller!.location} icon={MapPin} />
          <Info label={t("email")} value={seller!.email} icon={Mail} />
          <Info label={t("phone")} value={seller!.phone} icon={Phone} />
        </dl>
        <p className="mt-4 rounded-xl bg-muted p-4 text-sm text-muted-foreground">{seller!.description}</p>
      </motion.div>
    );
  }
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Info({ label, value, icon: Icon }: { label: string; value: string; icon: typeof User }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-muted px-4 py-2.5">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

// ----- Products -----
function ProductsSection({
  products,
  sellerId,
  onChange,
}: {
  products: SellerProduct[];
  sellerId: string;
  onChange: () => void;
}) {
  const { t, tr } = useLang();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<SellerProduct | null>(null);

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };
  const openEdit = (p: SellerProduct) => {
    setEditing(p);
    setModalOpen(true);
  };
  const remove = (p: SellerProduct) => {
    if (confirm(t("confirmDeleteProduct"))) {
      deleteProduct(p.id);
      toast.success(t("productDeleted"));
      onChange();
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={openAdd}>
          <Plus className="mr-1 h-4 w-4" /> {t("addProduct")}
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground">
          {t("noProductsYet")}
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const cat = categoryLabel(p.category);
            return (
              <div key={p.id} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-warm text-5xl">📦</div>
                )}
                <div className="flex flex-1 flex-col p-4">
                  {cat && <Badge variant="secondary" className="w-fit font-normal">{tr(cat)}</Badge>}
                  <h3 className="mt-2 font-semibold">{p.name}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <span className="mt-2 text-lg font-bold text-primary">{p.price}</span>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" onClick={() => openEdit(p)}>
                      <Pencil className="mr-1 h-3.5 w-3.5" /> {t("editProduct")}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => remove(p)} aria-label={t("deleteProduct")}>
                      <Trash2 className="h-3.5 w-3.5 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ProductFormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        sellerId={sellerId}
        product={editing}
        onSaved={onChange}
      />
    </div>
  );
}

// ----- Inquiries -----
function InquiriesSection({ inquiries }: { inquiries: Inquiry[] }) {
  const { t } = useLang();

  if (inquiries.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground">
        {t("noInquiriesYet")}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {inquiries.map((iq) => (
        <motion.div
          key={iq.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-5 shadow-soft"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="font-semibold">{iq.name}</p>
              {iq.productName && (
                <p className="text-xs text-muted-foreground">{t("productLabel")}: {iq.productName}</p>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(iq.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {iq.phone}</span>
            <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {iq.email}</span>
          </div>
          <p className="mt-3 rounded-xl bg-muted p-3 text-sm">{iq.message}</p>
        </motion.div>
      ))}
    </div>
  );
}
