"use client";

export default function AIFeatures() {
  return (
    <section className="py-28 bg-[#0d1a26] border-b border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#38C6D8]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#38C6D8]/30 bg-[#38C6D8]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#38C6D8] animate-pulse" />
            <span className="font-mono-tag text-[#38C6D8] font-semibold">MOTOR DE INTELIGÊNCIA ARTIFICIAL</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-2 leading-tight">
            Segurança, Automação e Análise Inteligente.
          </h2>
          <p className="mt-4 text-[#90a3b4] text-base sm:text-lg leading-relaxed">
            Nossa plataforma transforma volumes massivos de dados brutos em decisões operacionais precisas, antecipando falhas e agindo autonomamente.
          </p>
        </div>

        {/* 4 Elaborate Feature Cards with Tech Visual Modules */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Card 1: Detecção de Anomalias */}
          <div className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#38C6D8]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tag text-xs text-[#38C6D8] tracking-widest font-semibold">
                  BASELINES COMPORTAMENTAIS
                </span>
                <span className="px-3 py-1 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-xs font-mono text-[#38C6D8]">
                  ML / AI Engine
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#38C6D8] transition-colors">
                Detecção de Anomalias em Tempo Real
              </h3>
              <p className="text-[#90a3b4] text-base leading-relaxed mb-8">
                Modelos de aprendizado contínuo identificam desvios sutis no padrão de tráfego, chamadas de API atípicas ou variações de carga antes que afetem a estabilidade.
              </p>
            </div>

            {/* Elaborate Graphic Visual Module: Neural Network & Waveform */}
            <div className="bg-[#0a1420] rounded-2xl p-6 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-[#90a3b4] mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#46C48E]" />
                  Telemetry Baseline Stream
                </span>
                <span className="text-[#38C6D8]">Pattern match: Normal</span>
              </div>

              {/* Animated Waveform SVG */}
              <div className="relative h-24 flex items-center justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" fill="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.08)" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                  
                  {/* Baseline Smooth Curve */}
                  <path
                    d="M 0 50 Q 50 20, 100 50 T 200 50 T 300 50 T 400 50"
                    stroke="rgba(56,198,216,0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Active Anomaly Pulse Line */}
                  <path
                    d="M 0 50 Q 40 45, 80 50 T 160 50 Q 190 10, 210 90 T 240 50 T 320 50 T 400 50"
                    stroke="#38C6D8"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  {/* Highlight Anomaly Node */}
                  <circle cx="200" cy="50" r="6" fill="#38C6D8" className="animate-ping" />
                  <circle cx="200" cy="50" r="4" fill="#ffffff" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[0.7rem] font-mono text-[#90a3b4] pt-3 border-t border-white/10 mt-2">
                <span>Micro-desvios filtrados</span>
                <span className="text-[#46C48E]">Monitoramento Ativo</span>
              </div>
            </div>
          </div>

          {/* Card 2: Análise Preditiva de Falhas */}
          <div className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#38C6D8]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tag text-xs text-[#38C6D8] tracking-widest font-semibold">
                  PREVENÇÃO ANTECIPADA
                </span>
                <span className="px-3 py-1 rounded-full bg-[#46C48E]/10 border border-[#46C48E]/30 text-xs font-mono text-[#46C48E]">
                  Predictive Health
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#38C6D8] transition-colors">
                Análise Preditiva de Falhas
              </h3>
              <p className="text-[#90a3b4] text-base leading-relaxed mb-8">
                Algoritmos analisam a tendência de consumo de memória, IOPS de disco, temperatura de hardware e latência de rede, antecipando gargalos e falhas físicas.
              </p>
            </div>

            {/* Elaborate Graphic Visual Module: Multi-Gauge Predictive Meters */}
            <div className="bg-[#0a1420] rounded-2xl p-6 border border-white/10 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-[#90a3b4] mb-1.5">
                  <span>Capacidade de Armazenamento</span>
                  <span className="text-[#46C48E]">Saudável (Estável)</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
                  <div className="h-full bg-[#46C48E] w-[62%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-[#90a3b4] mb-1.5">
                  <span>Previsão de Carga de Processamento</span>
                  <span className="text-[#38C6D8]">Normalizado por IA</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
                  <div className="h-full bg-[#38C6D8] w-[45%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-[#90a3b4] mb-1.5">
                  <span>Integridade dos Enlaces de Comunicação</span>
                  <span className="text-[#46C48E]">Redundância Ativa</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
                  <div className="h-full bg-[#46C48E] w-[88%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Correlação Inteligente de Eventos */}
          <div className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#38C6D8]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tag text-xs text-[#38C6D8] tracking-widest font-semibold">
                  ZERO NOISE FILTERING
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E3A94E]/10 border border-[#E3A94E]/30 text-xs font-mono text-[#E3A94E]">
                  Event Correlation
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#38C6D8] transition-colors">
                Correlação Inteligente de Eventos
              </h3>
              <p className="text-[#90a3b4] text-base leading-relaxed mb-8">
                Processamento contínuo de milhares de logs e métricas por segundo para agrupar sintomas secundários em um diagnóstico único de causa-raiz.
              </p>
            </div>

            {/* Elaborate Graphic Visual Module: Funnel Aggregation Pipeline */}
            <div className="bg-[#0a1420] rounded-2xl p-6 border border-white/10 relative">
              <div className="grid grid-cols-3 gap-3 items-center text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-mono text-[#90a3b4]">Eventos Brutos</div>
                  <div className="text-sm font-bold text-white mt-1">Logs & Syslogs</div>
                </div>
                <div className="flex justify-center text-[#38C6D8]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="p-3 rounded-xl bg-[#38C6D8]/15 border border-[#38C6D8]/40">
                  <div className="text-xs font-mono text-[#38C6D8]">Causa-Raiz</div>
                  <div className="text-sm font-bold text-white mt-1">Alerta Preciso</div>
                </div>
              </div>
              <p className="text-[0.7rem] font-mono text-[#90a3b4] text-center mt-4">
                Sua equipe foca no que realmente importa, sem fadiga de alertas falsos.
              </p>
            </div>
          </div>

          {/* Card 4: Automação Operacional & SOAR */}
          <div className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#38C6D8]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tag text-xs text-[#38C6D8] tracking-widest font-semibold">
                  RESPOSTA AUTÔNOMA
                </span>
                <span className="px-3 py-1 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-xs font-mono text-[#38C6D8]">
                  SOAR Engine
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#38C6D8] transition-colors">
                Automação Operacional & SOAR
              </h3>
              <p className="text-[#90a3b4] text-base leading-relaxed mb-8">
                Playbooks pré-configurados executam ações de mitigação autônoma instantaneamente: bloqueio de ameaças na borda, isolamento de hosts ou rollback seguro.
              </p>
            </div>

            {/* Elaborate Graphic Visual Module: Workflow Playbook Trigger UI */}
            <div className="bg-[#0a1420] rounded-2xl p-6 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[#46C48E] pb-2 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#46C48E]" />
                  PLAYBOOK AUTOMÁTICO ATIVO
                </span>
                <span>EXECUÇÃO INSTANTÂNEA</span>
              </div>
              <div className="flex items-center justify-between text-[#90a3b4]">
                <span>1. Bloqueio de IP Suspeito na Borda</span>
                <span className="text-[#46C48E]">Concluído</span>
              </div>
              <div className="flex items-center justify-between text-[#90a3b4]">
                <span>2. Isolamento Lógico da Porta de Rede</span>
                <span className="text-[#46C48E]">Concluído</span>
              </div>
              <div className="flex items-center justify-between text-[#90a3b4]">
                <span>3. Notificação e Registro WORM</span>
                <span className="text-[#38C6D8]">Registrado</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
