'use client';

export default function SurferIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes ride {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(4px) rotate(2deg); }
        }
        @keyframes wave-roll {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-8px); }
        }
        .surfer { animation: ride 2s ease-in-out infinite; transform-origin: bottom center; }
        .wave { animation: wave-roll 2s ease-in-out infinite; }
      `}</style>

      {/* Wave */}
      <g className="wave">
        <path
          d="M 4 40 Q 12 36, 20 40 T 36 40 T 52 40 T 68 40"
          stroke="#1A8A8A"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 4 44 Q 12 40, 20 44 T 36 44 T 52 44"
          stroke="#1A8A8A"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </g>

      {/* Surfer */}
      <g className="surfer">
        {/* Surfboard */}
        <ellipse cx="32" cy="38" rx="12" ry="2" fill="#D4A017" />
        <ellipse cx="32" cy="38" rx="10" ry="1.5" fill="#C4550A" />

        {/* Legs */}
        <line x1="28" y1="38" x2="26" y2="32" stroke="#1A0A00" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="38" x2="38" y2="32" stroke="#1A0A00" strokeWidth="2" strokeLinecap="round" />

        {/* Body */}
        <line x1="32" y1="32" x2="32" y2="22" stroke="#1A8A8A" strokeWidth="3" strokeLinecap="round" />

        {/* Arms */}
        <line x1="32" y1="26" x2="26" y2="24" stroke="#1A8A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="26" x2="38" y2="24" stroke="#1A8A8A" strokeWidth="2" strokeLinecap="round" />

        {/* Head */}
        <circle cx="32" cy="20" r="3" fill="#FFF3D6" />

        {/* Hair */}
        <path d="M 30 18 Q 32 16, 34 18" stroke="#1A0A00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Spray */}
      <g className="wave" style={{animationDelay: '0.5s'}}>
        <circle cx="44" cy="38" r="1.5" fill="#1A8A8A" opacity="0.3" />
        <circle cx="46" cy="36" r="1" fill="#1A8A8A" opacity="0.3" />
        <circle cx="48" cy="38" r="1" fill="#1A8A8A" opacity="0.3" />
      </g>
    </svg>
  );
}
