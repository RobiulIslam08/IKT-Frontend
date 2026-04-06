/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const certificationData = [
    { standard: 'ISO 9001', aspect: 'Quality Management Systems' },
    { standard: 'ISO 14001', aspect: 'Environmental Management Systems' },
    { standard: 'BES 6001', aspect: 'Responsible Sourcing of Construction Products' },
    { standard: 'EN 1090 EXC 4', aspect: 'Highest Execution Class for Fabrication' }
  ];

  const structuralPortfolio = [
    { category: 'Heavy Structural Steel', items: 'Universal Beams, Columns, and High-Build Plate' },
    { category: 'Safety & Access', items: 'Bespoke safety components, access walkways, and studs' },
    { category: 'Sections & Flats', items: 'Structural Hollow Sections (RHS/CHS), Flats, and Plates' },
    { category: 'Processing Services', items: '2D/3D precision processing and digital coordination' }
  ];

  const projectPhases = [
    { phase: 'New-Build Programs', detail: 'Structural steel for future fusion and fission plants' },
    { phase: 'Maintenance & Life Extension', detail: 'Fast-track supply for operational nuclear facilities' },
    { phase: 'Refurbishment', detail: 'Replacement structural components for aging infrastructure' },
    { phase: 'Decommissioning', detail: 'Containment materials and hazardous waste structural units' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Compliance</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Nuclear sector technical standards, accreditation matrix, and lifecycle support portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Accreditation Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Accreditation & Compliance Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Standard / Code</th>
                    <th className="px-6 py-4 font-bold w-1/2">Technical Domain</th>
                  </tr>
                </thead>
                <tbody>
                  {certificationData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.aspect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Nuclear Lifecycle Support */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Lifecycle Project Phases</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Project Phase</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Scope of Material Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {projectPhases.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.phase}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Product Availability Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Product Portfolio</th>
                    <th className="px-6 py-4 font-bold w-1/2">Nuclear Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {structuralPortfolio.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Nuclear Logistics in KSA:</span>
            High-integrity structural steel components, including EXC4-grade processed sections, high-traceability plates, and hollow sections, are heavily stocked to empower rapid deployment in energy security and nuclear programs. We provide full material test reports (MTR) and digital coordination for every project.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical nuclear procurement operations or specific sizing details for KSA projects, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}