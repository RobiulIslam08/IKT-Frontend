/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const sheetPlateData = [
    { grade: '4130 Alloy Steel', temper: 'A, N', specs: 'MIL-S-18729, AMS6350, AMS6345' },
    { grade: '4340 Alloy Steel', temper: 'A, N, T', specs: 'AMS6359' },
    { grade: '4140 Alloy Steel', temper: 'As Rolled', specs: 'ASTM-A829' }
  ];

  const barGradeData = [
    { grade: '4130 Alloy Steel', specs: 'MIL-S-6758, AMS-6370, AMS-2301, AMS-6348' },
    { grade: '4140 Alloy Steel', specs: 'MIL-S-5626, AMS-6382, AMS-2301, AMS-6349' },
    { grade: '4330 N&T / Mod Vac', specs: 'MIL-S-8699, AMS-6427, BMS-7-27, BMS-7-122' },
    { grade: '4340 N&T / Vac Melt', specs: 'MIL-S-5000, AMS-6415, AMS-6414, BMS 7-28' },
    { grade: '300 M (4340 Mod)', specs: 'MIL-S-8844-CL 3, AMS-6417, BMS 7-26 CL-1' },
    { grade: '9310 / 52100 Ann', specs: 'MIL-S-7393C, AMS-6260, AMS-6440, AMS-2301' }
  ];

  const supplyFormats = [
    { category: 'Alloy Steel Pipes', standard: 'ASTM A335 (P11, P22, P5, P9, P91)' },
    { category: 'Alloy Steel Tubes', standard: 'ASTM A213 (T11, T22, T5, T9)' },
    { category: 'Precision Bars', standard: 'AISI 4140, 4130, 4340, 8620' },
    { category: 'Bearing Steel', standard: 'AISI 52100 (Annealed & Vac Melt)' },
    { category: 'Case Hardening Steel', standard: 'AISI 9310 (N&T)' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Compliance Standards</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Alloy Steel specification matrix, aerospace-grade tempers, and industrial compliance benchmarks.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Sheet & Plate Specifications */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Alloy Steel Sheet & Plate Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Alloy Grade</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Temper</th>
                    <th className="px-6 py-4 font-bold w-1/3">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {sheetPlateData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.temper}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Bar Specifications */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">High-Performance Alloy Bar Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Grade</th>
                    <th className="px-6 py-4 font-bold w-1/2">AMS & MIL Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {barGradeData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Industrial Form Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Inventory (KSA Stock)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Product Category</th>
                    <th className="px-6 py-4 font-bold w-1/2">ASTM & ASME Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Note */}
        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Alloy Logistics in KSA:</span>
            Alloy Steel structural materials, including ASTM A335 high-pressure pipes, aerospace-grade AISI 4130 plates, and vacuum-melted 4340 bars, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability and certifications (AMS, MIL, ASTM) for all regional defense and energy sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}