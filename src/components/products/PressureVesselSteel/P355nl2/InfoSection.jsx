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
          <p className="text-muted-foreground text-lg">
            P355NL2
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
               Why Choose EN 10028:3 P355NL1 and P355NL2 Pressure Vessel Steel?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            As a leading European specification for pressure vessel steel, EN 10028:3 is globally trusted for its fine-grain construction and exceptional weldability. Specifically engineered to perform under extreme conditions—from high-pressure applications to frigid temperatures—these grades are a cornerstone of modern industrial fabrication. IKT provides these plates with full certification, ensuring strict compliance with international industry requirements and delivering guaranteed quality and consistency for every project.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
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
              <FileTextIcon className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Understanding the Differences Between P355NL1 and P355NL2 Pressure Vessel Plate
            </h3>
        <p  className="text-muted-foreground leading-relaxed text-base md:text-lg">P355NL1 vs. P355NL2 While both grades share core characteristics, their specific performance capabilities define their ideal applications:

Impact Resilience: P355NL1 is certified for temperatures down to -40°C, suitable for standard cold environments. In contrast, P355NL2 offers superior durability, passing transverse impact tests at -50°C for extreme low-temperature operations.

Chemical Precision: P355NL2 undergoes tighter controls on phosphorus and sulfur content, resulting in enhanced material strength and higher impact resistance compared to NL1.</p>
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
             Differing Applications
            </h3>
         <p  className="text-muted-foreground leading-relaxed text-base md:text-lg">
For standard pressure vessel applications in moderate environments, P355NL1 offers a reliable and efficient solution. For more demanding industries requiring enhanced toughness and peak performance at extremely low temperatures, P355NL2 is the superior choice. IKT provides a premium range of both EN 10028:3 P355NL1 and P355NL2 steel plates, ensuring every project benefits from exceptional durability, expert curation, and a commitment to reliability you can trust.
         </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
