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

    // Initial theme setup from document or default to dark
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setIsDarkMode(currentTheme === "dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("lamonyx-theme", nextTheme);
    } catch {
      // Ignore local storage errors if restricted
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1420]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo with Glow Accent */}
        <a href="#top" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#38C6D8]/10 border border-[#38C6D8]/30 group-hover:border-[#38C6D8] group-hover:shadow-[0_0_18px_rgba(56,198,216,0.35)] transition-all">
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              className="text-[#38C6D8]"
            >
              <circle cx="20" cy="20" r="3.5" fill="currentColor" />
              <circle
                cx="20"
                cy="20"
                r="10"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity="0.8"
              />
              <circle
                cx="20"
                cy="20"
                r="17"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity="0.35"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.16em] text-white text-lg sm:text-xl leading-none">
              LAMONYX
            </span>
            <span className="font-mono-tag text-[0.58rem] text-[#38C6D8] tracking-[0.18em] mt-1 font-semibold whitespace-nowrap">
              INTELLIGENT ECOSYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Visible on XL screens to prevent truncation) */}
        <div className="hidden xl:flex items-center gap-7">
          <a
            href="#solucoes"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150 tracking-wider text-xs whitespace-nowrap"
          >
            Soluções
          </a>
          <a
            href="#ecossistema"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150 tracking-wider text-xs whitespace-nowrap"
          >
            Tecnologias
          </a>
          <a
            href="#arquitetura"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150 tracking-wider text-xs whitespace-nowrap"
          >
            Arquitetura & IA
          </a>
          <a
            href="#contato"
            className="font-mono-tag text-[#90a3b4] hover:text-[#38C6D8] transition-colors duration-150 tracking-wider text-xs whitespace-nowrap"
          >
            Contato
          </a>
        </div>

        {/* Right Actions: NOC Status + Theme Switcher + CTA Button */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          {/* NOC Active Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#46C48E]/10 border border-[#46C48E]/30 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#46C48E] animate-pulse" />
            <span className="font-mono-tag text-[0.62rem] text-[#46C48E] font-bold">NOC 24/7 ONLINE</span>
          </div>

          {/* Interactive Dark/Light Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="relative w-13 h-7 rounded-full bg-[#12202f] border border-white/20 hover:border-[#38C6D8]/60 transition-all flex items-center px-1 group cursor-pointer shrink-0"
            title={isDarkMode ? "Alternar para Modo Claro" : "Alternar para Modo Escuro"}
          >
            {/* Sun Icon */}
            <svg
              className={`w-3.5 h-3.5 text-[#E3A94E] absolute left-1.5 transition-opacity ${
                isDarkMode ? "opacity-40" : "opacity-100"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            {/* Moon Icon */}
            <svg
              className={`w-3.5 h-3.5 text-[#38C6D8] absolute right-1.5 transition-opacity ${
                isDarkMode ? "opacity-100" : "opacity-40"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            {/* Moving Toggle Thumb */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-lg shadow-[#38C6D8]/20 hover:shadow-[#38C6D8]/40 whitespace-nowrap"
          >
            Falar com Comercial
          </a>
        </div>

        {/* Mobile / Tablet Menu Toggle Button (Visible below XL screens) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 text-white hover:text-[#38C6D8] rounded-lg hover:bg-white/5 transition-colors"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a1420]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <a
            href="#solucoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-base text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Soluções
          </a>
          <a
            href="#ecossistema"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-base text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Tecnologias
          </a>
          <a
            href="#arquitetura"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-base text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Arquitetura & IA
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono-tag text-base text-[#90a3b4] hover:text-[#38C6D8]"
          >
            Contato
          </a>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tag text-xs text-[#90a3b4]">Tema de Cores</span>
            <button
              onClick={toggleTheme}
              className="px-4 py-1.5 rounded-full bg-[#12202f] border border-white/20 text-xs text-[#38C6D8] font-mono font-bold"
            >
              {isDarkMode ? "Modo Escuro (Dark)" : "Modo Claro (Light)"}
            </button>
          </div>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex justify-center items-center py-3.5 rounded-full bg-[#38C6D8] text-[#0a1420] font-display font-semibold text-sm shadow-lg shadow-[#38C6D8]/20"
          >
            Falar com Comercial
          </a>
        </div>
      )}
    </header>
  );
}
