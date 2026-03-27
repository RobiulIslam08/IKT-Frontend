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
            EN 10028:3 P460NL2
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
             
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
             The EN 10028:3 specification is a critical European standard for weldable fine-grain steels, categorized by their minimum yield strength and further refined by their impact resilience. Within this standard, the impact testing temperature is a key differentiator: N and NH grades are tested at -20°C or above, NL1 at -40°C or above, and the superior NL2 grade is tested at -50°C or above.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
           The designation EN 10028:3 P460NL2 identifies a high-performance steel intended for pressure purposes (P) with a robust minimum yield strength of 460 MPa. Its NL2 classification ensures that the material has passed rigorous transverse impact testing at -50°C, making it one of the most resilient grades for extreme, low-temperature pressure applications.
              </p>
            </div>
          </div>
        </motion.div>

        
      </motion.section>
    </div>
  );
}

export default InfoSection;
