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
                        BRONZE
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Material Overview Card */}
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
                            IKT is a leading Bronze Supplier in KSA for Round Bars, Hollow Bars, and Flat Bars. We import and stock the best quality, industrial-grade articles of various specifications. Our rapid-cutting service enables you to get material to the exact length you require, saving time and costs associated with handling.
                        </p>
                        <div className="bg-background border border-border rounded-lg px-4 py-3">
                            <p className="text-sm font-semibold text-primary uppercase mb-1">Exclusive Partnership</p>
                            <p className="text-sm text-foreground">
                                We are the Sole Supplier from WISCO Espanola in KSA.
                            </p>
                        </div>
                    </motion.div>

                    {/* Product Specifics Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {/* Round Bars */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <CircleCheckIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Bronze Round Bar</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Combines excellent load capacity with good machineability. Its resistance to a broad selection of chemicals makes it suitable for diverse environments. Our team can recommend the right grade for your specific manufacturing operation.
                            </p>
                        </motion.div>

                        {/* Hollow Bars */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <FileTextIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Bronze Hollow Bar</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Drawn to produce seamless tubing with precise uniformity. Ideal for cylindrical components in military, chemical, and petrochemical industries. Its robust nature is suitable for heavy-duty vehicle manufacture, cranes, and hydraulic equipment.
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
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Inventory & Specifications</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Shapes</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Round Bars', 'Hollow Bars', 'Flat Bars', 'Square Bars'].map((item) => (
                                        <div key={item} className="bg-background border border-border rounded-lg px-3 py-2">
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Bronze Grades</p>
                                <div className="space-y-3">
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">LG2 | LG4 | RG7 | SAE 660 | C93200</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Standard Bronze</span>
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">C95400 | C95800 | C95500</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Aluminium Bronze</span>
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