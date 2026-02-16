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
            UNS S32750 (1.4410)
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
                Super Duplex UNS S32750 | 1.4410 Overview: IKT specializes in high-grade Super Duplex stainless steel plates, certified to UNS S32750 and 1.4410 standards. Our inventory is fully compatible with the 2507 designation, ensuring versatility for high-performance industrial needs.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Premium Quality & Testing: All IKT stock is sourced from premium Western European manufacturers and complies with rigorous material specifications. To guarantee superior durability, our plates undergo advanced testing, including E562 microstructure analysis and corrosion testing (G48 or A293 Method C), maintaining a guaranteed minimum PREN of 40.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Certification & Compliance: Our material is produced and certified in accordance with NORSOK MDS D55. Plates up to 35mm thick are certified to Revision 4, with Mill Test Certificates provided via third-party inspection to EN 10204 3.2.
              </p>
            </div>
          </div>
        </motion.div>

       
      </motion.section>
    </div>
  );
}

export default InfoSection;
