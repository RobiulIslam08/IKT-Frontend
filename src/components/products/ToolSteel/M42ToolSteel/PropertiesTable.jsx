// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {

//   const chemicalData = [
//     { grade: 'AISI M42 (1.3247)', c: '1.08', co: '8.00', mo: '9.40', cr: '3.90', v: '1.20', w: '1.50' }
//   ];

//   const stockAvailability = [
//     { profile: 'Round Bars', range: '1mm – 150mm' },
//     { profile: 'Square Bars', range: '4.5mm to 130mm' },
//     { profile: 'Flat Bars', range: 'From 3x7mm up to 50x380mm' }
//   ];

//   const temperingData = [
//     { temp: '500°C', hrc: '67 HRC' },
//     { temp: '550°C', hrc: '69 HRC' },
//     { temp: '600°C', hrc: '63 HRC' }
//   ];

//   const heatTreatmentSteps = [
//     { process: "Annealing", details: "Heat to 850°C–900°C (max rate 220°C/hr). Hold minimum 2 hours (or 1hr per 25mm thickness). Slow cool to 700°C. Recommended after hot working." },
//     { process: "Stress Relieving", details: "Heat to 600°C–700°C. Soak for approximately 2 hours at temperature, then slow cool to 500°C." },
//     { process: "Hardening", details: "Two steps: Pre-heat thoroughly to 450°C–500°C. Increase heat to 1050°C–1190°C, hold briefly, then quench to ~550°C. Cool in air to hand warm." },
//     { process: "Tempering", details: "Temper between 510–595°C three times (at least 1 hour at full temp each time). Cool in still air to room temperature between treatments." },
//     { process: "Forging", details: "Pre-heat to 650–760°C. Increase rapidly to forging temp (1010–1150°C). Equalise. If temp drops below 980°C, re-heat. Cool very slowly after forging." }
//   ];

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

//         {/* Header */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Heat Treatment</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT M42 High Speed Steel structural properties and processing guide.</p>
//         </motion.div>

//         {/* Top Grid: Chemistry & Stock */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">

//             {/* Chemical Composition Table */}
//             <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Typical Chemical Composition (%)</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-4 py-4 text-left font-bold border-r border-gray-100">C%</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Co%</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
//                       <th className="px-4 py-4 text-center font-bold">W%</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {chemicalData.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{row.c}</td>
//                         <td className="px-4 py-4 text-center border-r border-gray-100">{row.co}</td>
//                         <td className="px-4 py-4 text-center border-r border-gray-100">{row.mo}</td>
//                         <td className="px-4 py-4 text-center border-r border-gray-100">{row.cr}</td>
//                         <td className="px-4 py-4 text-center border-r border-gray-100">{row.v}</td>
//                         <td className="px-4 py-4 text-center">{row.w}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Stock Availability Table */}
//             <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">IKT KSA Stock Availability</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Bar Profile</th>
//                       <th className="px-6 py-4 text-left font-bold">Available Range</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {stockAvailability.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.profile}</td>
//                         <td className="px-6 py-4 text-left">{row.range}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//         </div>

//         {/* Heat Treatment Processing Section */}
//         <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
//           <div className="mb-8 border-b border-gray-200 pb-4">
//              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
//                <span className="w-2 h-2 rounded-full bg-primary"></span> M42 Heat Treatment Protocol
//              </h3>
//              <p className="text-gray-600 font-medium">Provided for guidance only. Rates and soaking times vary based on component size and external factors.</p>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-8">

//             {/* Steps List */}
//             <div className="flex-1 flex flex-col gap-4">
//               {heatTreatmentSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start">
//                    <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md min-w-[130px] text-center shadow-sm">
//                      {step.process}
//                    </span>
//                    <div>
//                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                    </div>
//                 </div>
//               ))}
//             </div>

