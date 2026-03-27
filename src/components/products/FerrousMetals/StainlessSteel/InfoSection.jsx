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
                        STAINLESS STEEL
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Global Sourcing & Quality Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Global Quality Standards</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is one of the best-quality Stainless Steel Suppliers in KSA. We import material from world-class suppliers in India, Taiwan, Europe, and China to ensure our clients receive the highest grade products. We specialize in Nickel-based Stainless Steel, spanning the 300 and 400 series.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Our inventory serves the entire Middle East, providing a full range of pipes, fittings, perforated sheets, and wire meshes. We stock comprehensive solutions in 304, 316L, 410, and 420 grades.
                        </p>
                    </motion.div>

                    {/* Applications Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Specialized Applications</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Our specialized 304 and 316L extrusion profiles and sheets are utilized across diverse industries including:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                'Transportation & Exhaust', 'Ship & Road Tankers', 'Oil & Chemical Process', 
                                'Subsea Pipelines', 'Medical Instruments', 'Architecture & Cladding', 
                                'Aerospace Fittings', 'Pressure Vessels', 'Industrial Fasteners'
                            ].map((app) => (
                                <div key={app} className="bg-background border border-border rounded-lg px-4 py-2">
                                    <span className="text-sm text-foreground">{app}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Inventory & Grades Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Stockist Details</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Product Range</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        'Round Bars', 'Hex Bars', 'Square Bars', 'Flat Bars', 
                                        'Angle Bars', 'Perforated Sheets', 'Wire Mesh', 'Shims', 'SMLS & ERW'
                                    ].map((item) => (
                                        <div key={item} className="bg-background border border-border rounded-lg px-3 py-2">
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Stainless Steel Grades</p>
                                <div className="space-y-3">
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">304 / 316 / 302-Shim</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Austenitic Grades</span>
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">410 / 420 (Q&T) / 17-4PH</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Martensitic & PH Grades</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;