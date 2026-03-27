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
                        COPPER
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Industry & Efficiency Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Industry Overview</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is one of the Top Copper Suppliers in KSA. Copper is among the most widely used metals globally, with 65% of total production dedicated to the Electrical industry and 25% to Construction.
                        </p>
                        <div className="bg-background border border-border rounded-lg px-4 py-3">
                            <p className="text-sm font-semibold text-primary uppercase mb-1">Electrical Performance</p>
                            <p className="text-sm text-foreground">
                                As the most effective conductor behind silver, copper transformers are 99.75% efficient. It is highly corrosion resistant, ductile, and malleable.
                            </p>
                        </div>
                    </motion.div>

                    {/* Applications Grid */}
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
                            <div className="flex items-center gap-4 mb-4">
                                <CircleCheckIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Core Applications</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Used extensively in electronic connectors, circuit boards, panel boards, switch gears, micro-chips, semi-conductors, and electromagnets. It is also vital for vacuum tubes, welding electrodes, fire sprinklers, and heat sinks.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <FileTextIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Supply Strategy</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We import material strictly from various regions to ensure the best quality at competitive prices. We stock standard and special grade profiles, with custom sourcing available for specific project needs.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Stock and Grades Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Inventory & Grades</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Products</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        'Tubes & Pipes', 'Tin Plated Bus Bars', 'Rods', 
                                        'Flat Bars', 'Sheets (MKM Germany)', 'Square Bars', 'Shims'
                                    ].map((item) => (
                                        <div key={item} className="bg-background border border-border rounded-lg px-3 py-2">
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Copper Grades</p>
                                <div className="space-y-3">
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">ETP (Electrolytic Tough Pitch)</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">High Conductivity</span>
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">C110</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Commercial Grade</span>
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