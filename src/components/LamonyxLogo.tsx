"use client";

interface LamonyxLogoProps {
  className?: string;
  height?: number;
  showSubtitle?: boolean;
}

export default function LamonyxLogo({
  className = "",
  height = 36,
  showSubtitle = true,
}: LamonyxLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Target Radar Icon (Left) */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={height}
          height={height}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#38C6D8] dark:text-[#38C6D8] transition-colors"
          aria-label="Lamonyx Icon"
        >
          {/* Outer ring with gap */}
          <path
            d="M 22 4 A 18 18 0 1 1 5.2 28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Middle ring with gap */}
          <path
            d="M 22 10 A 12 12 0 1 1 11.6 28"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Inner ring */}
          <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
          {/* Center solid dot */}
          <circle cx="22" cy="22" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Horizontal Brand Typography "LAMONYX" */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-[0.14em] font-display font-bold text-xl sm:text-2xl leading-none text-theme-heading">
          <span>LAMONY</span>
          {/* Stylized X with Cyan Flare */}
          <span className="relative inline-block text-[#38C6D8]">
            X
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#38C6D8] rounded-full blur-[4px] opacity-70 pointer-events-none" />
          </span>
        </div>
        {showSubtitle && (
          <span className="font-mono-tag text-[0.55rem] sm:text-[0.6rem] text-[#38C6D8] tracking-[0.22em] mt-1 font-semibold whitespace-nowrap">
            INTELLIGENT ECOSYSTEMS
          </span>
        )}
      </div>
    </div>
  );
}
