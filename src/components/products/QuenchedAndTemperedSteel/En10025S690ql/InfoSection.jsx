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
            EN 10025 S690QL
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
                Background of Quenched and Tempered Steel
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
                IKT utilizes high-performance steel plates enhanced through a specialized heat treatment process known as Quenching and Tempering. This advanced metallurgical technique allows us to provide steel with more than twice the strength of standard mild steel, ensuring superior performance in high-stress environments.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
                The Quenching Process: Steel is first heated above its upper critical temperature and then rapidly cooled in water. This "Quenching" phase transforms the crystalline structure of the metal, significantly increasing its hardness.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                The Tempering Process: To eliminate the brittleness caused by quenching, the steel undergoes "Tempering." It is precisely re-heated to a temperature below its lower critical limit. This crucial step restores toughness and ductility to the material.
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
              What are the benefits of EN 10025 S690QL?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              The Industry Standard for High Performance In the European structural steel market, the EN 10025 specification defines a specialized range of high-strength, quenched, and tempered steel grades. Among these, S690QL stands out as the primary benchmark, delivering a guaranteed minimum yield strength of 690 MPa.
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
              IKT and S690QL plate
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
        IKT maintains a robust inventory of S690QL steel plates, ensuring immediate availability for high-demand projects. Beyond supplying full-sized plates, we utilize advanced computer-controlled (CNC) cutting machines to deliver precision-engineered components, cut exactly to your specified sizes and complex shapes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
      While S690QL is engineered for excellent weldability and ease of fabrication, its superior yield and tensile strength—compared to standard mild steel—require specialized handling and technical expertise.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
