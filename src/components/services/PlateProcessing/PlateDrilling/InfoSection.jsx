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
    <div className=" bg-background">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-5 md:px-12 md:py-10"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Information
          </h1>
          <p className="text-muted-foreground text-lg">
            PLATE DRILLING
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
           IKT Messer OmniMat® L: Technical Specifications
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The Messer OmniMat® L at IKT is a powerhouse for steel processing, combining advanced automation with meticulous quality. By integrating cutting and drilling into one platform, we ensure rapid delivery and industrial-grade reliability.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Automated Precision: Features auto-height sensing, ignition, and piercing for consistent accuracy.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Batch Efficiency: Multi-head system equipped with up to 6 torches for simultaneous cutting.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Heavy-Duty Cutting: Precision profiling of carbon steel up to 250mm thickness.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Bore Excellence: Capable of large-format bore cutting up to 103mm in diameter.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Cold Processing: Drilling ensures zero Heat-Affected Zones (HAZ), preserving material integrity.</span>
              </li>
            </ul>
          </div>
        </motion.div>

      
      </motion.section>
    </div>
  );
}

export default InfoSection;
