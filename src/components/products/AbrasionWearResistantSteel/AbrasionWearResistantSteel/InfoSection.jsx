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
            ABRASION & WEAR RESISTANT STEEL
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
                Selection Guide: Choosing the Right Abrasion-Resistant Plate              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Selecting the optimal wear plate is a balance between durability and fabrication efficiency. Abrasion-resistant (AR) plates are typically identified by their Brinell Hardness (HBW)—a direct measurement of their resistance to surface deformation
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
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                This refined English version positions IKT as a premium supplier by highlighting your partnership with top-tier European manufacturers and the specific performance of the Quard brand:

                Premium Inventory: Quard Abrasion-Resistant Plates           </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
                IKT is a proud stockist of Quard abrasion-resistant plates, manufactured by NLMK Clabecq. Quard is globally recognized for its superior flatness and surface finish, rivaling other proprietary brands such as Fora, Raex, and Xar.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg ">
                By sourcing exclusively from Western European steel producers, we ensure that our clients receive plates with high chemical purity and consistent through-thickness hardness. Our Quard inventory is available in 400, 450, and 500 Brinell hardness levels to meet the diverse needs of heavy-duty industrial applications.
              </p>
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
              Technical Support & Specialized Solutions
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
               Fabrication & Service Expertise:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Precision Welding: Guidelines on low-hydrogen consumables and thermal management to prevent cracking.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Advanced Machining: Tooling and speed recommendations for high-Brinell materials.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Cold Forming: Advice on minimum bend radii to maintain material integrity without fracturing.</span>
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
