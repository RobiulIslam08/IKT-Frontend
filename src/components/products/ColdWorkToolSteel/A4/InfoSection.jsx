/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Material Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            AISI A4 High Manganese Cold Work Tool Steel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Core Characteristics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Exceptional Cold Work Properties
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT supplies AISI A4, a high-quality cold work tool steel distinctly characterized by its high manganese content (1.80-2.20%). Compliant with ASTM A681-1999 and DIN EN 10083/3 standards, this alloy provides deep hardenability and immense compressive strength, making it ideal for heavy-duty coining and cold heading dies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Processing & Condition */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Heat Treatment & Hardness Profile
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Delivered in a fully annealed state (Max 250 HB) for immediate machinability, A4 steel transforms dramatically through heat treatment. Following proper hardening (950-980°C) and targeted tempering, the material yields an exceptional working hardness of 57 to 62 HRC, guaranteeing ultra-durable cutting edges for shear blades.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Extensive Form Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Bespoke Delivery Across Saudi Arabia
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  To fuel the manufacturing demands of KSA, IKT stocks A4 tool steel in an extensive array of profiles. Our inventory includes round bars, flat plates, and hexagonal bars. We offer comprehensive in-house cutting services, supplying raw material or precision ground flat stock tailored strictly to your engineering tolerances.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;