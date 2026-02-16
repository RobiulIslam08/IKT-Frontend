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
            EN 10025:3 S460NL
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
                IKT offers a comprehensive range of carbon and stainless steel plates, including the high-performance S460NL grade, available directly from our extensive inventory. As modern engineering evolves, designers are increasingly turning to 460 MPa yield plates to achieve a strategic balance of increased structural strength and significant weight savings. S460NL is a hot-rolled, high-strength construction steel engineered for superior weldability and exceptional impact resistance. It is specifically designed to perform under the most demanding conditions, making it the definitive choice for heavy engineering projects, offshore structures, and high-capacity lifting equipment.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                The technical superiority of S460NL is defined by the EN 10025:3 European standard, which specifies the delivery conditions for normalized or normalized-rolled weldable fine-grain structural steels. This grade provides a guaranteed minimum yield strength of 460 MPa (for thicknesses of 16mm and below), ensuring a highly durable and reliable foundation for critical structural applications. A key differentiator of the S460NL classification is its certified impact energy values at temperatures as low as -50°C (NL), providing unmatched safety and toughness in sub-zero environments. To cater to diverse project requirements, IKT also maintains a robust stock of S460N plates for applications where standard temperature resilience is required.
              </p>
            </div>
          </div>
        </motion.div>


      </motion.section>
    </div>
  );
}

export default InfoSection;
