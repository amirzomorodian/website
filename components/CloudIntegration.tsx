import React from 'react';
import { Cloud, Server, BarChart2, Database } from 'lucide-react';

const CloudIntegration: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Cloud className="text-blue-400 w-12 h-12" />
          </div>
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Innovative Monitoring & Manufacturing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Leveraging AWS Cloud Solutions to overcome manufacturing challenges and ensure quality.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg">
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">Scaling & Quality</h3>
                </div>
                <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Solution</span>
                    <p className="text-slate-300 font-medium">AWS IoT SiteWise & Greengrass</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Benefit</span>
                    <p className="text-slate-400 text-sm mt-2">
                        Collects and analyzes data from reactors and milling machines in real-time. Ensures batch-to-batch consistency and identifies anomalies immediately.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg">
                        <BarChart2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">Predictive Quality</h3>
                </div>
                <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Solution</span>
                    <p className="text-slate-300 font-medium">Amazon SageMaker</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Benefit</span>
                    <p className="text-slate-400 text-sm mt-2">
                        Uses ML to correlate parameters (temp, pressure) with final performance (capacity, kinetics) to build predictive models and reduce waste.
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">Supply Chain</h3>
                </div>
                <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Solution</span>
                    <p className="text-slate-300 font-medium">Amazon S3 & AWS Glue</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Benefit</span>
                    <p className="text-slate-400 text-sm mt-2">
                        Centralized data lake for tracking raw material origin and compliance. Ensures traceability of critical rare-earth materials.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CloudIntegration;