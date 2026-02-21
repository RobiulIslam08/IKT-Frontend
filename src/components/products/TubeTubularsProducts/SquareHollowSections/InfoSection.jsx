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
                {/* Header Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        More Information
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 uppercase tracking-wider">
                        SQUARE HOLLOW SECTIONS
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        Our Square Hollow Sections (SHS) provide a high strength-to-weight ratio, making them an ideal choice for structural, industrial, and mechanical applications.
                    </p>
                </motion.div>

                {/* Technical Specifications Card (Follows your specific design) */}
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
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Steel Grades</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Our SHS profiles are manufactured to meet the following international standards and grades:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                'ASTM A500 Gr. A/B/C',
                                'EN10219 & EN 10210',
                                'S275JR',
                                'S355 JRH / J0H / J2H',
                                'STKR 400'
                            ].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Designation Section (Matches your Stock Section style) */}
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
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Designation</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            We offer a comprehensive range of sizes to meet diverse project requirements, ranging from <strong>19X19 to 500X500</strong>.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;