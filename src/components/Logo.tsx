import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'white';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  // Dimensions
  const dimensions = {
    sm: { icon: 32, text: 'text-lg', sub: 'text-[10px]' },
    md: { icon: 42, text: 'text-xl', sub: 'text-xs' },
    lg: { icon: 52, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 68, text: 'text-3xl', sub: 'text-sm' },
  }[size];

  const textColor = {
    dark: 'text-[#0B1F5B]',
    light: 'text-white',
    white: 'text-white',
  }[variant];

  const subColor = {
    dark: 'text-slate-500',
    light: 'text-sky-200',
    white: 'text-white/80',
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Insigne / Emblème officiel Terminale D */}
      <div
        className="relative flex items-center justify-center shrink-0 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
        style={{
          width: dimensions.icon,
          height: dimensions.icon,
          background: 'linear-gradient(135deg, #0B1F5B 0%, #1E3A8A 60%, #2563EB 100%)',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[78%] h-[78%] drop-shadow"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Forme de fond - Écusson moderne */}
          <path
            d="M50 8L86 24V54C86 73 70 89 50 94C30 89 14 73 14 54V24L50 8Z"
            fill="url(#shieldGrad)"
            opacity="0.25"
          />
          {/* Chapeau de diplômé stylisé (Baccalauréat) */}
          <path
            d="M50 20L80 34L50 48L20 34L50 20Z"
            fill="#38BDF8"
          />
          {/* Calotte */}
          <path
            d="M32 40V56C32 63 40 68 50 68C60 68 68 63 68 56V40L50 49L32 40Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          {/* Pompon / Gland */}
          <path
            d="M78 35V52C78 54 76 56 74 56C72 56 70 54 70 52V38.5"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Lettre D scientifique stylisée avec anneau atomique */}
          <circle cx="50" cy="54" r="5" fill="#2563EB" />
          <ellipse
            cx="50"
            cy="54"
            rx="16"
            ry="6"
            stroke="#38BDF8"
            strokeWidth="2.5"
            transform="rotate(-25 50 54)"
          />

          <defs>
            <linearGradient id="shieldGrad" x1="14" y1="8" x2="86" y2="94" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>

        {/* Halo lumineux */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
      </div>

      {/* Libellé Typographique */}
      <div className="flex flex-col text-left leading-tight">
        <div className={`font-extrabold tracking-tight flex items-center gap-1.5 ${dimensions.text} ${textColor}`}>
          <span>Terminale</span>
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-[#38BDF8] to-[#2563EB] text-white px-2 py-0.5 rounded-lg text-[0.8em] font-black shadow-sm">
            D
          </span>
        </div>
        {showTagline && (
          <span className={`font-medium tracking-wide ${dimensions.sub} ${subColor}`}>
            Ensemble vers l'avenir
          </span>
        )}
      </div>
    </div>
  );
};
