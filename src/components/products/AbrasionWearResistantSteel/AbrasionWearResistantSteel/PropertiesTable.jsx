/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const performanceData = [
    {
      brand: 'HARDOX',
      grade: '450 / 500Tuf',
      hardness: '450 HBW (typical)',
      primaryBenefit: 'High abrasion resistance with very good weldability',
      formability: 'Good cold bending performance',
    },
    {
      brand: 'SIDUR',
      grade: '450 / 500',
      hardness: '420-470 HB (SIDUR 450)',
      primaryBenefit: 'Extreme hardness, strength, and toughness',
      formability: 'Designed for severe mineral-abrasion service',
    },
    {
      brand: 'SIJ Acroni PROTAC',
      grade: 'PROTAC 500',
      hardness: 'High hardness armour grade',
      primaryBenefit: 'Balanced strength, elongation, and impact toughness',
      formability: 'Excellent welding and bending workshop properties',
    },
    {
      brand: 'Perdur',
      grade: '400 / 450',
      hardness: '400 HBW / 450 HBW',
      primaryBenefit: 'Excellent workability with high toughness',
      formability: 'Wear-resistant plate with fabrication-friendly behavior',
    },
    {
      brand: 'DEEMEX',
      grade: 'DEEMEX 110 hard-facing plate',
      hardness: '60-64 HRC (chromium carbide overlay)',
      primaryBenefit: 'Outstanding abrasion and erosion resistance',
      formability: 'Suitable for ambient and elevated temperature wear service',
    },
    {
      brand: 'COR-TEN B',
      grade: 'Weathering steel',
      hardness: 'Atmospheric corrosion resistant grade',
      primaryBenefit: 'Minimizes maintenance and corrosion-prevention treatment',
      formability: 'Used in structural fabrication such as bridges and poles',
    },
  ];

  const standardsAndUseData = [
    {
      product: 'PROTAC 500',
      compliance: 'STANAG 4569 AEP55, VPAM PM 2007 and other ballistic standards',
      typicalUse: 'Armoured vehicles and protective structures',
    },
    {
      product: 'HARDOX / SIDUR / Perdur',
      compliance: 'Wear plate application-focused (hardness-graded)',
      typicalUse: 'Buckets, chutes, liners, dump bodies, and mining wear parts',
    },
    {
      product: 'DEEMEX 110',
      compliance: 'Chromium carbide overlay wear solution',
      typicalUse: 'Severe abrasion and erosion service at ambient/elevated temperatures',
    },
    {
      product: 'COR-TEN B',
      compliance: 'Weathering steel for anti-corrosion service',
      typicalUse: 'Buildings, transmission poles, bridges, and outdoor steel structures',
    },
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
              Material Performance Summary
            </h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7">
            Your provided abrasion resistant and specialty plate data in structured form
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Brand</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Grade / Series</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Typical Hardness</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Primary Benefit</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Fabrication / Use Note</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm  text-gray-700 font-medium">{row.brand}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.grade}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.hardness}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.primaryBenefit}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.formability}</td>
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
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Standards / Positioning</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Typical Application</th>
                </tr>
              </thead>
              <tbody>
                {standardsAndUseData.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm  text-gray-700 font-medium">{row.product}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.compliance}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{row.typicalUse}</td>
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
            <span className="font-semibold text-foreground">Note:</span> Hardness and performance values shown are typical guidance based on your provided data. Actual plate performance can vary by thickness, heat treatment route, and supplier certification.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
