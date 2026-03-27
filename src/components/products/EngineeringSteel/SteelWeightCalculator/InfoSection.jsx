/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-background">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-5 md:px-12 md:py-10"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Information
          </h1>
          <p className="text-base font-medium text-gray-700">
            Steel Weight Calculator Reference
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12"
        >
          <div className="flex gap-4 items-start mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <LayersIcon className="w-8 h-8 text-primary shrink-0 mt-1" />
            </motion.div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Technical Overview: Steel Weight Calculator Reference
              </h2>
              <p className="text-base font-medium text-gray-700 leading-relaxed">
                Accurate weight calculation is essential for material ordering, cost estimation, transport planning, and structural design. Steel weight is calculated using the theoretical density of steel (7.85 g/cm3 or 7850 kg/m3) multiplied by the volume of the section. Different section profiles require different formulas: round bars use the diameter, flat bars use width and thickness, and hollow sections use outer dimensions and wall thickness. This reference provides weight-per-meter values and calculation formulas for the most common steel sections and shapes used in engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
