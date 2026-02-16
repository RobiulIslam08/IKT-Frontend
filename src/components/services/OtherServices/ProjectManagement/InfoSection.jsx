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
            PROJECT MANAGEMENT
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
   IKT Strategic Project Management & Global Logistics
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
           IKT provides a comprehensive project management framework led by industry veterans. Our "Single Point of Contact" strategy ensures a seamless transition from initial planning and CAD design to the final handover of certified documentation, guaranteeing absolute transparency and precision at every stage.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Sector Expertise: Extensive experience in high-consequence industries, including Nuclear, Wind Energy, and Large-Scale Storage Tank manufacturing.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>End-to-End Ownership: A dedicated project manager oversees everything from CNC file creation and profile cutting to final finishing and rigorous quality testing.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Total Traceability: We provide complete documentation packs, including full steel traceability, technical drawings, and detailed inspection reports.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Client-Centric Transparency: We offer a "hands-on" experience where clients can request real-time photo updates of their profiles during production and are welcome to visit our facility for on-site inspections.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Global Logistics Reach: Expert coordination of transportation and shipping to any location—from remote domestic sites to international destinations—ensuring all deadlines are met with professional care.</span>
              </li>
            </ul>
          </div>
        </motion.div>


      </motion.section>
    </div>
  );
}

export default InfoSection;
