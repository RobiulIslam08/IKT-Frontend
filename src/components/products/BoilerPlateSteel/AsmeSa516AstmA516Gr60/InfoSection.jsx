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
            ASME SA516 / ASTM A516 Gr. 60
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
                IKT possesses...
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                IKT maintains an extensive inventory of SA516/A516 Gr. 60 plates, including specialized HIC-resistant (Hydrogen Induced Cracking) variants. With decades of expertise at the heart of our operations, we provide more than just material; we offer in-depth technical consultancy and precision processing tailored to the most intricate project requirements. This standard is the global benchmark for pressure vessel plates operating in moderate to lower-temperature environments.
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
              Additional Properties – ASME SA20 / ASTM A20
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              At IKT, we prioritize structural integrity and reliability by strictly adhering to ASTM A20 / ASME SA20 standards. This governing specification ensures consistent quality through rigorous testing protocols, precise dimensional tolerances, and standardized marking and loading procedures.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              We eliminate the complexity of navigating technical codes by providing plates that are already tested and certified. Every delivery is accompanied by a comprehensive Material Test Certificate (MTC), ensuring the material is perfectly aligned with your project’s unique specifications.
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
              ASME SA516 Gr. 60 / ASTM A516 Gr. 60 Boiler Plate Specification
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              In its core form, the A516 / SA516 standard is remarkably efficient, defined by five essential chemical elements and three primary mechanical properties. While many industry sources suggest grade equivalencies, IKT advises a meticulous technical review, as testing methodologies and tolerances often vary between international standards.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
