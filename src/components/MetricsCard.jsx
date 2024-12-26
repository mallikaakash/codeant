import React from 'react';
import { ArrowUp } from 'lucide-react';
import dark_logo from '../assets/dark_logo.jpg';
import pie from '../assets/pie.jpg';

const MetricsCards = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50">
      {/* Container for both cards */}
      <div className="relative w-[417px] top-1/3">
        {/* Main larger card */}
        <div className="bg-white rounded-3xl shadow-custom-xl border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-blue-900 rounded-full">
              <img src={dark_logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-gray-800 font-bold">AI to Detect & Autofix Bad Code</h2>
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
        <div className="absolute -bottom-[117px] -right-4 bg-white rounded-3xl shadow-custom border  p-4 pb-2 z-10 w-[220px]">
          <div className="relative">
            {/* Purple circle */}
            <div className="absolute -top-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full">
                <img src={pie} alt="Pie" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Name tag */}
            <div className="absolute right-2">
            <div className="flex flex-col justify-center items-center text-blue-500">
                <div className='flex flex-row '>
                <ArrowUp size={16} />
                <span className="text-xs font-bold">14%</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold">This week</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-end justify-between pt-10">
              <div className=''>
                <div className="text-gray-600 text-sm font-semibold">Issues Fixed</div>
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