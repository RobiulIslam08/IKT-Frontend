/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN1A Leaded (230M07Pb)', c: '0.07-0.15', si: '0.10 Max', mn: '0.80-1.20', p: '0.07 Max', s: '0.20-0.30' }
  ];

  const equivalentsData = [
    { bs1991: '230M07Pb', bs1955: 'EN1A Pb', aisi: '12L14', werkstoff: '1.0718' }
  ];

  // All provided size data carefully extracted
  const sizes = {
    roundsBrightDrawnImperial: ["3/32", "1/8", "5/32", "3/16", "7/32", "1/4", "9/32", "5/16", "11/32", "3/8", "7/16", "1/2", "17/32", "9/16", "5/8", "11/16", "3/4", "13/16", "7/8", "15/16", "1", "1 1/16", "1 1/8", "1 3/16", "1 1/4", "1 5/16", "1 3/8", "1 7/16", "1 1/2", "1 5/8", "1 11/16", "1 3/4", "1 7/8", "2", "2 1/8", "2 1/4", "2 3/8", "2 1/2", "2 5/8", "2 3/4", "2 7/8", "3", "3 1/8", "3 1/4", "3 3/8", "3 1/2", "3 5/8", "3 3/4", "3 7/8", "4", "4 1/4", "4 1/2", "4 3/4", "5", "5 1/4", "5 1/2", "5 3/4", "6", "6 1/4", "6 1/2", "6 3/4", "7", "7 1/4", "7 1/2", "8"],
    roundsBrightDrawnMetric: ["2", "2.5", "3", "4", "5", "6", "6.5", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "24", "25", "26", "28", "30", "32", "35", "36", "38", "40", "42", "45", "46", "48", "50", "52", "55", "56", "58", "60", "65", "70", "75", "80", "85", "90", "100", "105", "110", "120", "125", "130", "140", "150"],
    roundsPrecisionGroundImperial: ["1/4", "3/8", "1/2", "5/8", "3/4", "7/8", "1", "1 1/4", "1 3/8", "1 1/2", "1 3/4", "2", "2 1/4", "2 1/2", "3"],
    roundsPrecisionGroundMetric: ["4", "6", "8", "10", "12", "15", "16", "20", "25", "30", "35", "40", "50"],
    roundsHotRolledMetric: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "180", "190", "200", "210", "220"],
    hexagonsImperial: ["0.193", "0.248", "0.312", "0.324", "0.375", "0.437", "0.445", "0.500", "0.525", "0.562", "0.600", "0.625", "0.687", "0.710", "0.750", "0.812", "0.820", "0.875", "0.920", "0.937", "1.000", "1.010", "1.062", "1.100", "1.125", "1.200", "1.250", "1.300", "1.312", "1.480", "1.500", "1.625", "1.670", "1.860", "2.050", "2.220", "2.410", "2.580", "2.760", "3.150", "3.550"],
    hexagonsMetric: ["5", "6", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "22", "24", "25", "26", "27", "30", "32", "35", "36", "41", "46", "50", "55", "60", "65", "70", "75"],
    squaresImperial: ["3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 3/4", "2", "2 1/4", "2 3/4", "3", "3 1/4", "3 1/2", "4"],
    squaresMetric: ["5", "6", "7", "8", "10", "12", "14", "15", "16", "18", "20", "22", "25", "30", "32", "40", "45", "50", "60"],
    imperialFlats: [
      { w: "3/8", t: "1/8" }, { w: "3/4", t: "1/2" }, { w: "1", t: "1/4, 3/8, 1/2, 5/8, 3/4" }, { w: "1 1/4", t: "3/8, 1/2, 3/4, 7/8, 1" }, { w: "1 1/2", t: "1/4, 3/8, 1/2, 5/8, 3/4, 1, 1 1/4" }, { w: "1 3/4", t: "1, 1 1/4" }, { w: "2", t: "1/4, 3/8, 1/2, 5/8, 3/4, 1, 1 1/4" }, { w: "2 1/2", t: "3/8, 1/2, 1, 1 1/2, 1 3/4" }, { w: "3", t: "3/8, 1/2, 3/4, 1, 1 1/2, 2" }, { w: "4", t: "3/8, 1/2, 3/4, 1, 1 1/2, 2, 2 1/2, 3" }, { w: "5", t: "1/2, 3/4, 1, 1 1/4, 1 1/2, 2, 3" }, { w: "6", t: "1/4, 3/8, 1/2, 5/8, 1, 1 1/4, 1 1/2, 2" }, { w: "8", t: "1/2, 3/4, 1, 1 1/4, 1 1/2" }, { w: "10", t: "1/2, 3/4, 1" }, { w: "12", t: "1/2, 1" }
    ],
    metricFlats: [
      { w: "10 mm", t: "3, 5 mm" }, { w: "12 mm", t: "3, 5, 6 mm" }, { w: "13 mm", t: "3 mm" }, { w: "16 mm", t: "3 mm" }, { w: "20 mm", t: "3, 5, 6, 8, 10, 12 mm" }, { w: "25 mm", t: "3, 5, 6, 8, 10, 12, 16, 20 mm" }, { w: "30 mm", t: "3, 5, 6, 8, 10, 12, 16, 20, 25 mm" }, { w: "40 mm", t: "3, 5, 6, 8, 10, 12, 16, 20, 25, 30 mm" }, { w: "50 mm", t: "3, 5, 6, 8, 10, 12, 16, 20, 25, 30 mm" }, { w: "60 mm", t: "3, 6, 8, 10, 12, 16, 20, 25, 30 mm" }, { w: "70 mm", t: "3, 5, 6, 8, 10, 12, 16, 20, 25 mm" }, { w: "80 mm", t: "5, 6, 8, 10, 12, 16, 20, 25 mm" }, { w: "90 mm", t: "6, 10, 12, 16 mm" }, { w: "100 mm", t: "3, 5, 6, 8, 10, 12, 16, 20, 25, 30, 40, 50 mm" }, { w: "125 mm", t: "10, 25, 50 mm" }, { w: "150 mm", t: "6, 10, 12, 16, 20, 25, 30, 40, 50 mm" }, { w: "200 mm", t: "10, 12, 20, 25, 30, 50 mm" }
    ]
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">IKT Technical Specifications & Inventory</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete data for EN1A Leaded Steel</p>
        </motion.div>

        {/* Chemical Composition & Equivalents Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Composition */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200"><h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left">C%</th><th className="px-4 py-3">Si%</th><th className="px-4 py-3">Mn%</th><th className="px-4 py-3">P%</th><th className="px-4 py-3">S%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center text-gray-700 font-medium">
                    <td className="px-4 py-4">{chemicalData[0].c}</td><td className="px-4 py-4">{chemicalData[0].si}</td><td className="px-4 py-4">{chemicalData[0].mn}</td><td className="px-4 py-4">{chemicalData[0].p}</td><td className="px-4 py-4">{chemicalData[0].s}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Equivalents */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200"><h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left">BS 970:1991</th><th className="px-4 py-3">BS 970:1955</th><th className="px-4 py-3">AISI/SAE</th><th className="px-4 py-3">Werkstoff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center font-bold text-primary">
                    <td className="px-4 py-4">{equivalentsData[0].bs1991}</td><td className="px-4 py-4">{equivalentsData[0].bs1955}</td><td className="px-4 py-4">{equivalentsData[0].aisi}</td><td className="px-4 py-4">{equivalentsData[0].werkstoff}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Extensive Size Inventory Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary"></span> IKT Available Size Ranges
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rounds Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Rounds Stock</h3>
              <RenderPills title="Bright Drawn / Turned (ins. dia)" data={sizes.roundsBrightDrawnImperial} />
              <RenderPills title="Bright Drawn / Turned (mm dia)" data={sizes.roundsBrightDrawnMetric} />
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
                 <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase">Precision Ground Tolerances</h4>
                 <p className="text-sm text-gray-600 mb-1 font-semibold">• Up to 1" dia: +/- 0.00025"</p>
                 <p className="text-sm text-gray-600 mb-1 font-semibold">• 4mm to 30mm dia: +0mm / -0.0127mm</p>
                 <p className="text-sm text-gray-600 font-semibold">• 35mm to 50mm dia: +0mm / -0.0254mm</p>
              </div>

              <RenderPills title="Precision Ground (ins. dia)" data={sizes.roundsPrecisionGroundImperial} />
              <RenderPills title="Precision Ground (mm dia)" data={sizes.roundsPrecisionGroundMetric} />
              <RenderPills title="Hot Rolled (mm dia)" data={sizes.roundsHotRolledMetric} />
            </div>

            {/* Hexagons & Squares Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Hexagons & Squares</h3>
              <RenderPills title="Hexagons Bright Drawn (ins. A/F)" data={sizes.hexagonsImperial} />
              <RenderPills title="Hexagons Bright Drawn (mm A/F)" data={sizes.hexagonsMetric} />
           
              <RenderPills title="Squares Bright Drawn (ins. sq)" data={sizes.squaresImperial} />
              <RenderPills title="Squares Bright Drawn (mm sq)" data={sizes.squaresMetric} />
            </div>
          </div>
        </motion.div>

        {/* Flats Section */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-6">Flat Sections Available</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase border-b pb-2">Imperial Flats (Width / Thicknesses in inches)</h4>
              <ul className="space-y-2">
                {sizes.imperialFlats.map((flat, idx) => (
                  <li key={idx} className="flex gap-4 text-sm bg-gray-50 p-2 rounded">
                    <span className="font-bold w-16 text-gray-900">{flat.w} :</span>
                    <span className="text-gray-600">{flat.t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase border-b pb-2">Metric Flats (Width / Thicknesses)</h4>
              <ul className="space-y-2">
                {sizes.metricFlats.map((flat, idx) => (
                  <li key={idx} className="flex gap-4 text-sm bg-gray-50 p-2 rounded">
                    <span className="font-bold w-20 text-gray-900">{flat.w} :</span>
                    <span className="text-gray-600">{flat.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Note from IKT:</span> Other specific sizes and lengths are available upon request. Please contact our technical sales team for current stock availability and custom requirements.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}