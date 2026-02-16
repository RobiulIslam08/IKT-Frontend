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
            316 316L STAINLESS STEEL
          </p>
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
            <p className="text-muted-foreground text-sm leading-relaxed">Type 316 Overview: Type 316 is a leading austenitic alloy in the SAE 300 Series, second only to Type 304. It is highly valued for its excellent corrosion resistance, cryogenic toughness, and superior formability.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">Marine Grade Performance: With 2-3% Molybdenum, Type 316 offers enhanced protection against chloride corrosion. Often called “marine grade,” it is the ideal choice for saline and harsh saltwater environments.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">Type 316L Variant: The low-carbon 316L variant optimizes weldability and minimizes corrosion risks at weld joints, making it perfect for heavy-gauge components.</p>
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
        <p className="text-muted-foreground text-sm leading-relaxed">
  IKT stocks large-format stainless steel plates (up to 12,000mm x 3,000mm), ensuring optimal material utilization and minimal waste during custom processing. By leveraging our high-definition plasma cutting technology, we deliver cost-effective, precision-cut components that save clients both time and expense. Additionally, our large plate sizes allow for full-scale fabrications, helping customers reduce costs by minimizing the need for extensive welding.
</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
