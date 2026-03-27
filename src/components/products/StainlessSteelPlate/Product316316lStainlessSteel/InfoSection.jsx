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

    const sectors = ['Brewing', 'Chemical Industry', 'Dairy', 'Food Processing', 'Marine Equipment', 'Petrochemicals', 'Pharmaceuticals'];

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
                    <p className="text-muted-foreground text-lg mb-8 uppercase tracking-wider">
                        Grade 316 / 316L | UNS S31600 / S31603 | 1.4401 / 1.4404
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        Often referred to as <strong className="text-primary">"Marine Grade"</strong> stainless steel, Type 316/316L includes 2-3% Molybdenum to enhance resistance to chloride corrosion, making it perfect for salt water and harsh chemical environments.
                    </p>
                </motion.div>

                {/* Industrial Sectors Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-12"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <LayersIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Typical Industrial Sectors</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {sectors.map((sector) => (
                                <div key={sector} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{sector}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Technical Comparison Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <FileTextIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Why 316?</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Includes Molybdenum for specific forms of corrosion prevention. It offers good cryogenic toughness and excellent formability, making it the second most regularly specified stainless steel after Type 304.
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
                            className="mb-6 inline-block"
                        >
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">The 316L Advantage</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            A lower Carbon variant that offers improved weldability and reduces the risk of sensitization around welded areas, ensuring maximum longevity in fabricated components.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Utilization & Stock Section - Stock Style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Stock & Processing</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Our stainless steel stock is made up of large area plate sizes (up to <strong className="text-foreground">12,000 mm x 3,000 mm</strong>).
                            This allows for the best possible plate utilization and minimizes scrap for our customers.
                        </p>
                        <div className="bg-background border border-primary/20 rounded-xl p-6">
                            <p className="text-sm text-muted-foreground ">
                                "Save time and money with our in-house computer controlled high definition plasma cutting. Most customers prefer our ready cut-to-size items for precision and cost-efficiency."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;