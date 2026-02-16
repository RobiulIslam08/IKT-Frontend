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
            ABRACLAD CHROMIUM CARBIDE WEAR PLATE
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
                What is the Purpose of Chromium Plating?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                IKT provides high-performance Chromium Carbide Overlay (CCO) plates, specifically engineered to combat aggressive material loss in the most punishing industrial environments. These plates feature a specialized metallurgical bond between a tough steel base and a wear-resistant overlay, designed to thrive under extreme abrasion, moderate impact, and high-pressure conditions.
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
              Benefits of ABRACLAD Wear Plate
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Extended Lifespan:</span> Specifically engineered for extreme durability in highly abrasive settings. Its High-Chrome Alloy structure ensures a prolonged service life, maintaining
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Minimized Downtime:</span> Reliability is key to profitability. ABRACLAD is built to perform under moderate to high-impact stress, significantly reducing the frequency of maintenance interruptions and ensuring your operations remain continuous and efficient.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Cost-Effective Engineering:</span> ABRACLAD offers the perfect equilibrium between thickness, weight, and performance. It stands as one of the most economical wear-resistant solutions on the market, providing significant long-term value by reducing the total cost of ownership.
                </span>
              </li>
            </ul>
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
              Key Features
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Versatile Base Plate Options:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Stainless Steel Base: For environments requiring both corrosion and abrasion resistance.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Specialty Grades: Custom base plates can be utilized to meet specific structural or thermal requirements, ensuring seamless integration into your existing systems.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>A60 SB (Stringer Bead): Lightweight plates manufactured using proprietary stringer bead technology. These are specifically designed for components requiring significant bending flexibility without sacrificing surface hardness.</span>
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
