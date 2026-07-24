"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a1420] border-t border-white/10 text-[#90a3b4] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1 & 2: Brand Info & Compliance */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] font-bold">
                L
              </div>
              <span className="font-display font-bold text-white tracking-widest text-lg">LAMONYX</span>
            </div>
            
            <p className="text-sm leading-relaxed max-w-sm">
              Mais do que implementar tecnologia, a Lamonyx constrói ecossistemas inteligentes capazes de monitorar, proteger, automatizar e antecipar riscos.
            </p>


          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-3">
            <h4 className="font-mono-tag text-xs text-white font-semibold">SOLUÇÕES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Cibersegurança Fortinet/Cisco</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Observabilidade & IA</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Backup & Disaster Recovery</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">Containers & Kubernetes</a></li>
              <li><a href="#solucoes" className="hover:text-[#38C6D8] transition-colors">NOC / SOC 24x7</a></li>
            </ul>
          </div>

          {/* Col 4: Empresa & Arquitetura */}
          <div className="space-y-3">
            <h4 className="font-mono-tag text-xs text-white font-semibold">ARQUITETURA & TECNOLOGIA</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#parceiros" className="hover:text-[#38C6D8] transition-colors">Fortinet Integration</a></li>
              <li><a href="#parceiros" className="hover:text-[#38C6D8] transition-colors">Cisco Security</a></li>
              <li><a href="#parceiros" className="hover:text-[#38C6D8] transition-colors">Veeam Anti-Ransomware</a></li>
              <li><a href="#arquitetura" className="hover:text-[#38C6D8] transition-colors">Edge & Resiliência</a></li>
              <li><a href="#simulador" className="hover:text-[#38C6D8] transition-colors">Calculadora de MTTR</a></li>
            </ul>
          </div>

          {/* Col 5: NOC Status */}
          <div className="space-y-3">
            <h4 className="font-mono-tag text-xs text-white font-semibold">OPERAÇÃO CONTINUA</h4>
            <div className="p-4 rounded-xl bg-[#12202f] border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#46C48E] animate-pulse" />
                <span className="font-mono-tag text-xs text-white font-bold">NOC/SOC ONLINE</span>
              </div>
              <p className="text-xs text-[#90a3b4]">Sistemas operacionais e monitorados sem interrupção.</p>
              <div className="font-mono text-[0.65rem] text-[#38C6D8]">SLA Global: 99.99% Uptime</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#90a3b4] gap-4">
          <p>© {new Date().getFullYear()} Lamonyx Technologies. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[#38C6D8]">Privacidade</a>
            <a href="#top" className="hover:text-[#38C6D8]">Termos de Uso</a>
            <a href="#top" className="hover:text-[#38C6D8]">Segurança & Conformidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
