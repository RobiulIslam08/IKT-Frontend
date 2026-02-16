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
            WEATHER RESISTANT STEEL PLATE
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
                The Strategic Advantages of Weathering Steel              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Weathering Steel is the definitive choice for projects that demand a fusion of raw industrial strength and organic aesthetic evolution. IKT provides this material as a high-performance alternative to traditional structural steel, offering significant benefits across the entire lifecycle of a project.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Advanced Atmospheric Shielding Through a specialized chemical composition, this steel develops a self-passivating, rust-like patina. This stable oxide layer acts as a permanent barrier against further oxygen and moisture penetration, ensuring superior performance in exposed environments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Optimized Lifecycle Economy By eliminating the requirement for industrial painting and recurring surface treatments, weathering steel dramatically lowers the Total Cost of Ownership (TCO). This makes it the most cost-effective solution for structures where maintenance access is difficult or expensive.</span>
                  </li>

                </ul>
              </div>
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
              High-Integrity Processing
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              Our weathering steel is not only defined by its chemical composition but also by its mechanical reliability. For critical structural joints, our plates offer:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Enhanced Through-Thickness Properties: Engineered to resist lamellar tearing in high-restraint welded joints (Z35 tested).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Bespoke Profiling: High-precision laser, plasma, and oxy-fuel cutting for complex architectural shapes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Surface Readiness: Plates can be supplied in specific surface conditions to ensure uniform patina development across the structure.</span>
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
              Quality Assurance & Certified Global Standards
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With our extensive industrial expertise, IKT has established itself as a reliable partner in the global steel distribution network. By maintaining strategic alliances with premier European plate mills, we ensure a seamless supply chain characterized by rapid delivery cycles and unwavering material consistency.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>ISO 9001: Quality Management Our commitment to precision ensures that all products and services consistently meet customer requirements and international regulatory standards.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>ISO 14001: Environmental Management We integrate sustainable practices into our logistics and processing to minimize our environmental footprint and promote industrial ecology.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>ISO 45001: Occupational Health & Safety The safety of our workforce and partners is paramount. We maintain rigorous safety protocols to ensure a zero-harm operational environment.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Full Traceability Every plate in our inventory is supplied with authentic 3.1 or 3.2 Material Test Certificates (MTC), ensuring complete chemical and mechanical transparency</span>
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
