/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'N08367' },
    { standard: 'Trade Name', grade: 'AL-6XN, SSC-6MO' },
    { standard: 'Classification', grade: 'Super Austenitic Stainless Steel' },
    { standard: 'Specifications', grade: 'ASTM B688, B675, B462' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '23.5 - 25.5' },
    { element: 'Chromium (Cr)', content: '20.0 - 22.0' },
    { element: 'Molybdenum (Mo)', content: '6.0 - 7.0' },
    { element: 'Nitrogen (N)', content: '0.18 - 0.25' },
    { element: 'Iron (Fe)', content: 'Balance' },
    { element: 'Copper (Cu)', content: '≤ 0.75' },
    { element: 'Manganese (Mn)', content: '≤ 2.0' },
    { element: 'Carbon (C)', content: '≤ 0.03' },
    { element: 'Silicon (Si)', content: '≤ 1.0' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.06 g/cm³ (0.291 lb/in³)' },
    { property: 'Melting Point', value: '1320 - 1400 °C (2410 - 2550 °F)' },
    { property: 'Modulus of Elasticity', value: '196 GPa' },
    { property: 'Thermal Conductivity', value: '11.4 W/m·K' },
    { property: 'Pitting Resistance (PREN)', value: '≥ 45' }
  ];

  const comparisonData = [
    { feature: 'Material Class', al6xn: 'Super Austenitic', c276: 'Nickel Superalloy' },
    { feature: 'UNS Number', al6xn: 'N08367', c276: 'N10276' },
    { feature: 'Density (g/cm³)', al6xn: '8.06', c276: '8.89' },
    { feature: 'Molybdenum Content', al6xn: '6 - 7%', c276: '15 - 17%' },
    { feature: 'Main Strength Factor', al6xn: 'High Nitrogen content', c276: 'W & High Ni content' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'ASTM B675 / A312' },
    { form: 'Sheet & Plate', specs: 'ASTM B688 / A240' },
    { form: 'Tubing (Welded)', specs: 'ASTM B676 / A249' },
    { form: 'Solid Bar', specs: 'ASTM B691 / A479' },
    { form: 'Flanges & Fittings', specs: 'ASTM B462 / A182' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Compliance</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT AL-6XN (N08367) metallurgical matrix, physical dynamics, and industrial comparison benchmarks.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Grade Designations */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Grade Classifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Standard</th>
                    <th className="px-6 py-4 font-bold w-1/2">Alloy Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Chemical Composition */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 font-bold w-1/2">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. AL-6XN vs Hastelloy C276 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">AL-6XN vs Hastelloy C276 Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Feature</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">AL-6XN</th>
                    <th className="px-4 py-4 font-bold">Hastelloy C276</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.feature}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.al6xn}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.c276}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Industrial Form Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">ASTM Specifications</th>
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
            <span className="font-bold text-gray-900">IKT Specialized Marine Logistics in KSA:</span>
            AL-6XN super-austenitic components, including high-pressure desalination piping, industrial-grade marine plates, and forged B462 flanges, are heavily stocked across Saudi Arabia to empower rapid deployment in energy and offshore water treatment frameworks.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, exact material test reports (MTR), or specific pricing details for Saudi projects, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}