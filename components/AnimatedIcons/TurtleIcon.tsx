'use client';

export default function TurtleIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes crawl {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        @keyframes flipper {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-10deg); }
        }
        .turtle { animation: crawl 3s ease-in-out infinite; }
        .flipper-left { animation: flipper 1.5s ease-in-out infinite; transform-origin: right center; }
        .flipper-right { animation: flipper 1.5s ease-in-out infinite; animation-delay: 0.75s; transform-origin: left center; }
      `}</style>

      {/* Sand/beach line */}
      <path
        d="M 4 48 L 60 48"
        stroke="#FFF3D6"
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Turtle */}
      <g className="turtle">
        {/* Shell */}
        <ellipse cx="32" cy="36" rx="14" ry="10" fill="#1A8A8A" />

        {/* Shell pattern */}
        <ellipse cx="32" cy="36" rx="11" ry="8" fill="#D4A017" opacity="0.3" />
        <circle cx="28" cy="34" r="2" fill="#C4550A" opacity="0.4" />
        <circle cx="36" cy="34" r="2" fill="#C4550A" opacity="0.4" />
        <circle cx="32" cy="38" r="2" fill="#C4550A" opacity="0.4" />
        <circle cx="28" cy="38" r="1.5" fill="#C4550A" opacity="0.4" />
        <circle cx="36" cy="38" r="1.5" fill="#C4550A" opacity="0.4" />

        {/* Head */}
        <circle cx="44" cy="34" r="4" fill="#1A8A8A" />

        {/* Eye */}
        <circle cx="46" cy="33" r="1" fill="white" />
        <circle cx="46.5" cy="33" r="0.5" fill="#1A0A00" />

        {/* Front flippers */}
        <g className="flipper-right">
          <ellipse cx="24" cy="38" rx="5" ry="2" fill="#1A8A8A" opacity="0.8" />
        </g>
        <g className="flipper-left">
          <ellipse cx="40" cy="38" rx="5" ry="2" fill="#1A8A8A" opacity="0.8" />
        </g>

        {/* Back flippers */}
        <ellipse cx="24" cy="42" rx="4" ry="1.5" fill="#1A8A8A" opacity="0.6" />
        <ellipse cx="40" cy="42" rx="4" ry="1.5" fill="#1A8A8A" opacity="0.6" />

        {/* Tail */}
        <circle cx="20" cy="36" r="2" fill="#1A8A8A" />
      </g>

      {/* Beach footprints */}
      <g opacity="0.3">
        <circle cx="12" cy="44" r="1" fill="#1A0A00" />
        <circle cx="10" cy="46" r="1" fill="#1A0A00" />
        <circle cx="16" cy="44" r="1" fill="#1A0A00" />
        <circle cx="14" cy="46" r="1" fill="#1A0A00" />
      </g>
    </svg>
  );
}
