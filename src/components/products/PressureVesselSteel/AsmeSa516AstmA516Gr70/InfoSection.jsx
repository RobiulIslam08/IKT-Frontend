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
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            More Information
          </h1>
          <p className="text-muted-foreground text-lg">
            ASME SA516 / ASTM A516   Gr. 70
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
                Properties of A516 Steel for Pressure Vessel Plate
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
               ASME SA516 / ASTM A516 Gr. 70 Specifications: IKT maintains an extensive inventory of SA516/A516 Gr. 70 plates, including specialized HIC-resistant (Hydrogen Induced Cracking) variants. These plates are engineered for maximum reliability in pressure vessel applications, offering a perfect balance of high tensile strength, superior weldability, and exceptional notch toughness for moderate to lower-temperature service.

Key Performance Features:

Strength: Optimized to withstand extreme internal pressures.

Weldability: Ideal for complex fabrications and industrial shapes.

Toughness: High resistance to crack propagation under sudden stress or impact.

Available Variations: To meet global engineering standards, our stock includes Normalized (N) material for enhanced grain structure and Metric (M) certified units for precise project requirements.
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
     ASME or ASTM?
            </h3>
         <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          ASME vs. ASTM A516 Standards: While ASME SA516 and ASTM A516 share identical mechanical and chemical properties, they differ by their governing bodies. ASTM defines the material limits and testing parameters, whereas ASME endorses these materials for use in specific design codes and pressure vessel construction. Despite its critical role in the industry, the A516/SA516 standard remains remarkably efficient, defined by five key chemical elements and three mechanical properties, requiring no mandatory heat treatment in its basic form.
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
             Additional Properties – ASME SA20 / ASTM A20
            </h3>
           <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Advanced Quality Controls (SA20 / A20): To meet the stringent demands of modern engineering, A516/SA516 plates are governed by the ASTM A20 / ASME SA20 standards. This specification ensures rigorous oversight of testing procedures, dimensional tolerances, and quality refinements. It includes seventeen supplementary requirements—such as S2 (Product Analysis), S5 (Charpy V-Notch Testing), and S8/S11/S12 (Ultrasonic Testing)—to provide enhanced material reliability.
           </p>
           <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          As a standard practice, IKT stocks Grade 70 plates pre-configured with these essential supplementary requirements. Full documentation of all additional controls and examinations is provided via the Material Test Certificate (MTC) included with every plate.
           </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default InfoSection;
