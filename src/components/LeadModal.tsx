import { useEffect, useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  interesse?: string;
};

const IMPAR_ORANGE = "#ff8647";
const FORM_ID = "a3213154-9f28-4ad3-8d80-c30f64768b44";
const ENDPOINT = "https://cvanwvoddchatcdstwry.supabase.co/functions/v1/crm-webform-submit";

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
    const v = params.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

export function LeadModal({ open, onClose, interesse = "" }: Props) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setErrorMsg("");
    }
  }, [open]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const utm = getUtmParams();
    const payload = {
      form_id: FORM_ID,
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      empresa: form.empresa.trim(),
      mensagem: form.mensagem.trim(),
      interesse: interesse || undefined,
      ...utm,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Não foi possível enviar. Tente novamente em instantes.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl animate-scale-in"
        style={{ borderRadius: "12px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-6 pt-8 pb-2 sm:px-8">
          <h2
            id="lead-modal-title"
            className="text-black font-bold"
            style={{ fontSize: "1.5rem" }}
          >
            ÍMPAR
          </h2>
          <p className="mt-1 text-slate-500" style={{ fontSize: "0.875rem" }}>
            Vi no site da ÍMPAR algo que me interessou:
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center sm:px-8">
            <CheckCircle2 className="h-12 w-12" style={{ color: IMPAR_ORANGE }} />
            <h3 className="text-lg font-semibold text-black">Mensagem enviada!</h3>
            <p className="text-sm text-slate-600">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 px-6 py-5 sm:px-8">
            <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" required />
            <Field label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />
            <Field label="Empresa" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nome da empresa" required />

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={3}
                maxLength={1000}
                placeholder="Sua mensagem..."
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2"
                style={{ ["--tw-ring-color" as string]: IMPAR_ORANGE }}
              />
            </div>

            {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              style={{ background: IMPAR_ORANGE }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-slate-700">
        {label} {required && <span style={{ color: "#ff8647" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2"
        style={{ ["--tw-ring-color" as string]: "#ff8647" }}
      />
    </div>
  );
}
