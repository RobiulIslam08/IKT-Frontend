/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  // Heat Treated Conditions Data
  const conditionsData = [
    { condition: 'Q', tensile: '625 - 775', brinell: '179 - 229' },
    { condition: 'R', tensile: '700 - 850', brinell: '201 - 225' },
    { condition: 'S', tensile: '775 - 925', brinell: '223 - 277' },
    { condition: 'T', tensile: '850 - 1000', brinell: '248 - 302' },
    { condition: 'U', tensile: '925 - 1075', brinell: '269 - 331' },
    { condition: 'V', tensile: '1000 - 1150', brinell: '293 - 352' },
    { condition: 'W', tensile: '1075 - 1225', brinell: '311 - 375' },
    { condition: 'X', tensile: '1150 - 1300', brinell: '345 - 401' },
    { condition: 'Z', tensile: '1550 Min', brinell: '444 Min' }
  ];

  // Comprehensive Representative Hardness Conversion Chart
  const conversionData = [
    { hb: '746', hrc: '68', hrb: '-', hv: '940', ts: '2350' },
    { hb: '682', hrc: '64', hrb: '-', hv: '800', ts: '2150' },
    { hb: '653', hrc: '62', hrb: '-', hv: '760', ts: '2050' },
    { hb: '601', hrc: '58', hrb: '-', hv: '650', ts: '1950' },
    { hb: '555', hrc: '55', hrb: '-', hv: '595', ts: '1850' },
    { hb: '514', hrc: '52', hrb: '-', hv: '544', ts: '1760' },
    { hb: '477', hrc: '49', hrb: '-', hv: '500', ts: '1620' },
    { hb: '444', hrc: '47', hrb: '-', hv: '468', ts: '1520' },
    { hb: '415', hrc: '44', hrb: '-', hv: '437', ts: '1420' },
    { hb: '388', hrc: '42', hrb: '-', hv: '409', ts: '1330' },
    { hb: '363', hrc: '39', hrb: '-', hv: '382', ts: '1240' },
    { hb: '341', hrc: '37', hrb: '-', hv: '359', ts: '1160' },
    { hb: '311', hrc: '33', hrb: '-', hv: '328', ts: '1050' },
    { hb: '293', hrc: '31', hrb: '-', hv: '309', ts: '990' },
    { hb: '277', hrc: '29', hrb: '104', hv: '292', ts: '940' },
    { hb: '255', hrc: '25', hrb: '102', hv: '269', ts: '860' },
    { hb: '241', hrc: '23', hrb: '100', hv: '254', ts: '810' },
    { hb: '223', hrc: '20', hrb: '97', hv: '235', ts: '750' },
    { hb: '207', hrc: '-', hrb: '95', hv: '218', ts: '700' },
    { hb: '183', hrc: '-', hrb: '90', hv: '192', ts: '620' },
    { hb: '163', hrc: '-', hrb: '85', hv: '171', ts: '550' },
    { hb: '149', hrc: '-', hrb: '80', hv: '156', ts: '500' },
    { hb: '137', hrc: '-', hrb: '76', hv: '144', ts: '460' },
    { hb: '116', hrc: '-', hrb: '67', hv: '122', ts: '390' },
    { hb: '105', hrc: '-', hrb: '62', hv: '110', ts: '350' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Reference Data Tables</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Provided for guidance by IKT Engineering</p>
        </motion.div>

        {/* Heat Treated Conditions Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md max-w-4xl mx-auto">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Hardness Ranges for Heat Treated Steel</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Heat Treated Condition</th>
                  <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Tensile Strength (N/mm²)</th>
                  <th className="px-6 py-4 font-bold text-center">Brinell Hardness (HB)</th>
                </tr>
              </thead>
              <tbody>
                {conditionsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">Condition {row.condition}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-100">{row.tensile}</td>
                    <td className="px-6 py-4 text-center">{row.brinell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Master Conversion Chart Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h3 className="text-lg font-bold text-gray-800">Steel Hardness Conversion Chart (Approximate Values)</h3>
             <span className="text-xs font-bold bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-300">Scroll horizontally to view all scales</span>
          </div>
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto relative">
            <table className="w-full min-w-[800px]">
              <thead className="sticky top-0 bg-gray-50 z-10 shadow-sm">
                <tr className="text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-4 text-center font-bold">Brinell (HB)<br/><span className="text-xs font-medium text-gray-500">3000kg, 10mm Ball</span></th>
                  <th className="px-4 py-4 text-center font-bold">Rockwell C (HRC)<br/><span className="text-xs font-medium text-gray-500">150kg, Brale</span></th>
                  <th className="px-4 py-4 text-center font-bold">Rockwell B (HRB)<br/><span className="text-xs font-medium text-gray-500">100kg, 1/16" Ball</span></th>
                  <th className="px-4 py-4 text-center font-bold">Vickers (HV)<br/><span className="text-xs font-medium text-gray-500">Diamond Pyramid</span></th>
                  <th className="px-4 py-4 text-center font-bold">Tensile Strength<br/><span className="text-xs font-medium text-gray-500">Approx. N/mm²</span></th>
                </tr>
              </thead>
              <tbody>
                {conversionData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 text-center">{row.hb}</td>
                    <td className="px-4 py-3 text-center">{row.hrc}</td>
                    <td className="px-4 py-3 text-center">{row.hrb}</td>
                    <td className="px-4 py-3 text-center">{row.hv}</td>
                    <td className="px-4 py-3 text-center">{row.ts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900 block mb-2">Important Notice from IKT:</span> 
            Since various types of hardness tests do not all measure the exact same combination of material properties, conversion from one hardness scale to another is strictly an approximate process. Because of the wide range of variations among different steel grades, these figures are intended for guidance only.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}