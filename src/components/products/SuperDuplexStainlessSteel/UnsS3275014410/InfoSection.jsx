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
    <div className="bg-background">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-5 md:px-12 md:py-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Information
          </h1>
          <p className="text-muted-foreground text-lg uppercase tracking-wider">
            ABOUT SUPER DUPLEX UNS S32750 | 1.4410
          </p>
        </motion.div>

        <div className="grid gap-10">
          {/* Overview Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
          >
            <div className="flex items-center gap-4 mb-6">
              <LayersIcon className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Material Overview</h3>
            </div>
            <p className="text-sm text-foreground mb-6">
              IKT maintains an extensive inventory of super duplex stainless steel plate, meeting the requirements of UNS S32750 and EN 1.4410 specifications. These materials also comply with the widely recognized 2507 grade designation.
            </p>
            <div className="bg-background border border-border rounded-xl p-6">
              <p className="text-sm font-semibold text-primary uppercase mb-2">Manufacturing & Origin</p>
              <p className="text-sm text-foreground">
                Every plate in IKT&apos;s inventory is sourced from established Western European mills and comes with full certification that conforms to the applicable material standards.
              </p>
            </div>
          </motion.div>

          {/* Quality & Standards Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
          >
            <div className="flex items-center gap-4 mb-6">
              <CircleCheckIcon className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Quality & Certification</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-primary uppercase">Advanced Testing</p>
                <p className="text-sm text-foreground">
                  Additional evaluations are carried out, including E562 microstructural examination and corrosion resistance testing per G48 or A293 Method C. Every plate in stock is procured with a guaranteed PREN value of at least 40.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-primary uppercase">Industry Standards</p>
                <p className="text-sm text-foreground">
                  All plates are manufactured and certified following NORSOK MDS D55 requirements, with thicknesses up to 35 mm certified under Revision 4. Mill test reports are accompanied by independent third-party verification per EN 10204 3.2.
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