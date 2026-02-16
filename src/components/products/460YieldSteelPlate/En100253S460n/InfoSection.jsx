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
            EN 10025:3 S460N
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
Technical Overview: EN 10025:3 S460N Structural Steel              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
             EN 10025:3 is a rigorous European standard for weldable structural steels, characterized by their fine-grain structure. These steels are supplied in a normalized condition (or equivalent normalized rolled condition) to ensure uniform mechanical properties and superior structural reliability.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            The specification is categorized into four primary grades—S275, S355, S420, and S460—which denote the minimum yield strength in MPa for plates 16 mm thick and below. To ensure reliability in diverse climates, each grade is further subdivided based on minimum impact energy values at specific temperatures. The "N" designation indicates impact testing at temperatures not lower than -20°C, while the "NL" designation signifies enhanced toughness for temperatures as low as -50°C. Therefore, the designation EN 10025:3 S460N identifies a high-strength structural steel with a guaranteed minimum yield strength of 460 MPa and certified impact resilience down to -20°C. In addition to S460N, IKT maintains a robust inventory of S460NL plates to support projects requiring maximum durability in extreme low-temperature environments.
              </p>
            </div>
          </div>
        </motion.div>

        

      </motion.section>
    </div>
  );
}

export default InfoSection;
