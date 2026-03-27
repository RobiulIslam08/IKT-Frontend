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
            EN 10207 P265S
          </p>
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
              Product Details
            </h3>
        <p className='text-muted-foreground leading-relaxed text-base md:text-lg mb-2'>EN 10207 P265S Technical Profile: The EN 10207 European standard defines the rigorous specifications for steel utilized in simple pressure vessels—specifically welded containers engineered to withstand internal pressures exceeding 0.5 bar for air or nitrogen storage. As a key grade within this standard, P265S boasts a minimum yield strength of 265 MPa (265 N/mm²).</p>
        <p className='text-muted-foreground leading-relaxed text-base md:text-lg '>Material Condition & Performance: This high-strength steel plate is engineered with certified mechanical properties for elevated temperature service. To ensure optimal grain structure and material integrity, IKT supplies these plates in a normalized condition (or an equivalent state achieved through controlled normalized rolling), meeting the highest safety and performance benchmarks for non-fired pressure applications.</p>
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
              Key Advantages
            </h3>
            <div className="space-y-4 text-muted-foreground">
             
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Superior Yield Strength: Guaranteed 265 MPa minimum yield, providing the structural backbone for high-performance pressure equipment.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Precision Fabrication: Engineered for excellent weldability and formability, reducing fabrication complexity and ensuring airtight reliability.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Thermal Stability: Certified mechanical properties for elevated temperature service, ensuring safety in fluctuating operational environments.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ready-to-Ship Inventory: IKT maintains a deep stock of certified plates, eliminating lead times and keeping your project on schedule.</span>
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
