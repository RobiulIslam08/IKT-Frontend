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
            ASME SA516 / ASTM A516   Gr. 65
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
                Standard specification for carbon steel pressure vessel plates, optimized for moderate and lower-temperature service environments.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                IKT maintains one of the most extensive inventories of ASME SA516 Gr. 65 and ASTM A516 Gr. 65 plates, including specialized HIC-resistant (Hydrogen Induced Cracking) variants. As a core part of our portfolio, these grades are optimized for pressure vessel applications in moderate to lower-temperature environments. To meet diverse engineering requirements, we offer normalized material (indicated by "N") and metric-certified units (indicated by "M").
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
              ASME SA516 Gr. 65 / ASTM A516 Gr. 65 Specification            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Technical Compliance: While the chemical and mechanical requirements of A516 / SA516 are straightforward, project complexities often arise from supplementary end-user specifications. IKT specializes in navigating these requirements, supplying Grade 65 plates that strictly adhere to the most stringent international and custom industry standards.
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
              ASME SA20 / ASTM A20
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
         ASTM/ASME A516 Gr. 65 specifications are typically governed by the general requirements of SA20 / A20. To meet specialized project needs, IKT stocks plates pre-configured with numerous supplementary requirements (such as S2 Product Analysis, S3 Simulated PWHT, and S5 Charpy V-Notch Testing). All additional controls and examinations are strictly documented on the manufacturer’s material test certificate (MTC) provided with every delivery.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
