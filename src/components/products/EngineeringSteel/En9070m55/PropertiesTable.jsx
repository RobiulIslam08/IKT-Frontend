/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN9 (070M55)', c: '0.50-0.60', si: '0.05-0.35', mn: '0.50-0.80', p: '0.06 Max', s: '0.06 Max' }
  ];

  const equivalentsData = [
    { bs1991: '070M55', bs1955: 'EN9', aisi: '1055', werkstoff: '1.0535' }
  ];

  // Cleaned up repeated data slightly
  const sizes = {
    roundsBrightDrawn: ["1/2", "9/16", "5/8", "3/4", "7/8", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 3/4", "1 7/8", "2", "2 1/8", "3"],
    roundsHotRolled: ["32", "40", "45", "50", "55", "65", "70", "75", "80", "85", "90", "95", "100", "110", "120", "125", "130", "140", "150", "160", "180", "190", "200", "220", "280"]
  };

  // Structured Plate Data for better UI
  const plates = {
    "2500 x 1250 mm": ["6", "8", "10", "12", "15", "20", "25", "30", "40", "50", "60", "70", "80", "90", "100"],
    "3000 x 1500 mm": ["6", "8", "10", "12", "15", "20", "25", "30", "40", "50", "60", "70", "80", "90", "100"],
    "4000 x 2000 mm": ["6", "8", "10", "12", "15", "20", "25", "30", "40", "50", "60", "70", "80", "90", "100"]
  };

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const RenderPills = ({ data, title }) => (
    <div className="mb-6">
      <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide border-b pb-1">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {data.map((item, idx) => (
          <span key={idx} className="px-3 py-1 bg-white border border-primary/30 text-primary rounded-full text-sm font-medium shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material data for IKT EN9 Steel (070M55)</p>
        </motion.div>

        {/* Chemical Composition & Equivalents Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Composition Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left font-bold">Grade</th>
                    <th className="px-4 py-3 font-bold">C%</th>
                    <th className="px-4 py-3 font-bold">Si%</th>
                    <th className="px-4 py-3 font-bold">Mn%</th>
                    <th className="px-4 py-3 font-bold">P%</th>
                    <th className="px-4 py-3 font-bold">S%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-left font-bold">{chemicalData[0].grade}</td>
                    <td className="px-4 py-4">{chemicalData[0].c}</td>
                    <td className="px-4 py-4">{chemicalData[0].si}</td>
                    <td className="px-4 py-4">{chemicalData[0].mn}</td>
                    <td className="px-4 py-4">{chemicalData[0].p}</td>
                    <td className="px-4 py-4">{chemicalData[0].s}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left font-bold">BS 970:1991</th>
                    <th className="px-4 py-3 font-bold">BS 970:1955</th>
                    <th className="px-4 py-3 font-bold">AISI/SAE</th>
                    <th className="px-4 py-3 font-bold">Werkstoff</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b text-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-left font-bold">{row.bs1991}</td>
                      <td className="px-4 py-3">{row.bs1955}</td>
                      <td className="px-4 py-3">{row.aisi}</td>
                      <td className="px-4 py-3">{row.werkstoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Available Forms Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary"></span> Bar Inventory
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Bright Drawn / Turned Rounds</h3>
              <RenderPills title="Size (inches)" data={sizes.roundsBrightDrawn} />
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Hot Rolled Rounds</h3>
              <RenderPills title="Size (mm)" data={sizes.roundsHotRolled} />
            </div>
          </div>
        </motion.div>

        {/* Plate Dimensions Section */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="mb-6 border-b pb-4">
             <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> EN9 Steel Plate Dimensions
             </h3>
             <p className="text-gray-600 font-medium">We offer precision in-house cutting services on all plate materials.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(plates).map(([baseSize, thicknesses], idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h4 className="text-lg font-bold text-primary mb-3 text-center border-b border-gray-200 pb-2">
                  Sheet Size: {baseSize}
                </h4>
                <p className="text-sm font-bold text-gray-800 mb-3 text-center">Available Thicknesses (mm)</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {thicknesses.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-bold shadow-sm cursor-default">
                      {t} mm
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Custom Orders:</span> Other standard sizes for rounds, flats, squares, and completely custom steel forgings are available upon request. Contact IKT for rapid quoting and specialized cutting dimensions.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}