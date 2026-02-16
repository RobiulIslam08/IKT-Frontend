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
            CARELSO HIC PREMIUM+
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
                The Technical Background
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
           When steel comes into contact with water containing hydrogen sulfide (H2S), a corrosive reaction occurs that generates hydrogen at the material's surface. In these "sour service" environments, H2S acts as a catalyst that not only inhibits the formation of hydrogen gas—preventing it from escaping—but also actively promotes the absorption of hydrogen atoms into the steel structure. At typical operational temperatures below 200°C, these trapped hydrogen atoms can lead to severe embrittlement and, eventually, catastrophic cracking.
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
          CarElso HIC Premium+
            </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-2">
   IKT provides high-performance H2S-resistant pressure vessel steel plates produced by Industeel (an ArcelorMittal Group subsidiary), a global leader in advanced technology carbon and alloy steels. To simplify the procurement process for critical projects, Industeel has optimized its offering under the flagship brand CarElso HIC Premium+. This product is specifically engineered to meet the most demanding "sour service" requirements in the global energy sector.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
For the final fabrication of pressure equipment, proper Post Weld Heat Treatment (PWHT) is essential. CarElso HIC Premium+ is typically manufactured as C-Mn normalized pressure vessel grades (standardized to ASTM A516 / ASME SA516). To achieve optimal mechanical properties, hardness levels, and maximum H2S resistance, we recommend a PWHT range of 595°C to 610°C.
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
             Key Features of CarElso HIC Premium+

            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CarElso HIC Premium+: The Gold Standard for Sour Service
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Superior HIC Resistance: Manufactured using advanced metallurgical processes to resist cracking caused by hydrogen absorption in aqueous H2S conditions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Enhanced Weldability: A low carbon equivalent value (Ceq $\le 0.45\%$) ensures exceptional weld integrity and ease of processing during fabrication.</span>
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
