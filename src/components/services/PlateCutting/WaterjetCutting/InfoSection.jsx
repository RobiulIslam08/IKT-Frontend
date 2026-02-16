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
            WATERJET CUTTING
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
                IKT Precision Waterjet Cutting
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                IKT offers advanced waterjet cutting services, a versatile industrial process capable of profiling a wide range of materials. By utilizing ultra-high-pressure water—often mixed with specialized abrasives for high-density metals and granite—we deliver clean, accurate cuts without the risks associated with heat.
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
              <LayersIcon className="w-10 h-10 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Benefits of IKT Waterjet Cutting
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
               IKT utilizes waterjet technology to transform complex concepts into reality. This eco-friendly process offers unmatched precision and versatility, making it the preferred choice for high-specification engineering and intricate design work.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Zero Thermal Distortion: With no heat-affected zone (HAZ), the material’s structural integrity remains fully preserved.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ultra-Fine Precision: A narrow 1.2mm jet width allows for incredibly detailed and intricate geometries.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>High Tolerance Control: Delivers extreme accuracy for components requiring tight engineering fits.</span>
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
         IKT Waterjet Technology & Infrastructure
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
               IKT utilizes the latest in Bystronic Waterjet technology at our advanced processing facility. Our investment in high-performance 2D cutting systems allows us to execute complex designs with extreme precision, handling everything from initial roughing to high-definition contouring in heavy materials.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Bystronic Systems: Powered by dual high-precision Bystronic machines for maximum reliability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>2D Precision Profiling: Advanced cutting heads allow for a limitless range of structural and artistic designs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Thick Material Specialist: Seamlessly processes corners and fine contours in high-thickness steel.</span>
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
