/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const materialPortfolio = [
    { category: 'Nickel Alloys', items: 'Inconel, Monel, Hastelloy Oil-Field Grades' },
    { category: 'Stainless Steel', items: 'Duplex, Super Duplex, and Austenitic Strips' },
    { category: 'Titanium', items: 'High-Strength Forged Rings & Precision Sheets' },
    { category: 'Bespoke Products', items: 'Fully Finished Components to OEM Specs' }
  ];

  const industrialComponents = [
    { component: 'Wellheads & Valves', utility: 'High-Pressure Containment & Control' },
    { component: 'Completion Tools', utility: 'Subsurface Reservoir Management' },
    { component: 'Downhole Drilling', utility: 'Extreme Heat & Abrasion Resistance' },
    { component: 'Spiral Wound Gaskets', utility: 'Critical Sealing in Challenging Media' }
  ];

  const formAvailability = [
    { form: 'Forged Ring & Ingot', specs: 'Heavy Structural Drilling Hardware' },
    { form: 'Precision Strip & Sheet', specs: 'Gasket & Heat Exchanger Standards' },
    { form: 'Round & Flat Bar', specs: 'Machined Valve & Tool Components' },
    { form: 'Bespoke Components', specs: 'Fully Finished to Demanding Designs' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Material Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Energy sector material standards, finished component scope, and industrial form portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Material Portfolio Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Oil Field Material Portfolio</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Alloy Family</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Typical Oil Patch Grades</th>
                  </tr>
                </thead>
                <tbody>
                  {materialPortfolio.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Component Utility Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Finished Component scope</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Application Area</th>
                    <th className="px-6 py-4 font-bold w-1/2">Operational Utility</th>
                  </tr>
                </thead>
                <tbody>
                  {industrialComponents.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.component}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.utility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Product Forms Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Inventory availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Form & Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Petrochemical Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {formAvailability.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Specialized Energy Logistics in KSA:</span>
            Premium Oil & Gas structural components, including high-integrity nickel-alloy forgings, precision gasket strips, and finished wellhead hardware, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability and original mill certifications for all regional petrochemical and drilling operations.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical energy procurement, specialized sizing for KSA, or bespoke machining requirements, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}