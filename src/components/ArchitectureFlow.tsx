"use client";

import { useState } from "react";

export default function ArchitectureFlow() {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  return (
    <section id="arquitetura" className="py-28 bg-theme-page relative telemetry-grid border-b border-theme transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">RESILIÊNCIA & NOC/SOC INTELIGENTE</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-theme-heading mt-3 leading-tight">
            Autonomia local, orquestração em nuvem e comando via NOC/SOC Inteligente 24x7.
          </h2>
          <p className="mt-4 text-theme-body text-base sm:text-lg leading-relaxed">
            Uma arquitetura híbrida em três camadas conectada a um NOC/SOC Inteligente, garantindo monitoramento contínuo, resposta a incidentes e proteção total mesmo durante a perda de conectividade.
          </p>
        </div>

        {/* Interactive Step Switcher Bar */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <button
            onClick={() => setSelectedTier(1)}
            className={`p-6 rounded-2xl text-left border transition-all ${
              selectedTier === 1
                ? "bg-theme-card border-[#38C6D8] shadow-lg shadow-[#38C6D8]/10 ring-1 ring-[#38C6D8]"
                : "surface-card border-theme opacity-75 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tag text-xs text-[#38C6D8]">CAMADA 01</span>
              <span className="w-2 h-2 rounded-full bg-[#46C48E]" />
            </div>
            <h3 className="font-display font-bold text-xl text-theme-heading">Edge & Coleta Local</h3>
            <p className="text-xs text-theme-body mt-1">Autonomia total e buffer persistente</p>
          </button>

          <button
            onClick={() => setSelectedTier(2)}
            className={`p-6 rounded-2xl text-left border transition-all ${
              selectedTier === 2
                ? "bg-theme-card border-[#38C6D8] shadow-lg shadow-[#38C6D8]/10 ring-1 ring-[#38C6D8]"
                : "surface-card border-theme opacity-75 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tag text-xs text-[#38C6D8]">CAMADA 02</span>
              <span className="w-2 h-2 rounded-full bg-[#38C6D8]" />
            </div>
            <h3 className="font-display font-bold text-xl text-theme-heading">Nuvem Lamonyx</h3>
            <p className="text-xs text-theme-body mt-1">Controle multi-tenant e Motor de IA</p>
          </button>

          <button
            onClick={() => setSelectedTier(3)}
            className={`p-6 rounded-2xl text-left border transition-all ${
              selectedTier === 3
                ? "bg-theme-card border-[#38C6D8] shadow-lg shadow-[#38C6D8]/10 ring-1 ring-[#38C6D8]"
                : "surface-card border-theme opacity-75 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tag text-xs text-[#38C6D8]">CAMADA 03</span>
              <span className="w-2 h-2 rounded-full bg-[#E3A94E]" />
            </div>
            <h3 className="font-display font-bold text-xl text-theme-heading">NOC / SOC 24x7</h3>
            <p className="text-xs text-theme-body mt-1">Comando operacional & SLA garantido</p>
          </button>
        </div>

        {/* Tier Details Active Content */}
        <div className="surface-card surface-glow rounded-3xl p-8 sm:p-12 border border-theme">
          {selectedTier === 1 && (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono-tag text-[#38C6D8] font-semibold">AUTONOMIA INDEPENDENTE</span>
                <h3 className="font-display font-bold text-3xl text-theme-heading mt-2 mb-4">
                  01. Edge Offshore & On-Premise
                </h3>
                <p className="text-theme-body text-base leading-relaxed mb-6">
                  Coletores locais leves e redundantes que continuam processando métricas e salvando logs localmente mesmo que a comunicação externa seja interrompida por completo.
                </p>
                <ul className="space-y-3 text-sm text-theme-heading">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Coleta local de Firewalls de Próxima Geração e Roteadores Enterprise via API/Syslog
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Buffer local persistente com armazenamento temporário imutável
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Sincronização delta inteligente e criptografia TLS/mTLS ponta a ponta
                  </li>
                </ul>
              </div>
              <div className="bg-theme-alt rounded-2xl p-6 border border-theme font-mono text-xs text-theme-body space-y-2">
                <div className="text-[#46C48E] font-bold">[LOCAL_COLLECTOR] STATUS: OPERATIONAL</div>
                <div>&gt; Syncing Security Gateway API events... 1,420 eps</div>
                <div>&gt; Local buffer level: 0.04% (Nominal)</div>
                <div>&gt; Uplink connection: Active (50ms latency)</div>
                <div className="text-[#38C6D8]">&gt; mTLS Tunnel: ESTABLISHED & SECURE</div>
              </div>
            </div>
          )}

          {selectedTier === 2 && (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono-tag text-[#38C6D8] font-semibold">MOTOR DE INTELIGÊNCIA & PROCESSAMENTO</span>
                <h3 className="font-display font-bold text-3xl text-theme-heading mt-2 mb-4">
                  02. Nuvem Lamonyx & Correlacionador IA
                </h3>
                <p className="text-theme-body text-base leading-relaxed mb-6">
                  Ambiente multi-tenant em nuvem com isolamento rigoroso por linha (Row-Level Security), onde nosso motor de IA processa milhões de eventos por minuto.
                </p>
                <ul className="space-y-3 text-sm text-theme-heading">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    API Gateway de alta vazão e barramento de mensagens resiliente
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Algoritmos ML/AI de detecção de comportamentos anômalos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Isolamento de dados por cliente (PostgreSQL RLS strict policy)
                  </li>
                </ul>
              </div>
              <div className="bg-theme-alt rounded-2xl p-6 border border-theme font-mono text-xs text-theme-body space-y-2">
                <div className="text-[#38C6D8] font-bold">[AI_CORRELATOR_ENGINE] ONLINE</div>
                <div>&gt; Ingesting events: 48,500 / sec</div>
                <div>&gt; Threat score calculation: NORMAL</div>
                <div className="text-[#46C48E]">&gt; False positive filtering: 99.82% accurate</div>
                <div>&gt; Tenant isolation check: PASSED (Zero leakage)</div>
              </div>
            </div>
          )}

          {selectedTier === 3 && (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono-tag text-[#38C6D8] font-semibold">COMANDO OPERACIONAL CONTÍNUO</span>
                <h3 className="font-display font-bold text-3xl text-theme-heading mt-2 mb-4">
                  03. Central NOC / SOC 24x7
                </h3>
                <p className="text-theme-body text-base leading-relaxed mb-6">
                  Especialistas certificados operando em conjunto com playbooks de automação para atuar e conter qualquer ameaça dentro do SLA contratual.
                </p>
                <ul className="space-y-3 text-sm text-theme-heading">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Atendimento humanizado por engenheiros nível 2 e 3
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Playbooks automáticos de mitigação SOAR (Security Orchestration)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38C6D8]" />
                    Relatórios executivos mensais e auditoria imutável WORM
                  </li>
                </ul>
              </div>
              <div className="bg-theme-alt rounded-2xl p-6 border border-theme font-mono text-xs text-theme-body space-y-2">
                <div className="text-[#E3A94E] font-bold">[NOC_SOC_CONSOLE] ACTIVE 24/7</div>
                <div>&gt; Active incidents: 0 critical</div>
                <div>&gt; Average MTTR today: 2 min 14 sec</div>
                <div className="text-[#46C48E]">&gt; Contractual SLA Compliance: 100%</div>
                <div>&gt; Audit log vault: WORM Encrypted</div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
