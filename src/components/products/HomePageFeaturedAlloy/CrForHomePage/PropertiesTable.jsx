/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const categoriesData = [
    { category: 'Austenitic', feature: 'Non-magnetic, high corrosion resistance', commonGrades: '304, 316, 310' },
    { category: 'Ferritic', feature: 'Magnetic, good ductility and resistance', commonGrades: '409, 430' },
    { category: 'Duplex', feature: 'High strength, excellent stress corrosion resistance', commonGrades: '2205, 2507' },
    { category: 'Martensitic', feature: 'Hard and brittle, magnetic, heat treatable', commonGrades: '410, 420, 440' },
    { category: 'Precipitation Hardening', feature: 'Ultra-high strength, good corrosion resistance', commonGrades: '17-4 PH, A286' }
  ];

  const supplyFormats = [
    { form: 'Stainless Steel Sheet & Plate', specs: 'Cold Rolled / Hot Rolled' },
    { form: 'Seamless & Welded Pipe', specs: 'ASTM A312 / A358' },
    { form: 'Stainless Round Bar', specs: 'Bright / Turned / Forged' },
    { form: 'Fittings & Flanges', specs: 'Bespoke Custom Machined' },
    { form: 'Welding Consumables', specs: 'High-Purity Filler Wires' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Classification & Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Cross-referencing Stainless Steel categories and industrial compliance standards.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Category Classification */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Basic Category Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Category</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Key Features</th>
                    <th className="px-4 py-4 font-bold">Common Grades</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.feature}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.commonGrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Industrial Inventory Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Inventory (KSA Stock)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Standard / System</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.form}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Steel Logistics in KSA:</span>
            Premium Stainless Steel structural components, including Austenitic, Ferritic, and Duplex grades in diverse forms, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability for all regional energy, pharmaceutical, and construction sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, project-specific sizing for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}