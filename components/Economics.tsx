import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { TrendingDown, Check } from 'lucide-react';

const costData = [
  { name: 'Liquid H2', cost: 9.25 },
  { name: 'Compressed 700 bar', cost: 10.00 },
  { name: 'HyDrox 10', cost: 7.75 },
];

const Economics: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-hydrixon-primary font-semibold tracking-wide uppercase">Value Proposition</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Economic Value
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Delivering 16-20% lower operating costs compared to traditional solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Chart Section */}
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Total $/kg Delivered</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={costData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" unit="$" />
                            <YAxis type="category" dataKey="name" width={140} tick={{fontSize: 12, fontWeight: 500}} />
                            <Tooltip 
                                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Cost per kg']}
                                cursor={{fill: 'transparent'}}
                            />
                            <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                                {costData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.name === 'HyDrox 10' ? '#1E40AF' : '#94a3b8'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-center mt-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold text-sm">
                        <TrendingDown className="mr-2 h-4 w-4" />
                        Hydrixon Advantage: $2.25/kg savings vs Compressed
                    </span>
                </div>
            </div>

            {/* Comparison Details Table */}
            <div className="flex flex-col justify-center">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-slate-300">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">Metric</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">vs. Liquid H2</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">vs. 700 bar Comp.</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">Capital Cost</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">30-50% higher</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    30-40% LOWER <Check className="inline h-4 w-4"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">Energy Cost/cycle</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    75% LOWER <Check className="inline h-4 w-4"/>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    60% LOWER <Check className="inline h-4 w-4"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">No Boil-off</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    3%/day saved <Check className="inline h-4 w-4"/>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">Equivalent</td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">Maintenance</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    50% LOWER <Check className="inline h-4 w-4"/>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    30% LOWER <Check className="inline h-4 w-4"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">Safety Compliance</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    Lower Cost <Check className="inline h-4 w-4"/>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium">
                                    Lower Cost <Check className="inline h-4 w-4"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Economics;