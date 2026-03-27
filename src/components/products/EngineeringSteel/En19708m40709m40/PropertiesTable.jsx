/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const equivalentsData = [
    { bs1991: '708M40 / 709M40', bs1955: 'EN19', aisi: '4140', werkstoff: '1.7225' }
  ];

  // All specific sizes requested are carefully mapped out
  const sizes = {
    roundsHotRolled: ["40", "50", "60", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300", "320", "350", "400"],
    roundsBrightDrawnImperial: ["5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "15/16", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/2", "4"],
    roundsBrightDrawnMetric: ["10", "12", "15", "16", "18", "20", "25", "30", "35", "40", "45", "50", "60"],
    hexagonsBrightDrawnImperial: ["0.500", "0.600", "0.625", "0.750", "0.937", "1.010", "1.125", "1.300", "1.500"],
    hexagonsBrightDrawnMetric: ["10", "12", "15", "16", "18", "20", "25", "30", "35", "40", "45", "50", "60"]
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material specifications for IKT EN19 Alloy Steel (709M40 / 4140)</p>
        </motion.div>

        {/* Equivalents Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
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
          </div>
        </motion.div>

        {/* Available Size Ranges Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary"></span> IKT Profile Inventory
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hot Rolled Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Hot Rolled Inventory</h3>
              <RenderPills title="Rounds Hot Rolled (mm)" data={sizes.roundsHotRolled} />
              <div className="mt-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-sm font-bold text-gray-900 mb-1">EN19 / 4140 Steel Plate</p>
                <p className="text-sm text-gray-700 font-medium">We also stock robust steel plates in AISI 4140 equivalence. Contact us for sheet dimensions.</p>
              </div>
            </div>

            {/* Bright Drawn Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Bright Drawn Inventory</h3>
              <RenderPills title="Rounds Bright Drawn (inches)" data={sizes.roundsBrightDrawnImperial} />
              <RenderPills title="Rounds Bright Drawn (mm)" data={sizes.roundsBrightDrawnMetric} />
              <RenderPills title="Hexagons Bright Drawn (ins A/F)" data={sizes.hexagonsBrightDrawnImperial} />
              <RenderPills title="Hexagons Bright Drawn (mm A/F)" data={sizes.hexagonsBrightDrawnMetric} />
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Custom Orders:</span> The sizes listed are standard stock items. IKT specializes in bespoke cut-to-length orders, pre-machined bars, and steel forgings. Please get in touch for custom dimensions.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}