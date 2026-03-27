/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  // Cleaned, grouped, and synthesized Tool Steel Applications Data
  const applicationData = [
    { tool: 'Arbors', requirements: 'Strength, Wear', grade: 'O1' },
    { tool: 'Augers', requirements: 'Wear, Toughness', grade: 'A2' },
    { tool: 'Bits (Router / Boring)', requirements: 'High-Speed Machining, Wear', grade: 'M2, T1' },
    { tool: 'Bits (Screwdriver / Tool Holder)', requirements: 'Hard, Tough, Shock Resistant', grade: 'S1, M2' },
    { tool: 'Broaches', requirements: 'Edge retention, Wear, Shock, Chip Res.', grade: 'M2, T1, M42' },
    { tool: 'Bunters (Cold Heading)', requirements: 'Hard Surface, Tough Core', grade: 'O1' },
    { tool: 'Cams', requirements: 'Stability in Hardening', grade: 'O1, D2' },
    { tool: 'Centres (Dead / Live)', requirements: 'Resist Galling / Max Toughness', grade: 'M2 / D2' },
    { tool: 'Chisels (Cold, Hand, Pneumatic)', requirements: 'Hold Cutting Edge, Shock', grade: 'S1' },
    { tool: 'Chisels (Hot)', requirements: 'Red Hardness', grade: 'H13' },
    { tool: 'Concrete Breakers', requirements: 'Shock, Abrasion', grade: '2767, S1' },
    { tool: 'Cutters (Form, Gear, Slitting)', requirements: 'Red Hardness, Keen Edge', grade: 'M42, D2, M2' },
    { tool: 'Dies (Blanking Hot / Cold)', requirements: 'Red Hardness / Toughness', grade: 'M2 / D2' },
    { tool: 'Dies (Coining Hot / Cold)', requirements: 'Wash, Heat Checking / Resist Spalling', grade: 'H13, H21 / D2' },
    { tool: 'Dies (Drawing Hot / Cold)', requirements: 'Abrasion, Heat Checking / Wear', grade: 'H10A, H21 / O1, D2' },
    { tool: 'Dies (Extrusion Hot / Cold)', requirements: 'Red Hardness / Hard, Wear Resist.', grade: 'H13, H21 / D2' },
    { tool: 'Dies (Forging Hot / Brass)', requirements: 'Strength, Heat Checking, Red Hardness', grade: 'H13, H21, H10A' },
    { tool: 'Dies (Forming / Bending)', requirements: 'Dimensional Tolerance', grade: 'O1, D2' },
    { tool: 'Dies (Header Hot / Cold)', requirements: 'Splitting Resist / Pick-up Resist', grade: 'H13, S1 / O1, M2' },
    { tool: 'Dies (Stamping Hot / Cold)', requirements: 'Thermal Shock / Edge & Abrasion', grade: 'H10A, H12, H13 / O1, D2' },
    { tool: 'Drills (Twist / Centre)', requirements: 'Red Hardness / Wear', grade: 'M2, M35, M42' },
    { tool: 'Gauges (Plug, Ring, Thread)', requirements: 'Extreme Wear Resistance', grade: 'O1, D2' },
    { tool: 'Jigs & Bushes', requirements: 'Dimensional Stability', grade: 'O1, D2, S1' },
    { tool: 'Knives (Circular / Paper / Wood)', requirements: 'Keen Edge, Toughness', grade: 'O1, M2, T1, M42' },
    { tool: 'Mould Cores (Diecasting Zn, Al, Mg)', requirements: 'Tough, Resist Heat Checking', grade: 'H13' },
    { tool: 'Moulds (Plastic / Brick)', requirements: 'Low Inclusions, Polishability / Abrasion', grade: '2767, 2311, 420 / D3, A2' },
    { tool: 'Punches (Cold)', requirements: 'Shock, Wear, Toughness', grade: 'D2, M2, 2767, S1' },
    { tool: 'Punches (Hot)', requirements: 'Wear, Resist Heat Checking', grade: 'H13, M2, H10A, H21' },
    { tool: 'Rolls (Cold / Hot)', requirements: 'Wear, Hardness / Wear, Shock', grade: 'O1, D2, M2 / H13, M2' },
    { tool: 'Saws (Hacksaws, Band, Circular)', requirements: 'Tough & Hard', grade: 'M2, T1' },
    { tool: 'Shear Blades (Cold Heavy / Light)', requirements: 'Extreme Shock / Wear, Keen Edge', grade: 'D2, D3, M2, S1 / O1, 2767' },
    { tool: 'Shear Blades (Hot)', requirements: 'Thermal Shock Resistance', grade: 'H13, M2' },
    { tool: 'Taps & Thread Rollers', requirements: 'Edge Form, Tough & Hard', grade: 'M1, M2, T1, D2, M42' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tool Steel Selection Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT comprehensive guide to matching tool applications with 1st-choice steel grades.</p>
        </motion.div>

        {/* Master Application Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h3 className="text-lg font-bold text-gray-800">Application Reference Chart</h3>
             <span className="text-xs font-bold bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-300">Scroll horizontally on mobile</span>
          </div>
          <div className="overflow-x-auto max-h-[700px] overflow-y-auto relative">
            <table className="w-full min-w-[750px]">
              <thead className="sticky top-0 bg-gray-50 z-10 shadow-sm">
                <tr className="text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3">Tool Application</th>
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">General Mechanical Requirements</th>
                  <th className="px-6 py-4 text-left font-bold">1st Choice Steel Grade(s)</th>
                </tr>
              </thead>
              <tbody>
                {applicationData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-left border-r border-gray-100 font-bold">{row.tool}</td>
                    <td className="px-6 py-3 text-left border-r border-gray-100">{row.requirements}</td>
                    <td className="px-6 py-3 text-left">{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm md:text-base font-medium text-gray-700 text-left max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">Consult IKT Experts:</span> 
            The chart above is intended as a general reference. Specific operational conditions may require alternative steel grades. For precise material recommendations and current stock availability, please speak directly with our engineering sales team.
          </p>
        
        </motion.div>

      </motion.div>
    </section>
  );
}