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
            BS 1501 161 430 A/B
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
               BS1501 is the British standard for carbon and carbon manganese steel plates used in pressure applications.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
        Although the BS 1501:1980 Part 1 standard was officially withdrawn in 1993 and superseded by the European EN 10028 standard, its reliability in industrial applications remains undisputed. IKT recognizes the ongoing global demand for these specific grades and continues to maintain a significant, ready-to-ship inventory of BS 1501 161 430A and 430B plates. Our commitment to supporting legacy specifications alongside modern standards ensures we provide the most comprehensive material solutions for our clients' unique project requirements.
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
    BS 1501 161 430 Specifications: The BS 1501 161 series specifies requirements for fully killed carbon steel plates up to 150 mm in thickness. IKT provides two distinct types of this grade to meet varying industrial demands:
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Type A:</span> Certified for specified minimum room temperature tensile strength.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Type B:</span>Certified for both room temperature tensile strength and enhanced elevated temperature properties.
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
           Other BS1501 Steel Plate Grades
            </h3>
          <p className='text-muted-foreground leading-relaxed text-base md:text-lg'>The BS 1501 161 430 Type B grade maintains all the mechanical characteristics of Type A, with the critical addition of certified elevated temperature properties. This makes it an ideal choice for projects requiring performance stability under thermal stress.</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
