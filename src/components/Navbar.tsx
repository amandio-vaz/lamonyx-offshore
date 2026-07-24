"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1420]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 group-hover:border-[#38C6D8] transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              className="text-[#38C6D8]"
            >
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              <circle
                cx="20"
                cy="20"
                r="10"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity="0.75"
              />
              <circle
                cx="20"
                cy="20"
                r="17"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity="0.35"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.16em] text-white text-xl leading-none">
              LAMONYX
            </span>
            <span className="font-mono-tag text-[0.62rem] text-[#38C6D8] tracking-widest mt-0.5">
              INTELLIGENT ECOSYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#solucoes"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150"
          >
            Soluções
          </a>
          <a
            href="#parceiros"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150"
          >
            Parceiros Líderes
          </a>
          <a
            href="#arquitetura"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150"
          >
            Arquitetura & IA
          </a>
          <a
            href="#simulador"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150"
          >
            Simulador MTTR
          </a>
          <a
            href="#contato"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150"
          >
            Contato
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="relative w-13 h-7 rounded-full bg-[#12202f] border border-white/15 hover:border-[#38C6D8]/50 transition-colors flex items-center px-1"
            title="Alternar Tema"
          >
            <span
              className={`w-5 h-5 rounded-full bg-[#38C6D8] shadow-md transition-transform duration-300 flex items-center justify-center ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a1420]" />
            </span>
          </button>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold text-sm hover:bg-white transition-all shadow-lg shadow-[#38C6D8]/20 hover:shadow-[#38C6D8]/40"
          >
            Falar com Arquiteto
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#38C6D8]"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1420]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#solucoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-lg text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Soluções
          </a>
          <a
            href="#parceiros"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-lg text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Parceiros Líderes
          </a>
          <a
            href="#arquitetura"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-lg text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Arquitetura & IA
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-lg text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Simulador MTTR
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-lg text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Contato
          </a>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tag text-sm text-[#90a3b4]">Tema</span>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded bg-[#12202f] border border-white/20 text-xs text-[#38C6D8]"
            >
              {isDarkMode ? "Escuro (Dark)" : "Claro (Light)"}
            </button>
          </div>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex justify-center items-center py-3 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold"
          >
            Falar com Arquiteto
          </a>
        </div>
      )}
    </header>
  );
}
