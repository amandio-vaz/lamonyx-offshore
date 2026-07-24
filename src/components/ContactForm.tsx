"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contato" className="py-28 bg-[#0d1a26] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Sales Contact Info */}
        <div className="lg:col-span-5">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">FALE COM O TIME DE ARQUITETURA</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-3 leading-tight">
            Pronto para transformar sua operação?
          </h2>
          <p className="mt-5 text-[#90a3b4] text-base leading-relaxed">
            Nossos arquitetos de soluções estão prontos para analisar seu ambiente atual, apresentar um projeto customizado e demonstrar como a Lamonyx assegura total resiliência operacional.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] shrink-0 mt-1">
                📍
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Presença Regional</h4>
                <p className="text-sm text-[#90a3b4]">Rio de Janeiro · Macaé · Campos dos Goytacazes · Espírito Santo</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] shrink-0 mt-1">
                ✉️
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Atendimento Corporativo</h4>
                <p className="text-sm text-[#90a3b4]">contato@lamonyx.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#46C48E]/10 border border-[#46C48E]/30 flex items-center justify-center text-[#46C48E] shrink-0 mt-1">
                🛡️
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base">Central NOC/SOC</h4>
                <p className="text-sm text-[#46C48E] font-mono">Operação Contínua 24x7x365</p>
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
                <h3 className="font-display font-bold text-2xl text-white">Solicitação Recebida com Sucesso!</h3>
                <p className="text-[#90a3b4] text-sm max-w-md mx-auto">
                  Um dos nossos engenheiros de arquitetura entrará em contato em até 2 horas úteis para agendar o diagnóstico técnico.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono-tag text-white hover:border-[#38C6D8]"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">SEU NOME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#90a3b4]/40 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">E-MAIL CORPORATIVO *</label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@empresa.com.br"
                      className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#90a3b4]/40 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">EMPRESA *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome da sua organização"
                      className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#90a3b4]/40 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">TELEFONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(21) 99999-9999"
                      className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#90a3b4]/40 focus:border-[#38C6D8] outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">ÁREA DE INTERESSE PRINCIPAL *</label>
                  <select className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-[#38C6D8] outline-none text-sm transition-colors">
                    <option>Cibersegurança (Fortinet / Cisco)</option>
                    <option>Observabilidade & IA Preditiva</option>
                    <option>Backup & Disaster Recovery (Veeam)</option>
                    <option>Cloud, Kubernetes & Microsserviços</option>
                    <option>NOC / SOC 24x7 Dedicado</option>
                    <option>Diagnóstico 360 & Consultoria Completa</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-tag text-xs text-[#90a3b4] block mb-2">RESUMO DO SEU CENÁRIO / DESAFIO</label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos brevemente sobre o tamanho do ambiente, desafios atuais de segurança ou indisponibilidade..."
                    className="w-full bg-[#0a1420] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#90a3b4]/40 focus:border-[#38C6D8] outline-none text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-bold hover:bg-white transition-all shadow-xl shadow-[#38C6D8]/20 disabled:opacity-50"
                >
                  {loading ? "Processando envio..." : "Enviar Solicitação de Diagnóstico"}
                </button>

                <p className="text-[0.68rem] text-center text-[#90a3b4] font-mono">
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
