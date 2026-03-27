/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  // Decoded Matrix from the provided data
  const flatStockSizes = [
    { width: "10", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8"] },
    { width: "15", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12"] },
    { width: "20", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15"] },
    { width: "25", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20"] },
    { width: "30", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25"] },
    { width: "35", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30"] },
    { width: "40", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30"] },
    { width: "50", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30"] },
    { width: "60", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "70", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30"] },
    { width: "75", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "80", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "100", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "125", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "150", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "200", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "250", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] },
    { width: "300", thicknesses: ["1", "1.5", "2", "3", "4", "5", "6", "8", "10", "12", "15", "20", "25", "30", "50"] }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Metric Stock Availability Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600 md:ml-7">IKT Precision Ground Flat Stock available dimensions across KSA.</p>
        </motion.div>

        {/* Stock Matrix Display */}
        <motion.div variants={itemVariants} className="bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm mb-12">
          <div className="mb-8 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 rounded-full bg-primary"></span> Standard Metric Profiles
              </h3>
              <p className="text-gray-700 font-medium text-sm">Listed below are our standard width configurations and their corresponding available thicknesses in millimeters (mm).</p>
            </div>
            <span className="shrink-0 bg-primary/10 border border-primary/20 text-gray-800 font-bold px-4 py-2 rounded-lg text-sm">
              Non-standard sizes available upon request
            </span>
          </div>

          {/* Responsive Matrix Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {flatStockSizes.map((stock, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                  <span className="text-lg font-bold text-gray-900">{stock.width} mm Width</span>
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Available Thicknesses (mm)</p>
                   <div className="flex flex-wrap gap-2">
                      {stock.thicknesses.map((thick, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 font-medium rounded text-sm shadow-sm cursor-default hover:border-gray-400 transition-colors">
                          {thick}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note & Contact with Saudi Context */}
        <motion.div variants={itemVariants} className="p-6 md:p-8 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Direct Delivery in Saudi Arabia:</span> 
            We maintain an extensive stock of ground flat steel to ensure your tooling projects are never delayed. Call our expert sales team now at <span className="font-bold">+966-13-3444036</span> for rapid nationwide dispatch across the KSA.
          </p>
         
        </motion.div>

      </motion.div>
    </section>
  );
}