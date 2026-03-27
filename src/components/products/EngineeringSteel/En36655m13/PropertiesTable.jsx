/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN36 (655M13)', c: '0.12-0.18', si: '0.10-0.35', mn: '0.30-0.60', ni: '3.00-3.75', cr: '0.60-1.10', p: '0.05 Max', s: '0.05 Max' }
  ];

  const equivalentsData = [
    { bs1991: '655M13', bs1955: 'EN36', aisi: '3415', werkstoff: '1.5752' }
  ];

  const heatTreatment = [
    { process: "Carburise", temp: "880°C / 930°C", details: "Initial case hardening phase" },
    { process: "Refine", temp: "850°C / 880°C", details: "Cool naturally in air or water" },
    { process: "Harden", temp: "760°C / 780°C", details: "Followed immediately by oil quench" },
    { process: "Temper", temp: "150°C / 200°C", details: "Temper in oil to alleviate stress & prevent cracking" }
  ];

  const sizes = {
    roundsBrightDrawnImperial: ["9/16", "5/8", "3/4", "7/8", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "1 7/8", "2", "2 1/4", "2 1/2", "2 3/4", "3"],
    roundsBrightDrawnMetric: ["10", "12", "16", "20", "22", "25", "32", "45", "50"],
    roundsHotRolled: ["25", "28", "32", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300"]
  };

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const RenderPills = ({ data, title }) => (
    <div className="mb-6">
      <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {data.map((item, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-white border border-primary/30 text-primary rounded-md text-sm font-bold shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Technical Specifications & Data
            </h2>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 ml-1 sm:ml-7">
            Complete material processing data for IKT EN36 Steel (655M13)
          </p>
        </motion.div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Table */}
            <motion.div variants={itemVariants} className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
              <div className="bg-primary/10 px-4 sm:px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">Typical Chemical Composition (%)</h3>
              </div>
              <table className="w-full min-w-[650px]">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-bold">Grade</th>
                    <th className="px-4 py-3 font-bold text-center">C%</th>
                    <th className="px-4 py-3 font-bold text-center">Si%</th>
                    <th className="px-4 py-3 font-bold text-center">Mn%</th>
                    <th className="px-4 py-3 font-bold text-center">Ni%</th>
                    <th className="px-4 py-3 font-bold text-center">Cr%</th>
                    <th className="px-4 py-3 font-bold text-center">P%</th>
                    <th className="px-4 py-3 font-bold text-center">S%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{chemicalData[0].grade}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].c}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].si}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].mn}</td>
                    <td className="px-4 py-4 text-center font-bold text-primary">{chemicalData[0].ni}</td>
                    <td className="px-4 py-4 text-center font-bold text-primary">{chemicalData[0].cr}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].p}</td>
                    <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* Equivalent Table */}
            <motion.div variants={itemVariants} className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
              <div className="bg-primary/10 px-4 sm:px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3>
              </div>
              <table className="w-full min-w-[550px]">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold">BS 970:1991</th>
                    <th className="px-6 py-4 font-bold text-center">BS 970:1955</th>
                    <th className="px-6 py-4 font-bold text-center">AISI/SAE</th>
                    <th className="px-6 py-4 font-bold text-center">Werkstoff</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-left font-bold">{row.bs1991}</td>
                      <td className="px-6 py-4 text-center">{row.bs1955}</td>
                      <td className="px-6 py-4 text-center font-bold text-primary">{row.aisi}</td>
                      <td className="px-6 py-4 text-center">{row.werkstoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

          </div>

          {/* Heat Treatment Box */}
          <motion.div variants={itemVariants} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> Recommended Heat Treatment
             </h3>

             <div className="flex-1 flex flex-col gap-4">
               {heatTreatment.map((step, index) => (
                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                    <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md min-w-[110px] text-center shadow-sm">
                      {step.process}
                    </span>
                    <div>
                      <p className="text-base font-bold text-gray-900">{step.temp}</p>
                      <p className="text-sm text-gray-600 font-medium">{step.details}</p>
                    </div>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>

        {/* Sizes */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> IKT Profile Inventory
            </h3>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              As a specialized case-hardening grade, IKT supplies EN36 exclusively in round bar diameters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">Bright Drawn / Turned</h3>
              <RenderPills title="Imperial Diameters (inches)" data={sizes.roundsBrightDrawnImperial} />
              <RenderPills title="Metric Diameters (mm)" data={sizes.roundsBrightDrawnMetric} />
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">Hot Rolled</h3>
              <RenderPills title="Metric Diameters (mm)" data={sizes.roundsHotRolled} />
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="p-5 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">Contact IKT:</span> The sizes displayed represent our most commonly stocked round bars. Additional dimensions or bespoke cut lengths are available upon request.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}