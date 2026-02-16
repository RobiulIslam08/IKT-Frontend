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
            SUPER AUSTENITIC STAINLESS STEEL
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
              
            
  <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Total Traceability:</span> Every plate and component is cataloged with its specific heat number, certification, and technical grade for instant retrieval.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Visual Tracking:</span> We utilize high-resolution photos and QR-coded labeling to ensure the material you ordered is exactly what arrives at your site.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Live Availability:</span> Our inventory is updated in real-time, allowing us to provide instant quotes and accurate lead times for even the most complex global logistics.
                </span>
              </li>
            </ul>

            </div>
          </div>
        </motion.div>

       
      </motion.section>
    </div>
  );
}

export default InfoSection;
