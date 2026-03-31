import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.whatsapp.trim()) {
      toast.error("Preencha todos os campos.");
      return;
    }
    toast.success("Diagnóstico solicitado com sucesso!");
    setForm({ nome: "", email: "", whatsapp: "" });
  };

  return (
    <section id="formulario" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-16 max-w-3xl">
        <div className="border border-primary rounded-2xl p-8 md:p-12">
          <h2 className="text-foreground font-heading font-bold text-2xl md:text-3xl mb-2 text-center">
            Receba um diagnóstico estratégico
          </h2>
          <p className="text-muted-foreground text-center mb-10 font-body">
            Preencha abaixo e nossa equipe entrará em contato.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-foreground font-heading font-medium text-sm mb-2 block">
                Nome <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full bg-foreground text-background rounded-lg px-4 py-3.5 font-body text-sm outline-none focus:ring-2 focus:ring-primary transition-shadow"
                maxLength={100}
              />
            </div>

            <div>
              <label className="text-foreground font-heading font-medium text-sm mb-2 block">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-foreground text-background rounded-lg px-4 py-3.5 font-body text-sm outline-none focus:ring-2 focus:ring-primary transition-shadow"
                maxLength={255}
              />
            </div>

            <div>
              <label className="text-foreground font-heading font-medium text-sm mb-2 block">
                WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full bg-foreground text-background rounded-lg px-4 py-3.5 font-body text-sm outline-none focus:ring-2 focus:ring-primary transition-shadow"
                maxLength={20}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-brand text-primary-foreground font-heading font-semibold text-sm tracking-widest uppercase py-4 rounded-full glow-brand hover:glow-brand-hover transition-all duration-300 hover:scale-[1.02] mt-4"
            >
              Quero meu diagnóstico
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
