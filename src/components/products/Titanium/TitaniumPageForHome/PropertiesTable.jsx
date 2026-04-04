/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const barInventory = [
    { grade: 'Grade 2 (UNS R50400)', spec: 'ASTM B348', range: '4.76mm to 304.8mm' },
    { grade: 'Grade 5 (UNS R56400)', spec: 'ASTM B348', range: '4.76mm to 254.0mm' },
    { grade: 'Grade 7 (UNS R52400)', spec: 'ASTM B348', range: '12.7mm to 50.8mm' },
    { grade: 'Grade 12 (UNS R53400)', spec: 'ASTM B348', range: '4.76mm to 304.8mm' },
    { grade: 'Grade 23 (UNS R56407)', spec: 'Medical Grade', range: 'Available on request' },
    { grade: 'Grade 4 (UNS R50700)', spec: 'ASTM F67', range: '4.0mm to 7.0mm' }
  ];

  const plateSheetInventory = [
    { product: 'Grade 2 Plate', spec: 'ASTM B265', range: '6.0mm to 12.0mm' },
    { product: 'Grade 5 Plate', spec: 'ASTM B265', range: '6.0mm to 12.0mm' },
    { product: 'Grade 2 Sheet', spec: 'ASTM B265', range: '0.5mm to 3.0mm' },
    { product: 'Grade 5 Sheet', spec: 'ASTM B265', range: '1.0mm to 3.0mm' }
  ];

  const weldingWireData = [
    { grade: 'ErTi-2, 3, 5, 7, 12', type: 'MIG Wire (AWS A5.16)', size: '1.2mm' },
    { grade: 'ErTi-2, 3, 5, 7, 12', type: 'TIG Wire (AWS A5.16)', size: '1.6mm to 3.2mm' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Inventory & Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Titanium grade matrix, size availability, and global industrial compliance standards.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Round Bar Inventory */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Titanium Round Bar Stock (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Grade (UNS)</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">ASTM Standard</th>
                    <th className="px-6 py-4 font-bold w-1/3">Size Range (OD)</th>
                  </tr>
                </thead>
                <tbody>
                  {barInventory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.spec}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Plate & Sheet Inventory */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Titanium Plate & Sheet Inventory</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Product Grade</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">ASTM Standard</th>
                    <th className="px-6 py-4 font-bold w-1/3">Thickness Range</th>
                  </tr>
                </thead>
                <tbody>
                  {plateSheetInventory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.product}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.spec}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Welding Wire Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Welding Rod & Filler Wire Specs</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Filler Grade</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Welding Process</th>
                    <th className="px-6 py-4 font-bold w-1/3">Available Sizes</th>
                  </tr>
                </thead>
                <tbody>
                  {weldingWireData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.type}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Titanium Logistics in KSA:</span>
            Premium Titanium Grade 2, 5, 7, 12, and 23 materials, including high-purity AWS A5.16 filler wires and medical-grade round bars, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability and certifications for all regional energy, medical, and aerospace sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, project-specific sizing for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}