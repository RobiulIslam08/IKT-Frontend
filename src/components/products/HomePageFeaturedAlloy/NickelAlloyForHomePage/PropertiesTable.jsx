/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const alloyGroups = [
    { group: 'High-Temperature Alloys', feature: 'Resistance to thermal creep and oxidation', applications: 'Jet engines, Gas turbines, Industrial heating' },
    { group: 'Corrosion-Resistant Alloys', feature: 'Protection against aggressive acids and halide media', applications: 'Chemical processing, Pharma vessels, Sour gas' },
    { group: 'Cobalt-Based Alloys', feature: 'Excellent wear and extreme heat resistance', applications: 'Turbine blades, Specialized valve trims' }
  ];

  const brandInventory = [
    { brand: 'HAYNES® / HASTELLOY®', specs: 'Elite Corrosion & High-Heat Performance' },
    { brand: 'INCONEL® / INCOLOY®', specs: 'Standard for Aerospace & Petrochemical' },
    { brand: 'MONEL® Alloy', specs: 'Superior Saltwater & Hydrofluoric Acid Resistance' },
    { brand: 'ULTIMET® Alloy', specs: 'Outstanding Wear & Galling Resistance' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'ASME / ASTM High-Pressure Grade' },
    { form: 'Industrial Plate & Sheet', specs: 'Precision Cold-Rolled / Hot-Rolled' },
    { form: 'Nickel Round Bar', specs: 'Bright / Turned / Forged' },
    { form: 'Specialty Indent Items', specs: 'Custom Non-Standard Dimensions' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Classification & Brand Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Cross-referencing Nickel-base alloy categories and global specialty brands available in KSA.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Alloy Categories */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Primary Alloy Functional Groups</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Alloy Group</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Key Feature</th>
                    <th className="px-4 py-4 font-bold">Primary Application</th>
                  </tr>
                </thead>
                <tbody>
                  {alloyGroups.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.group}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.feature}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Brand Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Specialty Super Alloy Brands</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100 w-1/2">Alloy Brand</th>
                    <th className="px-4 py-4 font-bold w-1/2">Performance Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {brandInventory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.brand}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.specs}</td>
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
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Compliance Standards</th>
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
            <span className="font-bold text-gray-900">IKT Specialized Super Alloy Logistics in KSA:</span>
            Premium Nickel and Cobalt based superalloys, including high-heat Inconel and corrosion-proof Hastelloy in diverse forms, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability and certifications for all regional aerospace, defense, and oil & gas sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, non-standard sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}