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
    <div className=" bg-background">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-5 md:px-12 md:py-10"
      >
        <motion.div variants={itemVariants} className="">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            EN3B / 070M20 Mild Steel Overview
          </h1>
          <p className="text-base font-medium text-gray-700">
            EN3B (070M20) supplied by IKT
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
                EN3B / 070M20 Mild Steel: Key Details
              </h2>
              <p className="text-base font-medium text-gray-700 leading-relaxed">
                EN3B, also referred to as 070M20, is a mild steel grade recognized for its adaptability in general engineering. Provided by IKT, it is available in various forms and sizes, making it suitable for machining, welding, and fabrication. EN3B can be case hardened to improve surface wear resistance and is typically used in low-stress engineering components. Its good formability allows for easy bending and shaping, and it does not require pre-heating or post-weld heat treatment for most fabrication processes. Equivalent to AISI 1020 and Werkstoff 1.0402, EN3B is a reliable choice for shafts, pins, studs, and bespoke engineering solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