//             {/* Tempering Curve Table */}
//             <div className="lg:w-1/3 w-full shrink-0">
//                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//                   <div className="bg-primary/10 px-4 py-3 border-b border-gray-200">
//                      <h3 className="text-base font-bold text-gray-800 text-center">Tempering Chart</h3>
//                   </div>
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                         <th className="px-4 py-3 text-center font-bold border-r border-gray-100">Temp °C</th>
//                         <th className="px-4 py-3 text-center font-bold">Hardness (HRC)</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {temperingData.map((row, index) => (
//                         <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                           <td className="px-4 py-3 text-center border-r border-gray-100 font-bold">{row.temp}</td>
//                           <td className="px-4 py-3 text-center">{row.hrc}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                </div>
//             </div>

//           </div>
//         </motion.div>

//         {/* Footer Note & Contact with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
//             <span className="font-bold text-gray-900 block mb-1">IKT Industrial Delivery Across KSA:</span> 
//             We supply M42 High-Speed Steel directly from our Saudi Arabian facilities. For custom requirements, data sheets, and typical analysis, call our engineering team at <span className="font-bold">+966-13-3444036</span>.
//           </p>

//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }



/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const chemicalData = [
    { grade: 'AISI M42 (1.3247)', c: '1.08', co: '8.00', mo: '9.40', cr: '3.90', v: '1.20', w: '1.50' }
  ];

  const stockAvailability = [
    { profile: 'Round Bars', range: '1mm – 150mm' },
    { profile: 'Square Bars', range: '4.5mm to 130mm' },
    { profile: 'Flat Bars', range: 'From 3x7mm up to 50x380mm' }
  ];

  const temperingData = [
    { temp: '500°C', hrc: '67 HRC' },
    { temp: '550°C', hrc: '69 HRC' },
    { temp: '600°C', hrc: '63 HRC' }
  ];

  const heatTreatmentSteps = [
    { process: "Annealing", details: "Heat to 850°C–900°C (max rate 220°C/hr). Hold minimum 2 hours (or 1hr per 25mm thickness). Slow cool to 700°C. Recommended after hot working." },
    { process: "Stress Relieving", details: "Heat to 600°C–700°C. Soak for approximately 2 hours at temperature, then slow cool to 500°C." },
    { process: "Hardening", details: "Two steps: Pre-heat thoroughly to 450°C–500°C. Increase heat to 1050°C–1190°C, hold briefly, then quench to ~550°C. Cool in air to hand warm." },
    { process: "Tempering", details: "Temper between 510–595°C three times (at least 1 hour at full temp each time). Cool in still air to room temperature between treatments." },
    { process: "Forging", details: "Pre-heat to 650–760°C. Increase rapidly to forging temp (1010–1150°C). Equalise. If temp drops below 980°C, re-heat. Cool very slowly after forging." }
  ];

  // --- Animation Variants ---
  const containerVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Main Header (Centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Heat Treatment</h2>
          </div>
          <p className="text-base text-gray-600">IKT M42 High Speed Steel structural properties and precise heat treatment protocols.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Typical Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Co%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
                    <th className="px-4 py-4 text-center font-bold">W%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.co}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mo}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.v}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* IKT KSA Stock Availability Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> IKT KSA Stock Availability
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Bar Profile</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Available Range</th>
                  </tr>
                </thead>
                <tbody>
                  {stockAvailability.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.profile}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Tempering Hardness Chart Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Tempering Hardness Chart
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Temperature (°C)</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Hardness (HRC)</th>
                  </tr>
                </thead>
                <tbody>
                  {temperingData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.temp}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.hrc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Heat Treatment Protocol */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> M42 Heat Treatment Protocol
              </h3>
              <p className="text-base text-gray-600 mt-2 px-6">Rates and soaking times vary based on component size and specific furnace conditions.</p>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
              {heatTreatmentSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-40 w-40 text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Processing & Delivery Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Industrial Delivery Across KSA:</span>
            We supply M42 High-Speed Steel directly from our Saudi Arabian facilities. For custom requirements, structural analysis, and rapid nationwide delivery across the Kingdom, please contact our engineering team.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical inquiries, call our specialized technical department at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}