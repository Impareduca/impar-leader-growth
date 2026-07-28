import { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  interesse?: string;
};

const IMPAR_NAVY = "#1a3a4d";
const IFRAME_URL =
  "https://cvanwvoddchatcdstwry.supabase.co/functions/v1/crm-webform-embed?id=a3213154-9f28-4ad3-8d80-c30f64768b44";

export function LeadModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div
        className="relative flex w-full max-w-2xl flex-col overflow-hidden bg-white shadow-2xl animate-scale-in"
        style={{ borderRadius: "12px", maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-slate-600 shadow-sm transition hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 pt-8 pb-4 sm:px-8">
          <h2
            id="lead-modal-title"
            className="font-bold"
            style={{ fontSize: "1.5rem", color: IMPAR_NAVY }}
          >
            Vamos conversar?
          </h2>
          <p className="mt-1 text-slate-600" style={{ fontSize: "0.9rem" }}>
            Preencha o formulário para saber mais sobre como a ÍMPAR pode transformar sua organização.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-4 sm:px-4">
          <iframe
            src={IFRAME_URL}
            title="Formulário de contato ÍMPAR"
            width="100%"
            height="450"
            frameBorder="0"
            className="w-full border-0"
            style={{ border: "none", maxWidth: "500px", margin: "0 auto", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
}
