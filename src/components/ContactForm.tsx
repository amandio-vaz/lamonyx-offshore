"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    area: "Cibersegurança & Defesa Perimetral",
    mensagem: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao enviar mensagem. Tente novamente.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Ocorreu um erro inesperado ao enviar. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-28 bg-theme-alt relative border-b border-theme transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Sales Contact Info */}
        <div className="lg:col-span-5">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">FALE COM O TIME DE ARQUITETURA</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-theme-heading mt-3 leading-tight">
            Pronto para transformar sua operação?
          </h2>
          <p className="mt-5 text-theme-body text-base leading-relaxed">
            Nossos arquitetos de soluções estão prontos para analisar seu ambiente atual, apresentar um projeto customizado e demonstrar como a Lamonyx assegura total resiliência operacional.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] shrink-0 mt-1">
                📍
              </div>
              <div>
                <h4 className="font-display font-bold text-theme-heading text-base">Presença Regional</h4>
                <p className="text-sm text-theme-body">Rio de Janeiro · Macaé · Campos dos Goytacazes · Espírito Santo</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] shrink-0 mt-1">
                ✉️
              </div>
              <div>
                <h4 className="font-display font-bold text-theme-heading text-base">Atendimento Corporativo</h4>
                <a href="mailto:contato@lamonyx.com.br" className="text-sm text-[#38C6D8] hover:underline font-mono">
                  contato@lamonyx.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#46C48E]/10 border border-[#46C48E]/30 flex items-center justify-center text-[#46C48E] shrink-0 mt-1">
                🛡️
              </div>
              <div>
                <h4 className="font-display font-bold text-theme-heading text-base">Central NOC/SOC</h4>
                <p className="text-sm text-[#46C48E] font-mono font-bold">Operação Contínua 24x7x365</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="lg:col-span-7">
          <div className="surface-card surface-glow rounded-3xl p-8 sm:p-12 relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#46C48E]/20 border border-[#46C48E] flex items-center justify-center text-[#46C48E] text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-theme-heading">Solicitação Recebida com Sucesso!</h3>
                <p className="text-theme-body text-sm max-w-md mx-auto">
                  Um dos nossos engenheiros de arquitetura entrará em contato em até 2 horas úteis para agendar o diagnóstico técnico.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nome: "",
                      email: "",
                      empresa: "",
                      telefone: "",
                      area: "Cibersegurança & Defesa Perimetral",
                      mensagem: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full border border-theme text-xs font-mono-tag text-theme-heading hover:border-[#38C6D8]"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                    ⚠️ {errorMessage}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-tag text-xs text-theme-body block mb-2">SEU NOME *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading placeholder-theme-body/50 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tag text-xs text-theme-body block mb-2">E-MAIL CORPORATIVO *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com.br"
                      className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading placeholder-theme-body/50 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-tag text-xs text-theme-body block mb-2">EMPRESA *</label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Nome da sua organização"
                      className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading placeholder-theme-body/50 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tag text-xs text-theme-body block mb-2">TELEFONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(21) 99999-9999"
                      className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading placeholder-theme-body/50 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-tag text-xs text-theme-body block mb-2">ÁREA DE INTERESSE PRINCIPAL *</label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading focus:border-[#38C6D8] outline-none text-sm transition-colors"
                  >
                    <option>Cibersegurança & Defesa Perimetral</option>
                    <option>Observabilidade & IA Preditiva</option>
                    <option>Backup Imutável & Disaster Recovery</option>
                    <option>Cloud, Kubernetes & Microsserviços</option>
                    <option>NOC / SOC 24x7 Dedicado</option>
                    <option>Diagnóstico 360 & Consultoria Completa</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-tag text-xs text-theme-body block mb-2">RESUMO DO SEU CENÁRIO / DESAFIO</label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conte-nos brevemente sobre o tamanho do ambiente, desafios atuais de segurança ou indisponibilidade..."
                    className="w-full bg-theme-alt border border-theme rounded-xl px-4 py-3.5 text-theme-heading placeholder-theme-body/50 focus:border-[#38C6D8] outline-none text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-bold hover:bg-theme-heading hover:text-theme-page transition-all shadow-xl shadow-[#38C6D8]/20 disabled:opacity-50"
                >
                  {loading ? "Enviando solicitação..." : "Enviar Solicitação de Diagnóstico"}
                </button>

                <p className="text-[0.68rem] text-center text-theme-body font-mono">
                  🔒 Seus dados estão seguros. Não compartilhamos informações com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
