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
            PLATE BENDING
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
            IKT Press Brake Forming Process
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              IKT utilizes high-precision press brake forming to reshape steel plates into exact specifications. Our process accounts for mechanical variables such as "spring-back" to ensure the final component meets your precise angular requirements.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Precision Pressing: The workpiece is accurately positioned over a die block and pressed to achieve the target geometry.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Controlled Over-Bending: To compensate for the natural tendency of steel to return to its original shape (spring-back), our systems calculate precise over-bending parameters.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Material-Specific Calibration: We adjust bending force and angles based on the specific material grade and thickness to ensure absolute accuracy.</span>
              </li>
            </ul>
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
              <LayersIcon className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              IKT Air Bending Services
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                IKT utilizes air bending for high-productivity metal forming. By pressing a punch into a V-shaped die without touching the bottom, we create precise angles while maintaining maximum operational flexibility.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>High Versatility: Capable of bending various materials and thicknesses into multiple angles using a single setup.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Lower Force Requirement: Efficiently processes parts using smaller, specialized tooling.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Increased Productivity: Fewer tool changes required, resulting in faster project turnaround times.</span>
                </li>
              </ul>
            </div>
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
              IKT Precision Bending: Bottoming & Coining
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                IKT utilizes specialized bending techniques to meet the most demanding tolerance requirements. Whether your project needs high-volume consistency or ultra-precise permanent deformation, our advanced forming methods ensure perfect results every time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Precision: Delivers higher accuracy and significantly reduces material spring-back.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Process: The sheet is pressed firmly against the V-die opening for a consistent finish.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Versatility: Requires specific tool sets tailored to each material, thickness, and angle for maximum control.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
