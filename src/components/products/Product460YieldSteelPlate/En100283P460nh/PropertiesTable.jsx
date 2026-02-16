/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertiesTable() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      grade: 'EN 10028:3 P460NH',
      c: '–',
      cr: '–',
      ni: '–',
      mo: '–',
      pren: '–',
      proofStress: '–',
      tensile: '–',
      elongation: '–'
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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
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
          <p className="text-muted-foreground text-lg ml-7">
            Detailed composition and performance characteristics
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">C %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Cr %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Ni %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Mo %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">PREN</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.grade}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.c}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.cr}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.ni}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.mo}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.pren}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">0.2% Proof Stress (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Tensile Strength (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Elongation (%)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.grade}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.proofStress}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.tensile}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.elongation}</td>
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
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Values shown are typical and may vary based on specific heat treatment and manufacturing processes. Please contact us for detailed material certificates and specifications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
