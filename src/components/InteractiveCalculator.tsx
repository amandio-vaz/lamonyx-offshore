"use client";

import { useState } from "react";

export default function InteractiveCalculator() {
  const [servers, setServers] = useState<number>(50);
  const [downtimeCost, setDowntimeCost] = useState<number>(5000);
  const [currentMTTR, setCurrentMTTR] = useState<number>(4);

  // Calculations
  const lamonyxMTTRHours = 0.083; // 5 minutes
  const incidentsPerYearEst = Math.max(2, Math.round(servers / 15));
  const currentTotalDowntimeCost = incidentsPerYearEst * currentMTTR * downtimeCost;
  const lamonyxDowntimeCost = incidentsPerYearEst * lamonyxMTTRHours * downtimeCost;
  const yearlySavings = Math.max(0, currentTotalDowntimeCost - lamonyxDowntimeCost);

  return (
    <section id="simulador" className="py-28 bg-[#0a1420] relative telemetry-grid border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">SIMULADOR DE IMPACTO E RESILIÊNCIA</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-3">
            Calcule o ganho de MTTR e redução de custos.
          </h2>
          <p className="mt-4 text-[#90a3b4] text-base sm:text-lg">
            Veja a diferença que a detecção antecipada por IA e a automação de resposta fazem nos resultados financeiros da sua operação.
          </p>
        </div>

        <div className="surface-card surface-glow rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-display font-medium text-white text-sm">
                  Quantidade de Servidores / Ativos de Rede
                </label>
                <span className="font-mono text-[#38C6D8] font-bold text-base">{servers} ativos</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={servers}
                onChange={(e) => setServers(Number(e.target.value))}
                className="w-full h-2 bg-[#12202f] rounded-lg appearance-none cursor-pointer accent-[#38C6D8]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-display font-medium text-white text-sm">
                  Tempo Médio de Resposta Atual (MTTR em horas)
                </label>
                <span className="font-mono text-[#E3A94E] font-bold text-base">{currentMTTR} horas</span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={currentMTTR}
                onChange={(e) => setCurrentMTTR(Number(e.target.value))}
                className="w-full h-2 bg-[#12202f] rounded-lg appearance-none cursor-pointer accent-[#E3A94E]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-display font-medium text-white text-sm">
                  Custo Estimado por Hora de Indisponibilidade (R$)
                </label>
                <span className="font-mono text-[#46C48E] font-bold text-base">
                  R$ {downtimeCost.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={downtimeCost}
                onChange={(e) => setDowntimeCost(Number(e.target.value))}
                className="w-full h-2 bg-[#12202f] rounded-lg appearance-none cursor-pointer accent-[#46C48E]"
              />
            </div>
          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-6 bg-[#0d1a26] rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-mono-tag text-xs text-[#38C6D8] font-semibold">ESTIMATIVA DE ECONOMIA ANUAL</span>
              <div className="font-display font-bold text-4xl sm:text-5xl text-white mt-2 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#38C6D8] to-[#46C48E]">
                R$ {yearlySavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
              </div>
              <p className="text-xs text-[#90a3b4] mb-8">
                Economia estimada reduzindo o MTTR de {currentMTTR}h para menos de 5 minutos com a automação e NOC/SOC da Lamonyx.
              </p>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90a3b4]">Incidentes Estimados/Ano:</span>
                  <span className="font-mono text-white font-bold">{incidentsPerYearEst} incidentes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90a3b4]">MTTR com Lamonyx IA:</span>
                  <span className="font-mono text-[#46C48E] font-bold">&lt; 5 minutos (SOAR)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#90a3b4]">Uptime Projetado:</span>
                  <span className="font-mono text-[#38C6D8] font-bold">99.99%</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contato"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold hover:bg-white transition-all shadow-lg shadow-[#38C6D8]/20"
              >
                Solicitar Proposta de Arquitetura
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
