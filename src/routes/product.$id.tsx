import { useState, useEffect, useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, MessageCircle, Store, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactFormModal } from "@/components/ContactFormModal";
import { getMarketProduct } from "@/lib/market";
import { getSeller } from "@/lib/sellers";

export const Route = createFileRoute("/product/$id")({
  head: () => ({
    meta: [
      { title: "Product Details — Community Makers' Market" },
      { name: "description", content: "View product details and contact the local seller directly." },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { id } = Route.useParams();
  const { t, lang, tr } = useLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => window.scrollTo(0, 0), [id]);

  const product = useMemo(() => getMarketProduct(id, lang), [id, lang]);
  const seller = product?.sellerId ? getSeller(product.sellerId) : undefined;

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="text-lg text-muted-foreground">{t("productNotFound")}</p>
        <Button className="mt-6" onClick={() => navigate({ to: "/marketplace" })}>
          {t("backToMarketplace")}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <button
        onClick={() => navigate({ to: "/marketplace" })}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {t("backToMarketplace")}
      </button>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-card"
        >
          {product.image ? (
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          ) : (
            <div className="flex aspect-square items-center justify-center bg-gradient-warm text-[8rem]">
              {product.emoji ?? "📦"}
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Badge variant="secondary" className="font-normal">{product.category}</Badge>
          <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-3xl font-extrabold text-primary">{product.price}</p>
          <p className="mt-5 text-muted-foreground">{product.description}</p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              <Store className="h-4 w-4 text-primary" /> {t("sellerInformation")}
            </h3>
            <p className="mt-2 font-medium">{product.sellerName}</p>
            {seller && (
              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {seller.location}
              </p>
            )}
          </div>

          <Button size="lg" className="mt-6 w-full" onClick={() => setOpen(true)}>
            <MessageCircle className="mr-1 h-4 w-4" /> {t("contactSeller")}
          </Button>
        </motion.div>
      </div>

      <ContactFormModal
        open={open}
        onOpenChange={setOpen}
        subject={product.name}
        sellerId={product.sellerId}
        productId={product.id}
        defaultMessage={t("defaultInquiryMsg")}
      />
    </div>
  );
}
