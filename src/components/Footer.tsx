"use client";

import LamonyxLogo from "./LamonyxLogo";

export default function Footer() {
  return (
    <footer className="bg-theme-page border-t border-theme text-theme-body relative overflow-hidden transition-colors">
      {/* Subtle Bottom Glow Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#38C6D8]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Inquiry Prompt Bar */}
      <div className="border-b border-theme bg-theme-alt py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono-tag text-xs text-[#38C6D8] font-semibold">SUPORTE & CONSULTORIA ENTERPRISE</span>
            <h3 className="font-display font-bold text-2xl text-theme-heading mt-1">
              Pronto para elevar a resiliência da sua infraestrutura?
            </h3>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-bold text-sm hover:bg-theme-heading hover:text-theme-page transition-all shadow-xl shadow-[#38C6D8]/20 shrink-0"
          >
            Falar com Nossos Especialistas
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1 & 2: Brand Info & Regional Presence */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#top" className="inline-block hover:opacity-95 transition-opacity">
              <LamonyxLogo height={40} />
            </a>
            
            <p className="text-sm leading-relaxed max-w-sm text-theme-body">
              Mais do que implementar tecnologia, a Lamonyx constrói ecossistemas inteligentes capazes de monitorar, proteger, automatizar e antecipar riscos em operações críticas.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-theme-card border border-theme text-theme-heading">Rio de Janeiro</span>
              <span className="px-3 py-1 rounded-full bg-theme-card border border-theme text-theme-heading">Macaé</span>
              <span className="px-3 py-1 rounded-full bg-theme-card border border-theme text-theme-heading">Campos</span>
              <span className="px-3 py-1 rounded-full bg-theme-card border border-theme text-[#38C6D8] font-bold">Espírito Santo</span>
            </div>
          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-4">
            <h4 className="font-mono-tag text-xs text-theme-heading font-semibold tracking-widest border-b border-theme pb-2">
              SOLUÇÕES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Cibersegurança Perimetral</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Observabilidade & IA Preditiva</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Backup Imutável & Recovery</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Containers & Kubernetes</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">NOC / SOC 24x7 Dedicado</a></li>
            </ul>
          </div>

          {/* Col 4: Arquitetura & Tecnologia */}
          <div className="space-y-4">
            <h4 className="font-mono-tag text-xs text-theme-heading font-semibold tracking-widest border-b border-theme pb-2">
              ARQUITETURA & IA
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#ecossistema" className="hover:text-[#38C6D8] transition-colors">Segurança & Firewalls NGFW</a></li>
              <li><a href="#ecossistema" className="hover:text-[#38C6D8] transition-colors">Redes Enterprise Resilientes</a></li>
              <li><a href="#ecossistema" className="hover:text-[#38C6D8] transition-colors">Storage Imutável WORM</a></li>
              <li><a href="#arquitetura" className="hover:text-[#38C6D8] transition-colors">Edge & Resiliência Offline</a></li>
              <li><a href="#arquitetura" className="hover:text-[#38C6D8] transition-colors">Playbooks de Resposta SOAR</a></li>
            </ul>
          </div>

          {/* Col 5: NOC Status */}
          <div className="space-y-4">
            <h4 className="font-mono-tag text-xs text-theme-heading font-semibold tracking-widest border-b border-theme pb-2">
              CENTRAL OPERACIONAL
            </h4>
            <div className="p-5 rounded-2xl bg-theme-card border border-theme space-y-3 shadow-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#46C48E] animate-pulse" />
                <span className="font-mono-tag text-xs text-theme-heading font-bold">NOC/SOC ONLINE 24x7</span>
              </div>
              <p className="text-xs text-theme-body leading-relaxed">
                Sistemas e redes monitorados continuamente sem interrupção.
              </p>
              <div className="pt-2 border-t border-theme font-mono text-[0.68rem] text-[#38C6D8] font-bold">
                SLA Contratual: 99.99% Uptime
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between text-xs text-theme-body gap-4">
          <p>© {new Date().getFullYear()} Lamonyx Technologies. Todos os direitos reservados.</p>
          <div className="flex gap-6 font-mono text-[0.7rem]">
            <a href="/privacidade" className="hover:text-[#38C6D8] transition-colors">Política de Privacidade</a>
            <a href="/termos" className="hover:text-[#38C6D8] transition-colors">Termos de Uso</a>
            <a href="/governanca" className="hover:text-[#38C6D8] transition-colors">Segurança & Governança</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
