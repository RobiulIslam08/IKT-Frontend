/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  // Heat Treated Steel Conditions Table (Q to Z)
  const conditionData = [
    { condition: 'Q', tensile: '625 - 775 N/mm²', brinell: '179 - 229 HB' },
    { condition: 'R', tensile: '700 - 850 N/mm²', brinell: '201 - 225 HB' },
    { condition: 'S', tensile: '775 - 925 N/mm²', brinell: '223 - 277 HB' },
    { condition: 'T', tensile: '850 - 1000 N/mm²', brinell: '248 - 302 HB' },
    { condition: 'U', tensile: '925 - 1075 N/mm²', brinell: '269 - 331 HB' },
    { condition: 'V', tensile: '1000 - 1150 N/mm²', brinell: '293 - 352 HB' },
    { condition: 'W', tensile: '1075 - 1225 N/mm²', brinell: '311 - 375 HB' },
    { condition: 'X', tensile: '1150 - 1300 N/mm²', brinell: '345 - 401 HB' },
    { condition: 'Z', tensile: '1550 N/mm² (Approx)', brinell: '444 HB' }
  ];

  // Representative Hardness Conversion Matrix (Cleaned & Structured)
  const conversionMatrix = [
    { hrc: '68', hb: '722', hrb: '-', hv: '940', tensile: '-' },
    { hrc: '65', hb: '684', hrb: '-', hv: '846', tensile: '-' },
    { hrc: '60', hb: '627', hrb: '-', hv: '697', tensile: '2180' },
    { hrc: '55', hb: '560', hrb: '-', hv: '595', tensile: '1985' },
    { hrc: '50', hb: '481', hrb: '-', hv: '513', tensile: '1668' },
    { hrc: '45', hb: '421', hrb: '-', hv: '446', tensile: '1422' },
    { hrc: '40', hb: '371', hrb: '-', hv: '392', tensile: '1246' },
    { hrc: '35', hb: '327', hrb: '109', hv: '345', tensile: '1084' },
    { hrc: '30', hb: '286', hrb: '105', hv: '302', tensile: '961' },
    { hrc: '25', hb: '253', hrb: '100', hv: '266', tensile: '855' },
    { hrc: '20', hb: '226', hrb: '97', hv: '238', tensile: '765' },
    { hrc: '15', hb: '204', hrb: '94', hv: '212', tensile: '690' },
    { hrc: '10', hb: '187', hrb: '90', hv: '192', tensile: '635' },
    { hrc: '-', hb: '160', hrb: '83', hv: '160', tensile: '540' },
    { hrc: '-', hb: '131', hrb: '73', hv: '131', tensile: '450' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Reference Charts</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Approximate conversion tables for structural and tool steels.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* Heat Treated Conditions Table */}
          <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Heat Treated Steel Conditions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Condition</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Tensile Strength</th>
                    <th className="px-6 py-4 text-center font-bold">Brinell (HB)</th>
                  </tr>
                </thead>
                <tbody>
                  {conditionData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-3 text-center font-bold border-r border-gray-100">{row.condition}</td>
                      <td className="px-6 py-3 text-center border-r border-gray-100">{row.tensile}</td>
                      <td className="px-6 py-3 text-center">{row.brinell}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Master Conversion Matrix */}
          <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
               <h3 className="text-lg font-bold text-gray-800">Master Conversion Matrix</h3>
               <span className="text-xs font-bold bg-white px-3 py-1 rounded text-gray-600 shadow-sm">Values are Approximate</span>
            </div>
            <div className="overflow-x-auto max-h-[550px] overflow-y-auto">
              <table className="w-full relative">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200 shadow-sm">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Rockwell C<br/><span className="text-xs text-gray-500 font-normal">150kg Brale</span></th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Brinell (HB)<br/><span className="text-xs text-gray-500 font-normal">3000kg / 10mm</span></th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Rockwell B<br/><span className="text-xs text-gray-500 font-normal">100kg / 1/16"</span></th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Vickers (HV)<br/><span className="text-xs text-gray-500 font-normal">Diamond Pyramid</span></th>
                    <th className="px-4 py-4 text-center font-bold">Tensile<br/><span className="text-xs text-gray-500 font-normal">(N/mm²)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {conversionMatrix.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 text-center border-r border-gray-100 font-bold">{row.hrc}</td>
                      <td className="px-4 py-3 text-center border-r border-gray-100">{row.hb}</td>
                      <td className="px-4 py-3 text-center border-r border-gray-100">{row.hrb}</td>
                      <td className="px-4 py-3 text-center border-r border-gray-100">{row.hv}</td>
                      <td className="px-4 py-3 text-center">{row.tensile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Footer Note & Contact with Saudi Context */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Technical Support (KSA):</span> 
            Need help selecting the correct tool steel for your required hardness? Our metallurgical experts in Saudi Arabia are ready to assist. Call us at <span className="font-bold">+966-13-3444036</span>.
          </p>
        
        </motion.div>

      </motion.div>
    </section>
  );
}