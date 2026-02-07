import React from 'react';
import { ArrowRight, ShieldCheck, Thermometer, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-hydrixon-dark text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-hydrixon-accent font-semibold tracking-wide uppercase text-sm mb-3">
              Introducing HyDrox 10
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Smart. Safe. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Solid-State Hydrogen
              </span>
              <br/> Storage System.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Advanced metal hydride technology with precise thermal management for the next generation of clean energy infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#technology"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-hydrixon-dark bg-white hover:bg-blue-50 transition-colors md:text-lg"
              >
                Explore Technology
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a 
                href="#economics"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-base font-medium rounded-full text-white hover:bg-blue-900 transition-colors md:text-lg"
              >
                View Economic Value
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Pseudo-3D visualization card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-500/30">
                    <Thermometer className="text-blue-300 mb-3" size={32} />
                    <h3 className="font-bold text-lg">Moderate Temp</h3>
                    <p className="text-sm text-blue-200 mt-1">Operates safely without cryogenic cooling.</p>
                 </div>
                 <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-500/30">
                    <ShieldCheck className="text-blue-300 mb-3" size={32} />
                    <h3 className="font-bold text-lg">Solid-State Safety</h3>
                    <p className="text-sm text-blue-200 mt-1">No high-pressure explosion risk.</p>
                 </div>
                 <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-500/30">
                    <Database className="text-blue-300 mb-3" size={32} />
                    <h3 className="font-bold text-lg">High Density</h3>
                    <p className="text-sm text-blue-200 mt-1">Superior volumetric density vs compressed gas.</p>
                 </div>
                 <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-500/30 flex items-center justify-center">
                    <div className="text-center">
                        <span className="block text-4xl font-bold text-white">20%</span>
                        <span className="text-sm text-blue-200">Lower Operating Cost</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;