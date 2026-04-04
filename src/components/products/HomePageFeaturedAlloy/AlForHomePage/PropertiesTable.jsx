/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const technicalFacts = [
    { property: 'Weight Profile', value: 'Lightweight & High Strength' },
    { property: 'Recyclability', value: '100% Recyclable' },
    { property: 'Corrosion Resistance', value: 'Excellent' },
    { property: 'Formability', value: 'Highly Formable & Flexible' },
    { property: 'Impermeability', value: 'Fully Impermeable' },
    { property: 'Surface Options', value: 'Various Finishes Available' },
    { property: 'Availability', value: 'Abundant in Nature' }
  ];

  const supplyFormats = [
    { form: 'Aluminium Round Bar', specs: 'Medical & Aerospace Grade' },
    { form: 'Aluminium Sheet & Plate', specs: 'Architectural & Industrial' },
    { form: 'Structural Components', specs: 'Commercial Transportation Grade' },
    { form: 'High-Temp Indent Items', specs: 'Specialty Indent Alloys' },
    { form: 'Surface Treated Bars', specs: 'Specialized Finishing Stocks' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Material Attributes</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Aluminium Alloy properties and industrial compliance benchmarks.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Technical Facts Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Core Material Properties</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Technical Fact</th>
                    <th className="px-6 py-4 font-bold w-1/2">Performance Level</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalFacts.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Industrial Form Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Inventory (KSA Stock)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Compliance Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.form}</td>
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
            <span className="font-bold text-gray-900">IKT Specialized Aluminium Logistics in KSA:</span>
            Premium Aluminium-based alloys, including specialized aviation and medical grade bars and sheets, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability for all regional transportation, aerospace, and structural infrastructure projects.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, project-specific sizing for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}