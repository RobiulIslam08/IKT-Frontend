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
                        RECTANGULAR HOLLOW SECTIONS
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        Our Rectangular Hollow Sections (RHS) are widely used in mechanical and structural applications, providing the perfect balance between strength and functionality.
                    </p>
                </motion.div>

                {/* Steel Grades Section - Following your provided structure */}
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
                            Our RHS profiles are available in high-quality standards to ensure maximum durability:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                'ASTM A500 Gr. A/B/C',
                                'EN10219 & EN 10210',
                                'S275JR',
                                'S355 JRH / JOH / J2H',
                                'STKR 400'
                            ].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Designation Section - Following your Stock/CircleCheckIcon style */}
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
                            We supply Rectangular Hollow Sections in a broad spectrum of sizes, ranging from <strong>40X20 to 500X300</strong>, suitable for various engineering needs.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;