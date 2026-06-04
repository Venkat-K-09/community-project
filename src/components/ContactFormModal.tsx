import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { saveInquiry } from "@/lib/inquiries";

export function ContactFormModal({
  open,
  onOpenChange,
  subject,
  heading,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  subject: string;
  heading?: string;
}) {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: t("msgPlaceholder"),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "!";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "!";
    if (form.phone.trim().replace(/\D/g, "").length < 8) e.phone = "!";
    if (form.message.trim().length < 5) e.message = "!";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate sending message
    setTimeout(() => {
      saveInquiry({ ...form, subject });
      setLoading(false);
      onOpenChange(false);
      toast.success(t("inquirySent"));
      setForm({ name: "", email: "", phone: "", message: t("msgPlaceholder") });
    }, 900);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{heading ?? t("contactSeller")}</DialogTitle>
          <DialogDescription>
            {t("contactSellerFor")}: <span className="font-medium text-foreground">{subject}</span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="cf-name">{t("yourName")}</Label>
            <Input
              id="cf-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
              className={errors.name ? "border-destructive" : ""}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="cf-email">{t("email")}</Label>
            <Input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              className={errors.email ? "border-destructive" : ""}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="cf-phone">{t("phone")}</Label>
            <Input
              id="cf-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              aria-invalid={!!errors.phone}
              className={errors.phone ? "border-destructive" : ""}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="cf-message">{t("message")}</Label>
            <Textarea
              id="cf-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
              className={errors.message ? "border-destructive" : ""}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? t("sending") : t("send")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
