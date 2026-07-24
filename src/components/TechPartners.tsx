"use client";

import { useState } from "react";

interface PartnerInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

const partners: PartnerInfo[] = [
  {
    id: "fortinet",
    name: "Fortinet",
    category: "Cibersegurança & Firewall Perimetral",
    description: "Integração nativa de FortiGate, SD-WAN seguro e arquiteturas Zero-Trust (ZTNA) para proteção contínua de bordas e filiais.",
    highlights: ["Next-Gen Firewall (NGFW)", "Inspeção SSL/TLS de alta performance", "SD-WAN integrada & ZTNA"],
  },
  {
    id: "cisco",
    name: "Cisco",
    category: "Redes Críticas & Defesa Avançada",
    description: "Infraestrutura de alta capacidade, conectividade resilitente e segurança de endpoint/identidade alimentada por inteligência de ameaças Cisco Talos.",
    highlights: ["Switches & Roteadores de Alta Criticidade", "Cisco Umbrella & Secure Endpoint", "Arquitetura Zero-Trust"],
  },
  {
    id: "veeam",
    name: "Veeam",
    category: "Continuidade & Recovery Anti-Ransomware",
    description: "Backup imutável e replicação instantânea de dados com garantia de RPO/RTO mínimos e proteção contra sequestro de dados.",
    highlights: ["Storage Imutável WORM", "Instant VM Recovery & Orchestration", "Proteção Multi-Cloud"],
  },
  {
    id: "cloud-containers",
    name: "Cloud & Containers",
    category: "Kubernetes, Docker & Cloud Native",
    description: "Desenvolvimento e orquestração de microsserviços em nuvem pública ou híbrida com isolamento, auto-scaling e alta disponibilidade.",
    highlights: ["Kubernetes & Docker Engine", "Auto-scaling & Failover automático", "Infraestrutura como Código (IaC)"],
  },
  {
    id: "ai-engine",
    name: "AI Engine",
    category: "Inteligência Artificial Operacional",
    description: "Motor proprietário de IA para correlação de eventos, triagem automática e redução drástica de alarmes falsos em operações 24x7.",
    highlights: ["Detecção de Anomalias Comportamentais", "Redução de MTTR de horas para minutos", "Playbooks de Resposta Automática"],
  },
];

export default function TechPartners() {
  const [activePartner, setActivePartner] = useState<PartnerInfo>(partners[0]);

  return (
    <section id="parceiros" className="py-24 bg-[#0d1a26] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-tag text-[#38C6D8] font-semibold">STACK TECNOLÓGICO DE CLASSE MUNDIAL</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3">
            Aliança estratégica com líderes globais da indústria.
          </h2>
          <p className="mt-4 text-[#90a3b4] text-base sm:text-lg">
            Combinamos a robustez das maiores plataformas de TI e Segurança do mundo com nossa inteligência em automação e containers.
          </p>
        </div>

        {/* Partner Select Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {partners.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setActivePartner(partner)}
              className={`px-5 py-3 rounded-full text-sm font-display font-semibold transition-all flex items-center gap-2 border ${
                activePartner.id === partner.id
                  ? "bg-[#38C6D8] text-[#0a1420] border-[#38C6D8] shadow-lg shadow-[#38C6D8]/20 scale-105"
                  : "bg-[#12202f] text-white border-white/10 hover:border-[#38C6D8]/40 hover:bg-[#1a2d42]"
              }`}
            >
              {partner.name}
            </button>
          ))}
        </div>

        {/* Active Partner Detail Card */}
        <div className="surface-card surface-glow rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-7">
            <span className="font-mono-tag text-[#38C6D8] text-xs font-semibold">{activePartner.category}</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-2 mb-4">
              {activePartner.name} + Lamonyx
            </h3>
            <p className="text-[#90a3b4] text-base leading-relaxed mb-6">
              {activePartner.description}
            </p>
            
            <div className="space-y-3">
              {activePartner.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38C6D8]/20 border border-[#38C6D8] flex items-center justify-center text-[#38C6D8] text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0a1420]/80 rounded-2xl p-6 border border-white/10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 flex items-center justify-center text-[#38C6D8] text-2xl font-bold font-mono mb-4">
              {activePartner.name.substring(0, 2).toUpperCase()}
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-1">{activePartner.name} Integrated</h4>
            <p className="text-xs text-[#90a3b4] mb-4">Arquitetura validada e monitorada em tempo real pelo time Lamonyx.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-xs font-mono-tag text-[#38C6D8] hover:underline"
            >
              SOLICITAR ESPECIFICAÇÃO DE PROJETO &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
