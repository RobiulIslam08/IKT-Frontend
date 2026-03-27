/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN24 / EN24T', c: '0.36-0.44', si: '0.10-0.35', mn: '0.45-0.70', ni: '1.30-1.70', cr: '1.00-1.40', mo: '0.20-0.35', p: '0.035 Max', s: '0.040 Max' }
  ];

  const equivalentsData = [
    { bs1991: '817M40', bs1955: 'EN24', aisi: '4340', werkstoff: '1.6582 / 1.6565' }
  ];

  // Standard Round Inventory
  const sizes = {
    roundsHotRolled: ["40", "50", "60", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300", "320", "350", "400"],
    roundsBrightDrawnImperial: ["5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "15/16", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/2", "4"],
    roundsBrightDrawnMetric: ["10", "12", "15", "16", "18", "20", "25", "30", "35", "40", "45", "50", "60"]
  };

  // Bespoke Cut Flats & Squares mapping
  const customFlats = [
    { thick: "10mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "20mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "30mm", widths: ["35", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "40mm", widths: ["50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "50mm", widths: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "60mm", widths: ["65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "70mm", widths: ["75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "80mm", widths: ["85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "90mm", widths: ["95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "100mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "110mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "120mm", widths: ["125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "130mm", widths: ["140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "140mm", widths: ["150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "150mm", widths: ["160", "180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "160mm", widths: ["180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "180mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "190mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "200mm", widths: ["220", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "220mm", widths: ["250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "250mm", widths: ["260", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "280mm", widths: ["300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "300mm", widths: ["320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] }
  ];

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
          <p className="text-base font-medium text-gray-600 ml-7">Complete material specifications for IKT EN24T Alloy Steel (817M40 / 4340)</p>
        </motion.div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
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
                  <th className="px-4 py-3 font-bold text-center">Mn%</th>
                  <th className="px-4 py-3 font-bold text-center">Ni%</th>
                  <th className="px-4 py-3 font-bold text-center">Cr%</th>
                  <th className="px-4 py-3 font-bold text-center">Mo%</th>
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
                  <td className="px-4 py-4 text-center">{chemicalData[0].mo}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].p}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
                </tr>
              </tbody>
            </table>
          </div>
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

        {/* Available Size Ranges Section - ROUNDS */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary"></span> Standard Rounds Inventory
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Hot Rolled Rounds</h3>
              <RenderPills title="Size (mm)" data={sizes.roundsHotRolled} />
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Bright Drawn Rounds</h3>
              <RenderPills title="Imperial (inches)" data={sizes.roundsBrightDrawnImperial} />
              <RenderPills title="Metric (mm)" data={sizes.roundsBrightDrawnMetric} />
            </div>
          </div>
        </motion.div>

        {/* Massively Custom Cut Flats & Squares Matrix */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> Bespoke Cut EN24T Flats & Squares
            </h3>
            <p className="text-gray-600 font-medium">As we cut all our EN24T flats and squares directly from premium plates, we can easily tailor specific sizes beyond the standard stock to suit your direct machining requirements.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
            {customFlats.map((flat, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded-md shadow-sm">
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
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Need a Specific Size?</span> We stock extreme EN24T plates from 10mm up to 300mm and massive flat bars scaling to 3000 x 300mm. IKT provides rapid local, national, and export delivery. Call our specialists to request a custom cut dimension.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}