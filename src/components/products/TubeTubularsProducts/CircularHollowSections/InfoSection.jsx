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
                        CIRCULAR HOLLOW SECTIONS & PIPES
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        Our circular hollow sections and high-grade pipes are designed for maximum structural performance, 
                        offering durability for mechanical, plumbing, and construction sectors.
                    </p>
                </motion.div>

                {/* Circular Hollow Sections Card */}
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
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Circular Hollow Sections</h3>
                        <p className="text-sm font-semibold text-primary uppercase mb-4 tracking-widest">Available Grades</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                'ASTM A500 Gr. A/B',
                                'EN10219 & EN10255',
                                'JRH / J0H / J2H',
                                'ASTM A53 Gr. A/B'
                            ].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm font-medium text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Pipes Detailed Sections - Following Shot Blasting/Customer Based Grid style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    {/* Mild Steel ERW Pipe */}
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Mild Steel ERW Pipe</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p><strong className="text-foreground">Class:</strong> A, B, C, A-1 SCH-20, 40</p>
                            <p><strong className="text-foreground">Grade:</strong> ASTM A500 / A53 / GR-A / B / BS 1387</p>
                            <p><strong className="text-foreground">Size:</strong> 1/2" TO 24"</p>
                        </div>
                    </motion.div>

                    {/* Galvanized ERW Pipes */}
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Galvanized ERW Pipes</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p><strong className="text-foreground">Class:</strong> A, B, A-1, SCH-40, 80</p>
                            <p><strong className="text-foreground">Grade:</strong> ASTM A500 / 53 GR-A / B BS 1387</p>
                            <p><strong className="text-foreground">Size:</strong> 1/2" TO 24"</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Seamless Pipe Section - Large Footer Style */}
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
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.15 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block"
                            >
                                <LayersIcon className="w-10 h-10 text-primary" />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Seamless Pipe</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground block mb-1">Class:</strong> 
                                        A, B, C, A-1 SCH-20, 40, XS, 80, 100, 120, 160
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground block mb-1">Grade:</strong> 
                                        API 5L / ASTM A53 / 106 / GR-A / B
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground block mb-1">Size:</strong> 
                                        1/2" TO 36"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;