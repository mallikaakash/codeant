import React from 'react';
import { ArrowUp } from 'lucide-react';

const MetricsCards = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50">
      {/* Container for both cards */}
      <div className="relative w-[417px] top-1/3">
        {/* Main larger card */}
        <div className="bg-white rounded-xl shadow-custom-xl border p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
            <h2 className="text-gray-800 font-medium">AI to Detect & Autofix Bad Code</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {['30+', '10K+', '100K+'].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-xl mb-1">{stat}</div>
                <div className="text-xs font-bold text-gray-600">
                  {index === 0 && 'Language Support'}
                  {index === 1 && 'Developers'}
                  {index === 2 && 'Hours Saved'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smaller overlapping card */}
        <div className="absolute -bottom-[117px] left-40 bg-white rounded-lg shadow-custom border  p-4 z-10 w-[270px]">
          <div className="relative">
            {/* Purple circle */}
            <div className="absolute -top-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
            </div>

            {/* Name tag */}
            <div className="absolute -top-2 right-8">
            <div className="flex flex-col justify-center items-center text-blue-500">
                <div className='flex flex-row '>
                <ArrowUp size={16} />
                <span className="text-xs font-bold">14%</span>
                </div>
                <span className="text-xs text-gray-500">This week</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-end justify-between pt-8">
              <div>
                <div className="text-gray-600 text-sm mb-1">Issues Fixed</div>
                <div className="text-3xl font-bold">500K+</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCards;