'use client';

import { Waves, Wind, Sun } from 'lucide-react';

export default function SurfReportBanner() {
  // TODO: In the future, integrate with Surfline API or open-meteo for real wave data
  // For now, this is a static banner encouraging users to ask for conditions

  return (
    <div className="bg-teal-brand text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <Waves className="w-6 h-6" />
            <div>
              <h3 className="font-semibold text-lg">Today's Conditions</h3>
              <p className="text-sm text-white/80">
                Want to know if it's firing? Ask us for the daily surf report!
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/523221409733?text=Hey!%20What%20are%20the%20surf%20conditions%20today?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold text-sm transition-all btn-hover flex items-center space-x-2"
          >
            <span>Get Today's Report</span>
            <Waves className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
