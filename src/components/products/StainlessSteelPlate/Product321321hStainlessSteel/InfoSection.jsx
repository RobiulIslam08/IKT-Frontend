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

    const sectors = ['Chemical Industry', 'Oil and Gas', 'Storage Tanks', 'Aviation & Aerospace'];

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
                        Grade 321 / 321H Stainless Steel
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        A specialized 300 series austenitic grade titanium-stabilized for service in elevated temperature environments up to <strong className="text-primary text-lg">900°C</strong>. It offers superior resistance to scaling and intergranular corrosion compared to standard 304/316 grades.
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {sectors.map((sector) => (
                                <div key={sector} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{sector}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Technical Table Card */}
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
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default overflow-hidden"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Grade Reference</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="py-3 px-4 text-xs font-bold text-primary uppercase">Grade</th>
                                        <th className="py-3 px-4 text-xs font-bold text-primary uppercase">EN Steel Number</th>
                                        <th className="py-3 px-4 text-xs font-bold text-primary uppercase">UNS</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground text-sm">
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 px-4 font-semibold text-foreground">321</td>
                                        <td className="py-3 px-4">1.4878</td>
                                        <td className="py-3 px-4">S32100</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-semibold text-foreground">321H</td>
                                        <td className="py-3 px-4">1.4541</td>
                                        <td className="py-3 px-4">S32109</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Properties Grid */}
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Titanium Stabilization</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The primary differentiator is Titanium content (Ti = 5 x C%), which acts as a stabilizing element. This allows the material to operate reliably in high temperature ranges without compromising structural integrity.
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">321H Advantage</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            With a higher carbon content (0.05%), 321H provides superior creep resistance and higher strength performance in environments exceeding 530°C.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Stock Size Card - Stock Style */}
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
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Stock Size Availability</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-background border border-border rounded-lg p-6">
                                <p className="text-xs font-bold text-primary uppercase mb-1">Thickness Range</p>
                                <p className="text-2xl font-bold text-foreground">6mm to 50mm</p>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-6">
                                <p className="text-xs font-bold text-primary uppercase mb-1">Max Plate Dimensions</p>
                                <p className="text-2xl font-bold text-foreground">12m x 2.5m</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;