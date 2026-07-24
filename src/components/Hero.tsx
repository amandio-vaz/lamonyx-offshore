"use client";

export default function Hero() {
  return (
    <section id="top" className="relative wash-hero telemetry-grid overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-36 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content Copy */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#38C6D8]/30 bg-[#38C6D8]/10 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#46C48E] animate-pulse" />
            <span className="font-mono-tag text-[#38C6D8] font-semibold">
              CIBERSEGURANÇA · OBSERVABILIDADE · CONTINUIDADE DE NEGÓCIOS
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight text-white">
            Ecossistemas inteligentes que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38C6D8] via-white to-[#46C48E]">monitoram, protegem</span> e antecipam riscos.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#90a3b4] leading-relaxed max-w-xl">
            Integramos a força de <strong className="text-white">tecnologias líderes em Segurança Perimetral, Redes Enterprise e Backup Imutável</strong> a arquiteturas modernas em <strong className="text-[#38C6D8]">Nuvem, Containers e Inteligência Artificial</strong> para garantir alta resiliência e continuidade operacional.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold hover:bg-white transition-all shadow-xl shadow-[#38C6D8]/20 hover:shadow-[#38C6D8]/40"
            >
              Explorar Soluções
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-white/20 text-white font-display font-medium hover:border-[#38C6D8] hover:text-[#38C6D8] transition-all bg-white/5 backdrop-blur-md"
            >
              Agendar Diagnóstico Técnico
            </a>
          </div>

          {/* Key Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            <div>
              <div className="font-display font-bold text-2xl text-white">99.99%</div>
              <div className="font-mono-tag text-[#90a3b4] text-[0.68rem] mt-0.5">SLA de Uptime</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-[#38C6D8]">&lt; 3 min</div>
              <div className="font-mono-tag text-[#90a3b4] text-[0.68rem] mt-0.5">Resposta a Incidentes</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-[#46C48E]">Zero</div>
              <div className="font-mono-tag text-[#90a3b4] text-[0.68rem] mt-0.5">Perda de Dados</div>
            </div>
          </div>
        </div>

        {/* Right Column: Sonar Radar & Telemetry Display */}
        <div className="relative">
          <div className="sonar-wrap">
            <div className="sonar-ring r1" />
            <div className="sonar-ring r2" />
            <div className="sonar-ring r3" />
            <div className="sonar-sweep" />
            <div className="sonar-core" />
            <div className="blip" style={{ top: "22%", left: "68%", animationDelay: "0.2s" }} />
            <div className="blip" style={{ top: "62%", left: "26%", animationDelay: "1.1s" }} />
            <div className="blip" style={{ top: "76%", left: "72%", animationDelay: "2.1s" }} />
            <div className="blip" style={{ top: "34%", left: "20%", animationDelay: "0.7s" }} />
          </div>

          {/* Real-time Status Card Overlay */}
          <div className="mt-8 max-w-sm mx-auto surface-card surface-glow rounded-2xl p-6 relative z-20">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <span className="font-mono-tag text-[#90a3b4]">Status do Ecossistema</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#46C48E]/15 border border-[#46C48E]/30">
                <span className="w-2 h-2 rounded-full bg-[#46C48E] animate-ping" />
                <span className="font-mono-tag text-[#46C48E]">MONITORADO 24x7</span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#90a3b4]">Cibersegurança & Defesa Perimetral</span>
                <span className="text-[#46C48E] font-mono">100% Protegido</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-[#46C48E] rounded-full w-full" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#90a3b4]">IA Preditiva & Anomalias</span>
                <span className="text-[#38C6D8] font-mono">Ativo (0 falso-positivo)</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-[#38C6D8] rounded-full w-[94%]" />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#90a3b4]">Backup Imutável & Recovery</span>
                <span className="text-white font-mono">Imutável OK</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
