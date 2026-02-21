/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, FileTextIcon, CircleCheckIcon, GridIcon } from 'lucide-react';

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
        <div className="min-h-screen bg-background text-foreground">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="px-6 py-16 md:px-12 md:py-24"
            >
                <motion.div variants={itemVariants} className="mb-16 text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        More Information
                    </h1>
                    <p className="text-primary font-bold text-lg tracking-widest uppercase">
                        MILD STEEL CHEQUERRED STEEL
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Grades Card */}
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
                        <h3 className="text-2xl font-bold mb-6">Available Grades</h3>
                        <div className="flex flex-wrap gap-4">
                            {['SS400', 'ASTM A36', 'S275 JR'].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-6 py-3 shadow-sm">
                                    <span className="text-sm text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Designation Card */}
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
                            <GridIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-6">Designation & Dimensions</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 border-b border-border pb-3 text-sm text-foreground">
                                <span className="text-foreground font-semibold min-w-[120px]">4FT X 8FT :</span>
                                1.5MTR X 6MTR X 1.6MM TO 12MM
                            </li>
                            <li className="flex items-start gap-3 border-b border-border pb-3 text-sm text-foreground">
                                <span className="text-foreground font-semibold min-w-[120px]">2M X 6MTR :</span>
                                5.0MM TO 12.0MM
                            </li>
                            <li className="flex items-start gap-3 text-sm text-foreground">
                                <span className="text-foreground font-semibold min-w-[120px]">O/P Range :</span>
                                2500 X 1250 X 3 O/P TO 2000 X 1000 X 8 O/P
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Optional Stock/Quality Footer */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/10"
                >
                    <p className="text-muted-foreground italic">
                        All Mild Steel Chequerred products are available for immediate delivery based on customer-specific requirements.
                    </p>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;