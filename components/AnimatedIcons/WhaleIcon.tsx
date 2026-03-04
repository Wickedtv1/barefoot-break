'use client';

export default function WhaleIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes breach {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-10deg); }
        }
        @keyframes splash {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        .whale { animation: breach 3s ease-in-out infinite; transform-origin: center; }
        .splash { animation: splash 3s ease-in-out infinite; }
      `}</style>

      {/* Ocean waves */}
      <path
        d="M4 38 Q 16 34, 28 38 T 52 38 T 76 38"
        stroke="#1A8A8A"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      {/* Water splash */}
      <g className="splash">
        <circle cx="32" cy="40" r="3" fill="#1A8A8A" opacity="0.3" />
        <circle cx="28" cy="42" r="2" fill="#1A8A8A" opacity="0.3" />
        <circle cx="36" cy="42" r="2" fill="#1A8A8A" opacity="0.3" />
      </g>

      {/* Whale body */}
      <g className="whale">
        {/* Main body */}
        <ellipse cx="32" cy="28" rx="16" ry="10" fill="#1A0A00" />

        {/* Tail */}
        <path
          d="M 16 28 L 8 20 L 12 28 Z"
          fill="#1A0A00"
        />
        <path
          d="M 16 28 L 8 36 L 12 28 Z"
          fill="#1A0A00"
        />

        {/* Flipper */}
        <ellipse cx="28" cy="34" rx="6" ry="3" fill="#1A0A00" opacity="0.8" />

        {/* Eye */}
        <circle cx="40" cy="26" r="2" fill="white" />
        <circle cx="41" cy="26" r="1" fill="#1A0A00" />

        {/* Mouth curve */}
        <path
          d="M 44 30 Q 40 32, 36 30"
          stroke="#FFF3D6"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Water spout */}
      <g className="splash" style={{animationDelay: '0.5s'}}>
        <path
          d="M 42 18 Q 44 12, 46 18"
          stroke="#1A8A8A"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 38 18 Q 40 12, 42 18"
          stroke="#1A8A8A"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
