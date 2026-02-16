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
            EN 10028:3 P460NL1
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
                The EN 10028:3 specification defines a specialized range of weldable fine-grain steels engineered specifically for pressure-related applications. This standard is categorized into three primary grades—P275, P355, and P460—where the numeric values represent the minimum yield strength (in MPa) for plates with a thickness of 16 mm and below. To ensure reliability in varying climates, these grades are further subdivided based on their transverse impact testing temperatures: N and NH designations indicate testing at -20°C or above, NL1 signifies testing at -40°C or above, and NL2 denotes superior resilience at -50°C or above.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
             A prime example is the EN 10028:3 P460NL1 grade, which is designated for pressure purposes (P) with a robust minimum yield strength of 460 MPa. Its NL1 classification guarantees that the material has undergone rigorous impact testing in the transverse direction at -40°C, ensuring structural integrity in low-temperature environments.
              </p>
            </div>
          </div>
        </motion.div>

  
      </motion.section>
    </div>
  );
}

export default InfoSection;
