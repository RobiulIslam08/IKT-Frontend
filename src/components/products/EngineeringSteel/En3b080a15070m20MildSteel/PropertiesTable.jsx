/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    {
      grade: 'EN3B (070M20)',
      c: '≤0.25',
      si: '≤0.35',
      mn: '≤1.00',
      p: '≤0.06',
      s: '≤0.06',
      ni: '-',
      cr: '-',
      mo: '-',
      equivalent: 'AISI 1020 / Werkstoff 1.0402'
    }
  ];

  const mechanicalData = [
    {
      grade: 'EN3B (080A15)',
      proofStress: '215-280',
      tensile: '430-580',
      elongation: '20-26'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-muted/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Chemical & Mechanical Properties
            </h2>
          </div>
          <p className="text-base font-medium text-gray-700 ml-7">
            Detailed composition and performance characteristics
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">C %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Si %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Mn %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">P %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">S %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Ni %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Cr %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Mo %</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {chemicalData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-700">{row.grade}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.c}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.si}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.mn}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.p}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.s}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.ni}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.cr}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.mo}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.equivalent}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">0.2% Proof Stress (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Tensile Strength (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Elongation (%)</th>
                </tr>
              </thead>
              <tbody>
                {mechanicalData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-base font-medium text-gray-700">{row.grade}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.proofStress}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.tensile}</td>
                    <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.elongation}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <p className="text-base font-medium text-gray-700">
            <span className="font-bold text-foreground">Note:</span> All values are typical and may vary depending on heat treatment and production method. For full specifications and certificates, please contact IKT.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
