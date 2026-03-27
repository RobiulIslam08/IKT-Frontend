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
                {/* Header Section */}
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        More Information
                    </h1>
                    <p className="text-muted-foreground text-lg uppercase tracking-wider">
                        DIE & TOOL STEEL
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Material Properties Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Material Overview</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is among one of the fastest-growing Die & Tool Steel Suppliers in KSA. These carbon alloy steels are specifically matched for manufacturing hand or machine dies. Key properties include exceptional hardness, resistance to abrasion, and the ability to retain shape at increased temperatures.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Typically used in a heat-treated condition to provide maximum hardness, our material is imported from elite global suppliers in Turkey, Ukraine, Belgium, and China to ensure the highest standards for our clients across the Middle East.
                        </p>
                    </motion.div>

                    {/* Classifications & Stock Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Classifications & Stock</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Hardening Types</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Water Hardening', 'Air Hardening', 'Oil Hardening', 'D Type', 'Shock-resisting', 'Hot-Working', 'Cold-Working'].map((type) => (
                                        <div key={type} className="bg-background border border-border rounded-lg px-3 py-2 text-center">
                                            <span className="text-sm text-foreground">{type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Profiles</p>
                                <div className="space-y-2">
                                    <div className="bg-background border border-border rounded-lg px-4 py-3 flex justify-between items-center">
                                        <span className="text-sm text-foreground">Round Bars</span>
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3 flex justify-between items-center">
                                        <span className="text-sm text-foreground">Flat Bars</span>
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3 flex justify-between items-center">
                                        <span className="text-sm text-foreground">Plates</span>
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Grades Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Steel Grades</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-background  p-6">
                                <p className="text-sm font-semibold text-primary uppercase mb-3">D2 | D3 | HCHCR</p>
                                <p className="text-sm text-foreground mb-1">DIN: 1.2379 | 1.2080</p>
                                <p className="text-xs text-muted-foreground">Round Bar & Flat Bar</p>
                            </div>
                            <div className="bg-background  p-6">
                                <p className="text-sm font-semibold text-primary uppercase mb-3">H13</p>
                                <p className="text-sm text-foreground mb-1">DIN: 1.2344</p>
                                <p className="text-xs text-muted-foreground">Round Bar Specialist</p>
                            </div>
                            <div className="bg-background  p-6">
                                <p className="text-sm font-semibold text-primary uppercase mb-3">P20</p>
                                <p className="text-sm text-foreground mb-1">1.2311 | 1.2312 | 1.2316 | 1.2738</p>
                                <p className="text-xs text-muted-foreground">Round Bar & Plate</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;