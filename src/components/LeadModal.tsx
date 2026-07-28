import { useEffect, useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Props = {
  open: boolean;
  onClose: () => void;
  interesse?: string;
};

const IMPAR_BLUE = "#1a3a4d";
const IMPAR_ORANGE = "#e88a3b";

export function LeadModal({ open, onClose, interesse = "" }: Props) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
    interesse,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, interesse }));
      setStatus("idle");
      setErrorMsg("");
    }
  }, [open, interesse]);

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
    const { error } = await supabase.from("leads").insert({
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      empresa: form.empresa.trim(),
      mensagem: form.mensagem.trim() || null,
      interesse: form.interesse.trim() || null,
    });
    if (error) {
      setStatus("error");
      setErrorMsg("Não foi possível enviar. Tente novamente em instantes.");
      return;
    }
    setStatus("success");
    setForm({ nome: "", email: "", telefone: "", empresa: "", mensagem: "", interesse: "" });
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
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-white/90 transition hover:bg-white/15"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="px-6 pb-5 pt-7 text-white sm:px-8"
          style={{ background: IMPAR_BLUE }}
        >
          <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-white/70">
            ÍMPAR
          </p>
          <h2 id="lead-modal-title" className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Preencha seus dados e nossa equipe entrará em contato.
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 px-6 py-12 text-center sm:px-8">
            <CheckCircle2 className="h-14 w-14" style={{ color: IMPAR_ORANGE }} />
            <h3 className="font-display text-xl font-semibold" style={{ color: IMPAR_BLUE }}>
              Mensagem enviada!
            </h3>
            <p className="max-w-sm text-sm text-slate-600">
              Obrigado pelo interesse. Entraremos em contato em breve pelo canal informado.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: IMPAR_ORANGE }}
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6 sm:px-8">
            {form.interesse && (
              <div
                className="rounded-lg px-3 py-2 text-xs"
                style={{ background: `${IMPAR_ORANGE}15`, color: IMPAR_BLUE }}
              >
                Interesse: <span className="font-medium">{form.interesse}</span>
              </div>
            )}

            <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="voce@email.com"
              required
            />
            <Field
              label="Telefone"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              required
            />
            <Field label="Empresa" name="empresa" value={form.empresa} onChange={handleChange} required />

            <div>
              <label className="mb-1.5 block text-xs font-medium" style={{ color: IMPAR_BLUE }}>
                Mensagem
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={3}
                maxLength={1000}
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2"
                style={{ ["--tw-ring-color" as string]: IMPAR_ORANGE }}
                placeholder="Conte um pouco sobre o que procura..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 disabled:opacity-60"
              style={{ background: IMPAR_ORANGE, boxShadow: `0 10px 25px -10px ${IMPAR_ORANGE}` }}
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
      <label className="mb-1.5 block text-xs font-medium" style={{ color: IMPAR_BLUE }}>
        {label} {required && <span style={{ color: IMPAR_ORANGE }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2"
        style={{ ["--tw-ring-color" as string]: IMPAR_ORANGE }}
      />
    </div>
  );
}
