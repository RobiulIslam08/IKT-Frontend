/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, FileTextIcon, CircleCheckIcon } from 'lucide-react';

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(6, 175, 207, 0.15)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-16 md:px-12 md:py-24"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Information
          </h1>
          <p className="text-muted-foreground text-lg">
            STEEL PROFILING & WELD PREPARATION
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <LayersIcon className="w-10 h-10 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            IKT Global Steel Profiling Services
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              From our state-of-the-art processing center, IKT delivers world-class steel profiling services. By combining high-definition technology with a robust supply chain, we provide a "single-source" solution for complex steel components, delivering parts that are ready for final assembly.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Advanced Cutting Methods: Full suite of profiling options including Oxy-Propane Gas, High-Definition Plasma, and Precision Waterjet cutting.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Heavy-Duty Capacity: Engineered to handle the largest plate dimensions, with thicknesses up to 400mm and individual piece weights up to 30 tonnes.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Infinity Skew Technology: Utilizes the latest skew plasma heads to ensure superior contour accuracy and high-quality edge finishes.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Optimized Lead Times: Our advanced infrastructure is designed to maintain the shortest delivery windows in the industry.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Complete Supply Chain: We act as your single point of contact, managing the entire process—from raw plate to finished profiles—to streamline your operations.</span>
              </li>
            </ul>
          </div>
        </motion.div>


      </motion.section>
    </div>
  );
}

export default InfoSection;
