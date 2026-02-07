import React from 'react';
import { Flame, Snowflake, Gauge, Activity, Cpu } from 'lucide-react';

const ChallengeSolution: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-lg mb-4">
              <Flame className="text-red-600 w-6 h-6" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              The Main Challenge: <span className="text-red-600">Thermal Management</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hydrogen storage in metal hydrides relies on adsorption and desorption processes. 
              These reactions are <strong>highly sensitive to temperature</strong>, requiring precise control 
              and efficient thermal management.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Risks of improper heat regulation:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <span className="text-slate-600">Slow reaction kinetics</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <span className="text-slate-600">Reduced storage capacity</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <span className="text-slate-600">Safety risks during absorption and release</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-64 lg:h-full min-h-[300px] bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-200 overflow-hidden">
             {/* Abstract Representation of the Challenge */}
             <div className="text-center p-8">
                <div className="flex justify-center items-center gap-8 mb-6">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-32 border-4 border-slate-300 rounded-t-full rounded-b-lg relative bg-slate-100">
                            <div className="absolute bottom-0 w-full h-1/2 bg-blue-200 rounded-b-lg animate-pulse"></div>
                        </div>
                        <span className="mt-2 font-medium text-slate-500">Storage</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-orange-500 font-bold">
                            <span>Adsorption</span> <span className="text-2xl">→</span> <Flame size={24} />
                        </div>
                        <div className="flex items-center gap-2 text-blue-500 font-bold">
                            <span>Desorption</span> <span className="text-2xl">→</span> <Snowflake size={24} />
                        </div>
                    </div>
                    <div className="w-8 h-32 bg-orange-100 rounded-full border border-orange-200 relative">
                        <div className="absolute bottom-0 w-full h-3/4 bg-orange-500 rounded-full"></div>
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                            <span className="text-xs font-bold text-orange-600 rotate-90 whitespace-nowrap">HEAT</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-slate-400 italic">Heat flow during H2 cycle</p>
             </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-hydrixon-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             {/* Decorative grid or pattern */}
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                     <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                 </pattern>
                 <rect width="100" height="100" fill="url(#grid)" />
             </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-300 font-semibold tracking-wide uppercase">The Hydrixon Solution</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Advanced Thermal Management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Precise Control</h3>
                <p className="text-blue-100 text-sm">
                    Implement advanced sensors and control algorithms to maintain optimal temperature during all cycles.
                </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Snowflake className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Active Cooling</h3>
                <p className="text-blue-100 text-sm">
                    Utilize active cooling and heat dissipation strategies to prevent hotspots, ensuring stability and safety.
                </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Activity className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Kinetics</h3>
                <p className="text-blue-100 text-sm">
                    Optimize thermal gradients to accelerate reaction rates, improving hydrogen uptake and release efficiency.
                </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Gauge className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Peak Performance</h3>
                <p className="text-blue-100 text-sm">
                    Achieve higher energy density, faster cycling, and longer operational life through controlled conditions.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSolution;