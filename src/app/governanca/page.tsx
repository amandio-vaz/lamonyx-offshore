import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Segurança & Governança",
  description:
    "Pilares de Segurança, Criptografia, Isolamento Multi-Tenant e Governança de TI da Lamonyx Technologies.",
};

export default function GovernancaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-theme-page transition-colors">
      <Navbar />
      
      <main className="flex-1 pt-36 pb-24 border-b border-theme telemetry-grid">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-xs font-mono text-[#38C6D8] mb-4">
              GOVERNANÇA & SEGURANÇA ENTERPRISE
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-theme-heading leading-tight">
              Segurança & Governança
            </h1>
            <p className="mt-4 text-theme-body text-base sm:text-lg">
              Conheça as camadas de proteção, criptografia e isolamento que protegem a infraestrutura da Lamonyx e de nossos clientes.
            </p>
          </div>

          {/* Grid of Governance Pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            <div className="surface-card rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] font-bold text-xl">
                🔒
              </div>
              <h3 className="font-display font-bold text-2xl text-theme-heading">Criptografia Ponta a Ponta</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Todos os dados em trânsito são protegidos com TLS 1.3 / mTLS com autenticação mútua de certificados. Dados em repouso utilizam criptografia forte AES-256 com rotação de chaves.
              </p>
            </div>

            <div className="surface-card rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#46C48E]/10 border border-[#46C48E]/30 flex items-center justify-center text-[#46C48E] font-bold text-xl">
                🛡️
              </div>
              <h3 className="font-display font-bold text-2xl text-theme-heading">Isolamento Multi-Tenant Strict</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Garantia arquitetural de isolamento entre clientes. O acesso a dados em nível de banco utiliza *Row-Level Security (RLS)* com política padrão de negação (*Default-Deny*).
              </p>
            </div>

            <div className="surface-card rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E3A94E]/10 border border-[#E3A94E]/30 flex items-center justify-center text-[#E3A94E] font-bold text-xl">
                📦
              </div>
              <h3 className="font-display font-bold text-2xl text-theme-heading">Trilha de Auditoria WORM</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Armazenamento de logs operacionais e trilhas de auditoria em cofres imutáveis WORM (*Write Once, Read Many*), impedindo a alteração ou apagamento de evidências.
              </p>
            </div>

            <div className="surface-card rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E5654B]/10 border border-[#E5654B]/30 flex items-center justify-center text-[#E5654B] font-bold text-xl">
                ⚡
              </div>
              <h3 className="font-display font-bold text-2xl text-theme-heading">Operação NOC/SOC 24x7</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Monitoramento contínuo por engenheiros especializados integrados a playbooks de mitigação autônoma SOAR para conter ameaças em questão de segundos.
              </p>
            </div>

          </div>

          {/* Detailed Content Card */}
          <div className="surface-card rounded-3xl p-8 sm:p-12 space-y-8 text-theme-body leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                Gestão de Vulnerabilidades & Testes Continuos
              </h2>
              <p>
                A Lamonyx submete periodicamente suas soluções a testes de penetração (*PenTests*) por empresas independentes e auditorias de código-fonte de acordo com as diretrizes do OWASP Top 10.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                Plano de Resposta a Incidentes (IRP)
              </h2>
              <p>
                Mantemos um Plano de Resposta a Incidentes documentado e testado. Em caso de anomalia de segurança crítica, nossos clientes são notificados imediatamente com relatórios post-mortem detalhados.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-theme">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                Reporte de Vulnerabilidades & Segurança
              </h2>
              <p>
                Se você identificou qualquer vulnerabilidade ou deseja solicitar a documentação técnica de governança, entre em contato direto com nossa equipe de segurança:
              </p>
              <div className="font-mono text-sm text-[#38C6D8]">
                E-mail: contato@lamonyx.com.br
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
