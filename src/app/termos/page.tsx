import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e Condições Gerais de Uso das Soluções e Serviços de Cibersegurança e NOC/SOC da Lamonyx Technologies.",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-theme-page transition-colors">
      <Navbar />
      
      <main className="flex-1 pt-36 pb-24 border-b border-theme telemetry-grid">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-xs font-mono text-[#38C6D8] mb-4">
              CONTRATO E TERMOS
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-theme-heading leading-tight">
              Termos de Uso
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
                1. Aceite e Objeto
              </h2>
              <p>
                Estes Termos de Uso regem a utilização da plataforma e dos serviços prestados pela <strong>Lamonyx Technologies</strong>, abrangendo monitoramento de observabilidade, automação de resposta a incidentes (SOAR), cibersegurança perimetral e operação de central NOC/SOC 24x7. Ao acessar ou contratar nossas soluções, o contratante concorda com as cláusulas aqui estipuladas.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                2. Licença e Propriedade Intelectual
              </h2>
              <p>
                A Lamonyx concede ao contratante uma licença limitada, não exclusiva e intransferível de uso da plataforma SaaS durante o período de vigência contratual. Todos os softwares, marcas, algoritmos de Inteligência Artificial e documentação são de propriedade exclusiva da Lamonyx Technologies.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                3. Nível de Serviço e Disponibilidade (SLA)
              </h2>
              <p>
                A Lamonyx garante o compromisso contratual de disponibilidade (Uptime Target de 99.99%) para a plataforma central e operação NOC/SOC, ressalvadas as janelas de manutenção preventiva previamente comunicadas com antecedência mínima de 48 horas.
              </p>
              <div className="p-4 rounded-xl bg-theme-alt border border-theme text-xs font-mono text-[#46C48E]">
                ✓ Atendimento humanizado Nível 2 e 3 garantido no SLA contratual.
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                4. Responsabilidades do Cliente
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-theme-heading">
                <li>Manter a confidencialidade das chaves de credencial e tokens de acesso aos sistemas.</li>
                <li>Garantir o canal de comunicação (link de rede) para sincronização de agentes locais, observada a resiliência do buffer temporário local.</li>
                <li>Utilizar os serviços em estrita conformidade com a legislação vigente e políticas de uso aceitável.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                A Lamonyx utiliza as melhores práticas internacionais de resiliência e cibersegurança. No entanto, não se responsabiliza por indisponibilidades causadas por falhas estruturais em provedores de telecomunicações de terceiros ou por mau uso credenciado não autorizado por parte do contratante.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-6 border-t border-theme">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-theme-heading">
                6. Foro e Legislação Aplicável
              </h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca da Capital do Estado do Rio de Janeiro / RJ para dirimir quaisquer dúvidas ou litígios decorrentes deste contrato.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
