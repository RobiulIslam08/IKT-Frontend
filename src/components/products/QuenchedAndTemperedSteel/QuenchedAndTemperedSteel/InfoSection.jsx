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
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">The integration of high-strength quenched and tempered (Q&T) steel into industrial projects offers a transformative impact on structural integrity and cost-efficiency. By utilizing a high strength-to-weight ratio, this material allows for the engineering of significantly lighter components that maintain extreme durability, optimizing both material usage and transport costs. At IKT, we enhance this value through customizable precision, utilizing state-of-the-art high-definition plasma, laser, and waterjet cutting to deliver plates tailored to exact specifications.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">Beyond immediate design benefits, Q&T steel is inherently durable and long-lasting, engineered to minimize wear and tear even in high-stress environments, which substantially lowers long-term maintenance and replacement expenses. Furthermore, these plates arrive ready for fabrication, featuring metallurgical properties that ensure they are easy to weld and process. This streamlining of the production workflow reduces overall labor hours and accelerates project timelines, providing a seamless transition from raw material to finished assembly</p>
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
        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
 High-strength quenched and tempered steel plate is specifically engineered for excellent weldability and fabrication versatility. While it offers superior yield and tensile strength compared to standard mild steel, these enhanced mechanical properties require precise handling and specialized technical approaches. Utilizing the correct fabrication parameters ensures the material maintains its structural integrity and tempered characteristics throughout the production process.
</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
 IKT provides comprehensive guidance on various processing methods to ensure optimal results. Due to the high-performance nature of Q&T grades, we recommend a calibrated approach to welding, machining, and forming. For projects requiring specific metallurgical tolerances or complex structural configurations, our technical offices are available to provide detailed advisory support tailored to your exact specifications.
</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
