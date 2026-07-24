"use client";

import { useState } from "react";

interface TechCapability {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  tag: string;
}

const capabilities: TechCapability[] = [
  {
    id: "perimetral",
    name: "Segurança Perimetral",
    category: "Firewalls de Próxima Geração & ZTNA",
    tag: "DEFESA DE BORDA",
    description: "Inspeção profunda de pacotes, SD-WAN seguro e arquiteturas Zero-Trust (ZTNA) para proteção contínua de bordas, filiais e ambientes críticos.",
    highlights: ["Firewalls de Próxima Geração (NGFW)", "Inspeção SSL/TLS de alta vazão sem perda de performance", "SD-WAN integrada & Acesso Zero-Trust (ZTNA)"],
  },
  {
    id: "enterprise-networks",
    name: "Redes Enterprise",
    category: "Conectividade Crítica & Alta Disponibilidade",
    tag: "INFRAESTRUTURA",
    description: "Infraestrutura de rede de alta capacidade, comutação resiliente e defesa de endpoints alimentada por inteligência de ameaças global.",
    highlights: ["Switches & Roteadores de Alta Criticidade", "Proteção de Endpoints & DNS Seguro", "Arquitetura Zero-Trust para Redes Corporativas"],
  },
  {
    id: "immutable-backup",
    name: "Backup Imutável",
    category: "Continuidade & Disaster Recovery Anti-Ransomware",
    tag: "RESILIÊNCIA",
    description: "Armazenamento protegido e replicação instantânea de dados com garantia de RPO/RTO mínimos e blindagem total contra sequestro de dados.",
    highlights: ["Storage Imutável com Tecnologia WORM", "Instant VM Recovery & Orquestração de Failover", "Proteção Multi-Cloud & Backup Criptografado"],
  },
  {
    id: "cloud-containers",
    name: "Cloud & Containers",
    category: "Kubernetes, Docker & Cloud Native",
    tag: "ESCALABILIDADE",
    description: "Desenvolvimento e orquestração de microsserviços em nuvem pública ou híbrida com isolamento, auto-scaling e alta disponibilidade.",
    highlights: ["Kubernetes & Docker Engine Orquestrado", "Auto-scaling & Failover automático de clusters", "Infraestrutura como Código (IaC) & CI/CD"],
  },
  {
    id: "ai-engine",
    name: "Motor de IA Operacional",
    category: "Inteligência Artificial & Automação SOAR",
    tag: "AUTOMAÇÃO",
    description: "Motor proprietário de IA para correlação de eventos, triagem automática e redução drástica de alarmes falsos em operações 24x7.",
    highlights: ["Detecção de Anomalias Comportamentais", "Redução de MTTR de horas para minutos", "Playbooks de Resposta Automática (SOAR)"],
  },
];

export default function TechPartners() {
  const [activeCap, setActiveCap] = useState<TechCapability>(capabilities[0]);

  return (
    <section id="ecossistema" className="py-24 bg-theme-alt border-b border-theme relative transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">ARQUITETURA & CAPACIDADES TECNOLÓGICAS</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-theme-heading mt-3">
            Ecossistema robusto de classe mundial.
          </h2>
          <p className="mt-4 text-theme-body text-base sm:text-lg">
            Combinamos padrões globais de TI e Segurança com nossa inteligência em automação, infraestrutura em nuvem e containers.
          </p>
        </div>

        {/* Capability Select Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveCap(cap)}
              className={`px-5 py-3 rounded-full text-sm font-display font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                activeCap.id === cap.id
                  ? "bg-[#38C6D8] text-[#0a1420] border-[#38C6D8] shadow-lg shadow-[#38C6D8]/20 scale-105"
                  : "bg-theme-card text-theme-heading border-theme hover:border-[#38C6D8]/40"
              }`}
            >
              {cap.name}
            </button>
          ))}
        </div>

        {/* Active Capability Detail Card */}
        <div className="surface-card surface-glow rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-7">
            <span className="font-mono-tag text-[#38C6D8] text-xs font-semibold">{activeCap.category}</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-theme-heading mt-2 mb-4">
              {activeCap.name} + Lamonyx
            </h3>
            <p className="text-theme-body text-base leading-relaxed mb-6">
              {activeCap.description}
            </p>
            
            <div className="space-y-3">
              {activeCap.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38C6D8]/20 border border-[#38C6D8] flex items-center justify-center text-[#38C6D8] text-xs font-bold shrink-0">
                    ✓
                  </div>
                  <span className="text-theme-heading text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-theme-alt rounded-2xl p-6 border border-theme flex flex-col justify-center items-center text-center">
            <div className="px-3.5 py-1.5 rounded-full bg-[#38C6D8]/10 border border-[#38C6D8]/30 text-[#38C6D8] text-xs font-mono font-bold tracking-widest mb-4">
              {activeCap.tag}
            </div>
            <h4 className="font-display font-bold text-lg text-theme-heading mb-1">{activeCap.name}</h4>
            <p className="text-xs text-theme-body mb-4">Arquitetura integrada e monitorada continuamente pelo NOC/SOC Lamonyx.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-xs font-mono-tag text-[#38C6D8] font-bold hover:underline"
            >
              SOLICITAR PROJETO CUSTOMIZADO &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
