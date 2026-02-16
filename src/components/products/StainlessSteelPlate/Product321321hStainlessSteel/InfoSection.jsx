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
            321 321H STAINLESS STEEL
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

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Grade 321/321H Overview: Part of the 300 series, Grade 321/321H is engineered for high-temperature service up to 900°C. Compared to standard austenitic grades like 304 and 316, it offers superior thermal stability and performance in extreme environments.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Corrosion & Scaling Resistance: The addition of titanium significantly enhances its resistance to scaling and intergranular corrosion. This makes it a highly durable choice for industrial applications where standard stainless steels might fail.
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
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Technical Composition:
The defining characteristic of 321/321H compared to standard 304/316 grades is the addition of Titanium as a stabilizing element. This allows the material to maintain structural integrity at significantly higher temperatures. To ensure optimal stability, the Titanium content is precisely balanced at five times the Carbon percentage ($Ti = 5 \times C\%$).
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
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              321 vs. 321H Differentiation: The primary distinction between 321 and 321H is the carbon content, with 321H featuring a higher concentration (0.04% vs. 0.05%). This increased carbon allows for superior creep resistance and enhanced strength in high-temperature environments exceeding 530°C.
              </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Inventory & Specifications: IKT’s 321/321H stock includes plates ranging from 6mm to 50mm in thickness, with dimensions available up to 12m in length and 2.5m in width.
              </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
