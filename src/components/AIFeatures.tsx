"use client";

interface AIFeature {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const aiFeatures: AIFeature[] = [
  {
    icon: "🧠",
    title: "Detecção de Anomalias",
    tagline: "Baseline Comportamental em Tempo Real",
    description: "Nossos algoritmos aprendem o padrão normal do seu ambiente e identificam desvios de tráfego, chamadas de API suspeitas ou variações de carga antes que virem incidentes.",
    metric: "99.8%",
    metricLabel: "Precisão na detecção de desvios",
  },
  {
    icon: "🔮",
    title: "Análise Preditiva de Falhas",
    tagline: "Antecipação de Gargalos & Esgotamento",
    description: "Modelos preditivos analisam tendências de consumo de disco, memória, largura de banda e temperatura, alertando sobre falhas físicas dias antes de sua ocorrência.",
    metric: "72h",
    metricLabel: "Antecipação média de falhas físicas",
  },
  {
    icon: "⚡",
    title: "Correlação Inteligente de Eventos",
    tagline: "Fim da Fadiga de Alertas (Alert Fatigue)",
    description: "Processamento de milhares de eventos por segundo para agrupar sintomas em um único causa-raiz. Sua equipe recebe apenas alertas que realmente exigem ação.",
    metric: "-85%",
    metricLabel: "Redução no volume de ruído/falsos alarmes",
  },
  {
    icon: "🤖",
    title: "Automação Operacional & SOAR",
    tagline: "Playbooks de Resposta Autônoma",
    description: "Ações imediatas predefinidas: bloqueio instantâneo de IPs maliciosos no FortiGate, isolamento de porta no switch Cisco ou rollback de imagem de servidor via Veeam.",
    metric: "< 10s",
    metricLabel: "Tempo de execução de playbooks SOAR",
  },
];

export default function AIFeatures() {
  return (
    <section className="py-28 bg-[#0d1a26] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">INTELIGÊNCIA ARTIFICIAL APLICADA</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-3">
            Segurança, Automação e Análise Inteligente.
          </h2>
          <p className="mt-4 text-[#90a3b4] text-base sm:text-lg">
            Utilizamos Inteligência Artificial para transformar volumes massivos de dados brutos em decisões operacionais precisas e automáticas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="surface-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#38C6D8]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl p-3 rounded-2xl bg-[#38C6D8]/10 border border-[#38C6D8]/20">
                    {feature.icon}
                  </span>
                  <div className="text-right">
                    <div className="font-display font-bold text-2xl text-[#38C6D8]">
                      {feature.metric}
                    </div>
                    <div className="font-mono-tag text-[0.65rem] text-[#90a3b4]">
                      {feature.metricLabel}
                    </div>
                  </div>
                </div>

                <span className="font-mono-tag text-xs text-[#38C6D8]">{feature.tagline}</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#90a3b4] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
