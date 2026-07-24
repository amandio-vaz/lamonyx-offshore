"use client";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Cibersegurança Integrada",
    subtitle: "Segurança Perimetral & Zero Trust",
    badge: "Defesa Perimetral Avançada",
    badgeColor: "border-[#38C6D8]/30 bg-[#38C6D8]/10 text-[#38C6D8]",
    description: "Proteção em camadas unindo Firewalls de Próxima Geração (NGFW), VPNs seguras, controle de acessos ZTNA e inspeção profunda de pacotes.",
    features: [
      "Firewalls de Próxima Geração (NGFW) de alta vazão",
      "Gestão unificada de identidades & Zero-Trust Access (ZTNA)",
      "Segmentação de rede e proteção contra ataques DDoS",
      "Defesa avançada de Endpoints e mitigação de ameaças",
    ],
  },
  {
    number: "02",
    title: "Observabilidade & IA Preditiva",
    subtitle: "Inteligência Operacional",
    badge: "Detecção em Tempo Real",
    badgeColor: "border-[#46C48E]/30 bg-[#46C48E]/10 text-[#46C48E]",
    description: "Monitore toda a sua infraestrutura física, virtual e em nuvem em um único painel. Nosso motor de IA correlaciona eventos e elimina ruídos de alarmes falsos.",
    features: [
      "IA para detecção de anomalias comportamentais",
      "Correlação inteligente de eventos (Zero Noise Alerting)",
      "Redução drástica do tempo médio de resposta (MTTR)",
      "Dashboards executivos e relatórios de conformidade",
    ],
  },
  {
    number: "03",
    title: "Continuidade & Resiliência",
    subtitle: "Backup Imutável & Disaster Recovery",
    badge: "Proteção Anti-Ransomware",
    badgeColor: "border-[#E3A94E]/30 bg-[#E3A94E]/10 text-[#E3A94E]",
    description: "Garanta a sobrevivência do seu negócio mesmo diante de falhas de hardware, desastres naturais ou ataques violentos de ransomware.",
    features: [
      "Armazenamento WORM (Write Once, Read Many) imutável",
      "Instant VM Recovery (recuperação de servidores em minutos)",
      "Testes automáticos diários de integridade de backup",
      "Orquestração de Disaster Recovery multi-site",
    ],
  },
  {
    number: "04",
    title: "Cloud & Containers",
    subtitle: "Kubernetes & Microsserviços",
    badge: "Infraestrutura Elástica & HA",
    badgeColor: "border-[#E5654B]/30 bg-[#E5654B]/10 text-[#E5654B]",
    description: "Construa e dimensione aplicações modernas em nuvens públicas, privadas ou híbridas com suporte total a microsserviços e alta disponibilidade.",
    features: [
      "Orquestração avançada com Kubernetes e Docker Engine",
      "Failover automático e balanceamento de carga inteligente",
      "Automação CI/CD e Infraestrutura como Código (IaC)",
      "Arquitetura escalável de ultra-baixa latência",
    ],
  },
];

export default function PillarsSection() {
  return (
    <section id="solucoes" className="py-28 relative wash-section border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono-tag text-[#38C6D8] font-semibold">ARQUITETURA DE SOLUÇÕES COMPLETA</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-3 leading-tight max-w-2xl">
              Quatro pilares para uma infraestrutura inabalável.
            </h2>
          </div>
          <p className="text-[#90a3b4] text-base max-w-md">
            Do perímetro da rede ao backup imutável na nuvem, cobrimos todo o ciclo de vida da segurança e disponibilidade do seu ambiente.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#38C6D8]/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-bold text-white/30 group-hover:text-[#38C6D8] transition-colors">
                    {pillar.number}
                  </span>
                  <span className={`font-mono-tag px-3 py-1 rounded-full text-xs font-semibold border ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>

                <span className="font-mono-tag text-xs text-[#90a3b4]">{pillar.subtitle}</span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#90a3b4] text-base leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                {pillar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#38C6D8] font-bold text-sm mt-0.5">›</span>
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
