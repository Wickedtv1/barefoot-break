'use client';

export default function FishIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes jump {
          0%, 100% { transform: translateY(8px) rotate(-15deg); }
          50% { transform: translateY(-12px) rotate(15deg); }
        }
        @keyframes swim {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); }
        }
        .fish { animation: jump 2.5s ease-in-out infinite; transform-origin: center; }
        .tail { animation: swim 0.5s ease-in-out infinite; transform-origin: left center; }
      `}</style>

      {/* Water line */}
      <path
        d="M 4 44 Q 16 42, 28 44 T 52 44 T 76 44"
        stroke="#1A8A8A"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Fish */}
      <g className="fish">
        {/* Body */}
        <ellipse cx="34" cy="28" rx="12" ry="8" fill="#D4A017" />
        <ellipse cx="34" cy="28" rx="10" ry="6" fill="#C4550A" opacity="0.7" />

        {/* Scales pattern */}
        <circle cx="36" cy="26" r="1.5" fill="#D4A017" opacity="0.5" />
        <circle cx="32" cy="28" r="1.5" fill="#D4A017" opacity="0.5" />
        <circle cx="36" cy="30" r="1.5" fill="#D4A017" opacity="0.5" />

        {/* Tail */}
        <g className="tail">
          <path
            d="M 22 28 L 14 24 L 18 28 L 14 32 Z"
            fill="#D4A017"
          />
        </g>

        {/* Dorsal fin */}
        <path
          d="M 34 20 L 36 14 L 38 20 Z"
          fill="#C4550A"
        />

        {/* Side fin */}
        <path
          d="M 32 34 L 28 38 L 32 36 Z"
          fill="#C4550A"
        />

        {/* Eye */}
        <circle cx="42" cy="26" r="2" fill="white" />
        <circle cx="43" cy="26" r="1" fill="#1A0A00" />

        {/* Mouth */}
        <circle cx="46" cy="28" r="1" fill="#1A0A00" opacity="0.3" />
      </g>

      {/* Water splash */}
      <g style={{animation: 'jump 2.5s ease-in-out infinite', animationDelay: '0.3s', transformOrigin: 'center'}}>
        <circle cx="40" cy="40" r="2" fill="#1A8A8A" opacity="0.2" />
        <circle cx="36" cy="42" r="1.5" fill="#1A8A8A" opacity="0.2" />
        <circle cx="44" cy="42" r="1.5" fill="#1A8A8A" opacity="0.2" />
      </g>
    </svg>
  );
}
