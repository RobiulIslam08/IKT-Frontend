/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const complianceData = [
    { standard: 'EN 1090-2 EXC4', aspect: 'Highest Structural Execution Class' },
    { standard: 'ISO 3471', aspect: 'Roll-Over Protection Structures (ROPS) Standard' },
    { standard: 'EN 3.1 / 3.2', aspect: 'Full Mill Traceability Certification' },
    { standard: 'PPAP / ISIR', aspect: 'OEM Repeatability & Sample Validation' }
  ];

  const highStrengthGrades = [
    { grade: 'S700 Hollow Sections', benefit: 'Maximum Weight Reduction & Tensile Strength' },
    { grade: 'S500 / S460 Sections', benefit: 'Agile Vehicle Chassis & Heavy Load Support' },
    { grade: 'S355 (Hot & Cold)', benefit: 'Standard Structural & Defence Infrastructure' },
    { grade: 'Specialist ROPS/FOPS', benefit: 'Occupant Safety in Combat Environments' }
  ];

  const processingCapability = [
    { facility: 'Multi-Axis Tube Laser', detail: '3D Precision cutting up to 610mm Diameter' },
    { facility: 'Robotic 3D Coping', detail: 'Precision edge prep for high-integrity welding' },
    { facility: 'CNC Bending & Forming', detail: 'Optimized for complex Chassis fabrication' },
    { facility: 'Kitting & JIT Logistics', detail: 'Production-ready parts directly to assembly lines' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Defence Standards</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Defence sector technical matrix, high-strength material portfolio, and compliance benchmarks.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Compliance Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Accreditation & Documentation Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Regulation / Framework</th>
                    <th className="px-6 py-4 font-bold w-1/2">Technical Compliance Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.aspect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Material Strength Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">High-Strength Defence Grades</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Steel Grade</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Operational Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {highStrengthGrades.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Processing Capacity Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Precision Processing Capability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Service / Equipment</th>
                    <th className="px-6 py-4 font-bold w-1/2">Technical Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {processingCapability.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.facility}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Defence Logistics in KSA:</span>
            Mission-critical structural steel and precision-processed components for armoured vehicles and security infrastructure are heavily stocked across Saudi Arabia. We provide full melt-to-part traceability and sustainable carbon reporting for high-stakes military and NATO-standard programs.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical defence procurement operations, specific sizing details for KSA, or PPAP documentation, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}