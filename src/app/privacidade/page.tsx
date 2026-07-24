import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e Proteção de Dados da Lamonyx Technologies em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-theme-page transition-colors">
      <Navbar />
      
      <main className="flex-1 pt-36 pb-24 border-b border-theme telemetry-grid">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-xs font-mono text-[#38C6D8] mb-4">
              CONFORMIDADE LGPD
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-theme-heading leading-tight">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-theme-body text-base sm:text-lg">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content Card */}
          <div className="surface-card rounded-3xl p-8 sm:p-12 space-y-10 text-theme-body leading-relaxed text-sm sm:text-base">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                1. Compromisso com a Privacidade
              </h2>
              <p>
                A <strong>Lamonyx Technologies</strong> está comprometida com a proteção dos dados pessoais e corporativos de seus clientes, parceiros e usuários, atuando em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                2. Coleta e Finalidade do Tratamento de Dados
              </h2>
              <p>
                Coletamos e tratamos apenas os dados estritamente necessários para a prestação dos nossos serviços de observabilidade, cibersegurança e operação de NOC/SOC:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-theme-heading">
                <li><strong>Dados de Contato Comercial:</strong> Nome, e-mail corporativo, empresa e telefone fornecidos voluntariamente nos formulários de atendimento.</li>
                <li><strong>Métricas de Telemetria e Eventos de Rede:</strong> Logs técnicos, status de dispositivos e métricas de desempenho coletados via agentes autorizados para monitoramento operacional.</li>
                <li><strong>Credenciais e Chaves de API:</strong> Gerenciadas através de cofres seguros com criptografia de ponta a ponta.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                3. Isolamento e Segurança dos Dados (Multi-Tenancy Strict)
              </h2>
              <p>
                Nossa arquitetura em nuvem utiliza isolamento rigoroso por linha em banco de dados (*Row-Level Security - RLS*). Garantimos que os dados de um cliente nunca sejam expostos ou acessados por terceiros.
              </p>
              <div className="p-4 rounded-xl bg-theme-alt border border-theme text-xs font-mono text-[#38C6D8]">
                ✓ Política Strict Default-Deny ativada em todos os níveis de armazenamento.
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                4. Compartilhamento de Dados
              </h2>
              <p>
                A Lamonyx não comercializa, aluga ou compartilha dados pessoais ou corporativos com terceiros para fins publicitários. O compartilhamento ocorre exclusivamente mediante obrigação legal ou judicial aplicável.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                5. Direitos do Titular (LGPD)
              </h2>
              <p>
                Nos termos do Art. 18 da LGPD, os titulares de dados têm o direito de confirmar a existência de tratamento, acessar seus dados, solicitar correção de informações incompletas ou requerer a eliminação de dados desnecessários.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-6 border-t border-theme">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                6. Encarregado de Proteção de Dados (DPO) & Contato
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre nossa Política de Privacidade, entre em contato com nosso Encarregado pelo Tratamento de Dados Pessoais:
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
