/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'ALLOY24™', c: '0.22-0.25', si: '0.50-0.65', s: '0.003 Max', mn: '0.85-1.00', v: '0.10-0.15', cr: '1.10-1.30', mo: '0.35-0.50' }
  ];

  const mechanicalData = [
    { property: "Hardness", guaranteed: "HBW: 280 - 330", typical: "HBW 300, HRC: 29" },
    { property: "Impact Values (Longitudinal) ≤ 130mm thick", guaranteed: "27 J min", typical: "60 J" },
    { property: "Impact Values (Longitudinal) > 130mm thick", guaranteed: "14 J min", typical: "27 J" },
    { property: "Tensile Strength @ 20°C", guaranteed: "-", typical: "1,080 Rm[MPa]" },
    { property: "Tensile Strength @ 200°C", guaranteed: "-", typical: "1,010 Rm[MPa]" },
    { property: "Yield Strength @ 20°C", guaranteed: "-", typical: "955 Rp0.2[MPa]" },
    { property: "Yield Strength @ 200°C", guaranteed: "-", typical: "860 Rp0.2[MPa]" },
    { property: "Coefficient of Thermal Expansion (20°C to 200°C)", guaranteed: "-", typical: "13.1 (10⁻⁶/K)" }
  ];

  // Bespoke Cut Flats & Squares mapping
  const customFlats = [
    { thick: "10mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "20mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "30mm", widths: ["35", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "40mm", widths: ["50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "50mm", widths: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "60mm", widths: ["65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "70mm", widths: ["75", "80", "85", "90", "95", "100", "120", "125", "130"] },
    { thick: "80mm", widths: ["85", "90", "95", "100", "120", "125", "130"] },
    { thick: "90mm", widths: ["95", "100", "120"] },
    { thick: "100mm", widths: ["120", "125", "130"] },
    { thick: "110mm", widths: ["120", "125", "130"] },
    { thick: "120mm", widths: ["125", "130"] }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Profile</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material specifications for IKT ALLOY24™ Steel</p>
        </motion.div>

        {/* Top Grid: Chemistry & Mechanics */}
        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          
          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Typical Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-bold">Grade</th>
                    <th className="px-4 py-3 font-bold text-center">C%</th>
                    <th className="px-4 py-3 font-bold text-center">Si%</th>
                    <th className="px-4 py-3 font-bold text-center">S%</th>
                    <th className="px-4 py-3 font-bold text-center">Mn%</th>
                    <th className="px-4 py-3 font-bold text-center">V%</th>
                    <th className="px-4 py-3 font-bold text-center">Cr%</th>
                    <th className="px-4 py-3 font-bold text-center">Mo%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{chemicalData[0].grade}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].c}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].si}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].mn}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].v}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].cr}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].mo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Guaranteed & Typical Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Mechanical Properties</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
                    <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Guaranteed Value</th>
                    <th className="px-6 py-4 font-bold text-center">Typical Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.property}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100">{row.guaranteed}</td>
                      <td className="px-6 py-4 text-center">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Custom Cut Flats & Squares Matrix */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> ALLOY24™ Plate-Cut Flats & Squares
            </h3>
            <p className="text-gray-600 font-medium">As we cut all our ALLOY24™ flats and squares directly from premium steel plates, we ensure highly accurate bespoke dimensions up to 3000mm in length. Perfect alternative to EN24T blocks.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
            {customFlats.map((flat, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded-md shadow-sm min-w-[100px]">
                    {flat.thick} Thick
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800 mb-2">Available Widths (mm):</p>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      {flat.widths.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Rapid Delivery:</span> 
            We stock ALLOY24™ for immediate local and national dispatch. The flat sections listed above are standard extraction ranges; completely customized sizes and export options are available upon direct request.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}