/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const equivalentsData = [
    { grade: 'IKT 1.2316', din: 'DIN 1.2316', other: 'X38CrMo16' }
  ];

  const chemicalData = [
    { c: '0.33 - 0.45', si: '1.00 Max', cr: '15.50 - 17.50', mo: '0.80 - 1.30', mn: '0 - 1.50', p: '0.03 Max', s: '0.03 Max', ni: '1.00 Max' }
  ];

  const heatTreatmentSteps = [
    { process: "Annealing", details: "Heat to 810–830 °C. Hardness after annealing will be Max. 235 HB." },
    { process: "Stress Relieving", details: "Soak at 600–650°C, followed by a slow furnace cool." },
    { process: "Hardening", details: "Heat to 1020–1040 °C. Quench in oil at 500–550°C. Hardness after quenching should reach 48–52 HRC." }
  ];

  const temperingData = [
    { temp: '100°C', hrc: '49 HRC' },
    { temp: '200°C', hrc: '47 HRC' },
    { temp: '300°C', hrc: '46 HRC' },
    { temp: '400°C', hrc: '46 HRC' },
    { temp: '500°C', hrc: '47 HRC' },
    { temp: '600°C', hrc: '32 HRC' }
  ];

  // Selected representations of stock to avoid massive rendering
  const metricFlats = [
    { thick: "10mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "20mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "50mm", widths: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "100mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "150mm", widths: ["160", "180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "200mm", widths: ["220", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "300mm", widths: ["320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] }
  ];

  const roundSizes = {
    metric: ["40", "50", "60", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300", "320", "350", "400"],
    imperial: ["5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "15/16", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/2", "4"]
  };

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const RenderPills = ({ data, title }) => (
    <div className="mb-6">
      <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide border-b border-gray-200 pb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {data.map((item, idx) => (
          <span key={idx} className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-md text-sm shadow-sm cursor-default">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & KSA Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT 1.2316 Chemical properties, processing guide, and delivery profiles.</p>
        </motion.div>

        {/* Top Grid: Equivalents & Chemistry */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">Grade Equivalents</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">IKT Grade</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN Standard</th>
                    <th className="px-6 py-4 text-center font-bold">Material Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100">{row.din}</td>
                      <td className="px-6 py-4 text-center">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Supply Condition Note */}
          <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Hardened Delivery Standard</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              All 1.2316 tool steel supplied by IKT is delivered locally or nationwide across KSA in a pre-hardened condition (standard <span className="font-bold">300 HB</span> or premium <span className="font-bold">340 HB</span>), utilizing our own specialized logistics fleet.
            </p>
          </motion.div>
        </div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                  <th className="px-4 py-4 text-center font-bold">Ni%</th>
                </tr>
              </thead>
              <tbody>
                {chemicalData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.c}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.si}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.cr}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mo}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mn}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.p}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.s}</td>
                    <td className="px-4 py-4 text-center">{row.ni}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Heat Treatment Processing Section */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> 1.2316 Heat Treatment Protocol
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Steps List */}
            <div className="flex-1 flex flex-col gap-4">
              {heatTreatmentSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start">
                  <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md min-w-[130px] text-center shadow-sm">
                    {step.process}
                  </span>
                  <div>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tempering Curve Table */}
            <div className="lg:w-1/3 w-full shrink-0">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="bg-primary/10 px-4 py-3 border-b border-gray-200">
                  <h3 className="text-base font-bold text-gray-800 text-center">Tempering Chart</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                      <th className="px-4 py-3 text-center font-bold border-r border-gray-100">Temp °C</th>
                      <th className="px-4 py-3 text-center font-bold">Hardness (HRC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {temperingData.map((row, index) => (
                      <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="px-4 py-3 text-center border-r border-gray-100 font-bold">{row.temp}</td>
                        <td className="px-4 py-3 text-center">{row.hrc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Stock List Display (Abridged for mobile view) */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span> Extensive Stock Capabilities
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1.2316 Flats & Squares (Sample Metrics)</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium">As stockholders, we supply practically unlimited bespoke dimensions. Below is a sample of popular extraction ranges.</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-h-[300px] overflow-y-auto">
                {metricFlats.map((flat, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p className="text-sm font-bold text-gray-800 mb-1">{flat.thick} Thick</p>
                    <p className="text-sm text-gray-600 font-medium line-clamp-2">Widths: {flat.widths.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Round Bars (Metric)</h3>
              <RenderPills title="Size (mm)" data={roundSizes.metric} />
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Round Bars (Imperial)</h3>
              <RenderPills title="Size (inches)" data={roundSizes.imperial} />
            </div>
          </div>
        </motion.div>

        {/* Footer Note & Contact with Saudi Context */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Mould Steel Logistics (KSA):</span>
            We deliver directly using our own vehicles across Saudi Arabia. Stock is cut strictly to your required sizes. Call our expert team now at <span className="font-bold">+966-13-3444036</span> to place your order.
          </p>

        </motion.div>

      </motion.div>
    </section>
  );
}