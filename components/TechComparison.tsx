import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const TechComparison: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-hydrixon-primary font-semibold tracking-wide uppercase">Comparative Analysis</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hydrogen Storage Technologies
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Why Metal Hydride offers a superior advantage over traditional Liquid and Compressed storage methods.
          </p>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-hydrixon-dark text-white">
                <th className="p-4 sm:p-6 font-semibold text-lg border-b border-blue-800 w-1/4">Aspect</th>
                <th className="p-4 sm:p-6 font-semibold text-lg border-b border-blue-800 w-1/4 bg-blue-900/50">Liquid Hydrogen (LH₂)</th>
                <th className="p-4 sm:p-6 font-semibold text-lg border-b border-blue-800 w-1/4 bg-blue-900/30">Compressed Hydrogen (CH₂)</th>
                <th className="p-4 sm:p-6 font-semibold text-lg border-b border-blue-800 w-1/4 bg-hydrixon-primary">Metal Hydride Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-4 sm:p-6 font-medium text-slate-900 bg-slate-50">Storage Temp/Pressure</td>
                <td className="p-4 sm:p-6 text-slate-600">Requires cryogenic cooling (-253°C) <XCircle className="inline w-4 h-4 text-red-500 ml-1"/></td>
                <td className="p-4 sm:p-6 text-slate-600">Requires very high pressure (350–700 bar) <AlertTriangle className="inline w-4 h-4 text-amber-500 ml-1"/></td>
                <td className="p-4 sm:p-6 text-slate-800 font-semibold bg-blue-50">Operates at moderate temp & pressure <CheckCircle2 className="inline w-5 h-5 text-green-600 ml-1"/></td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-slate-900 bg-slate-50">Energy Cost</td>
                <td className="p-4 sm:p-6 text-slate-600">High energy for liquefaction</td>
                <td className="p-4 sm:p-6 text-slate-600">High energy for compression</td>
                <td className="p-4 sm:p-6 text-slate-800 font-semibold bg-blue-50">Lower energy for absorption/release</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-slate-900 bg-slate-50">Safety</td>
                <td className="p-4 sm:p-6 text-slate-600">Risk of boil-off & explosion</td>
                <td className="p-4 sm:p-6 text-slate-600">Risk of leaks & rupture</td>
                <td className="p-4 sm:p-6 text-slate-800 font-semibold bg-blue-50">Safer, solid-state storage</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-slate-900 bg-slate-50">Infrastructure</td>
                <td className="p-4 sm:p-6 text-slate-600">Complex insulation & handling</td>
                <td className="p-4 sm:p-6 text-slate-600">Heavy-duty pressure vessels</td>
                <td className="p-4 sm:p-6 text-slate-800 font-semibold bg-blue-50">Simpler containment</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-slate-900 bg-slate-50">Volumetric Density</td>
                <td className="p-4 sm:p-6 text-slate-600">Low (even when liquid)</td>
                <td className="p-4 sm:p-6 text-slate-600">Very low</td>
                <td className="p-4 sm:p-6 text-slate-800 font-semibold bg-blue-50">Higher density in solid form</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechComparison;