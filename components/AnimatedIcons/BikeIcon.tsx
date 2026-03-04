'use client';

export default function BikeIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes pedal {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
        }
        @keyframes wheel-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .pedals { animation: pedal 2s linear infinite; transform-origin: center; }
        .wheel { animation: wheel-spin 1s linear infinite; transform-origin: center; }
        .rider { animation: bounce 2s ease-in-out infinite; }
      `}</style>

      {/* Trail path */}
      <path
        d="M 4 46 Q 16 44, 28 46 T 52 46"
        stroke="#C4550A"
        strokeWidth="2"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* Back wheel */}
      <g className="wheel" style={{transformOrigin: '16px 42px'}}>
        <circle cx="16" cy="42" r="8" stroke="#1A0A00" strokeWidth="2" fill="none" />
        <line x1="16" y1="34" x2="16" y2="50" stroke="#1A0A00" strokeWidth="1" />
        <line x1="8" y1="42" x2="24" y2="42" stroke="#1A0A00" strokeWidth="1" />
        <line x1="11" y1="36" x2="21" y2="48" stroke="#1A0A00" strokeWidth="1" opacity="0.5" />
        <line x1="21" y1="36" x2="11" y2="48" stroke="#1A0A00" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Front wheel */}
      <g className="wheel" style={{transformOrigin: '48px 42px'}}>
        <circle cx="48" cy="42" r="8" stroke="#1A0A00" strokeWidth="2" fill="none" />
        <line x1="48" y1="34" x2="48" y2="50" stroke="#1A0A00" strokeWidth="1" />
        <line x1="40" y1="42" x2="56" y2="42" stroke="#1A0A00" strokeWidth="1" />
        <line x1="43" y1="36" x2="53" y2="48" stroke="#1A0A00" strokeWidth="1" opacity="0.5" />
        <line x1="53" y1="36" x2="43" y2="48" stroke="#1A0A00" strokeWidth="1" opacity="0.5" />
      </g>

      {/* Bike frame */}
      <g className="rider">
        <line x1="16" y1="42" x2="32" y2="28" stroke="#C4550A" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="28" x2="48" y2="42" stroke="#C4550A" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="28" x2="32" y2="20" stroke="#C4550A" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="20" x2="38" y2="20" stroke="#C4550A" strokeWidth="2" strokeLinecap="round" />

        {/* Pedals */}
        <g className="pedals" style={{transformOrigin: '32px 36px'}}>
          <circle cx="32" cy="36" r="3" fill="#1A0A00" />
          <line x1="32" y1="33" x2="32" y2="39" stroke="#1A0A00" strokeWidth="2" />
          <rect x="30" y="32" width="4" height="2" fill="#D4A017" />
          <rect x="30" y="38" width="4" height="2" fill="#D4A017" />
        </g>

        {/* Rider - Legs */}
        <line x1="28" y1="26" x2="32" y2="36" stroke="#1A8A8A" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="26" x2="32" y2="36" stroke="#1A8A8A" strokeWidth="2" strokeLinecap="round" />

        {/* Rider - Body */}
        <line x1="29" y1="26" x2="34" y2="18" stroke="#1A8A8A" strokeWidth="3" strokeLinecap="round" />

        {/* Rider - Arms */}
        <line x1="32" y1="20" x2="38" y2="20" stroke="#1A8A8A" strokeWidth="2" strokeLinecap="round" />

        {/* Rider - Head with helmet */}
        <circle cx="34" cy="15" r="3" fill="#FFF3D6" />
        <ellipse cx="34" cy="14" rx="4" ry="3" fill="#C4550A" opacity="0.8" />
      </g>

      {/* Dirt spray */}
      <g opacity="0.3">
        <circle cx="12" cy="46" r="1" fill="#1A0A00" />
        <circle cx="10" cy="48" r="1.5" fill="#1A0A00" />
        <circle cx="8" cy="46" r="1" fill="#1A0A00" />
      </g>
    </svg>
  );
}
