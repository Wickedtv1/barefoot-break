'use client';

export default function WavesDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: '#1A8A8A', stopOpacity: 0.6}} />
            <stop offset="100%" style={{stopColor: '#1A8A8A', stopOpacity: 0.3}} />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes wave1 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-25px); }
          }
          @keyframes wave2 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25px); }
          }
          @keyframes wave3 {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-15px); }
          }
          .wave1 { animation: wave1 7s ease-in-out infinite; }
          .wave2 { animation: wave2 5s ease-in-out infinite; }
          .wave3 { animation: wave3 9s ease-in-out infinite; }
        `}</style>

        {/* Wave 1 - Back */}
        <path
          className="wave1"
          d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
        />

        {/* Wave 2 - Middle */}
        <path
          className="wave2"
          d="M0,60 Q150,50 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
          fill="#1A8A8A"
          opacity="0.4"
        />

        {/* Wave 3 - Front */}
        <path
          className="wave3"
          d="M0,80 Q150,70 300,80 T600,80 T900,80 T1200,80 L1200,120 L0,120 Z"
          fill="#1A8A8A"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
