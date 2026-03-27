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
                        WEATHER RESISTANT STEEL PLATE
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Overview Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Weathering Steel for External Structures</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            As part of our commitment to the Structural Engineering sector, we have recently introduced a comprehensive range of Weathering Steel Plates. A highly effective material used for external structures.
                        </p>
                        <p className="text-sm text-foreground">
                            Weather resistant steels, also known as CorTen Steel, have properties inhibiting atmospheric corrosion. When placed in suitable environments, surface treatment of steel is not needed as the "rust" extends the life cycle of the structure and creates a protective layer against the elements.
                        </p>
                    </motion.div>

                    {/* Applications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Applications & Design</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            The use of weather resistant steels has predominantly been seen in the structural engineering sector, popular in bridge work applications, Intermodal Containers, Sheet Piling and Rail Wagons.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-6">
                            <p className="text-sm font-semibold text-primary uppercase mb-3">Aesthetic Use</p>
                            <p className="text-sm text-foreground">
                                There has been an increase in use as an aesthetic material in both construction and design work. This is due to the materials minimal maintenance demands and its subtle colour changes over time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Properties Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Technical Properties</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Dimensions</p>
                                    <p className="text-sm text-foreground">Thickness: 2mm to 60mm</p>
                                    <p className="text-sm text-foreground">Length: Up to 12000mm (others on request)</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Specifications</p>
                                    <p className="text-sm text-foreground">EN10025 S355J2W+N and EN10025 S355K2W+N</p>
                                    <p className="text-sm text-foreground">CE Marked and 3.1 Certified</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Advanced Features</p>
                                    <p className="text-sm text-foreground">Restricted Sulphur for EN10164 Z35 properties.</p>
                                    <p className="text-sm text-foreground">Enhanced CEV restriction for superior weldability.</p>
                                    <p className="text-sm text-foreground font-medium mt-2">Western European mill partnerships for fast turnaround.</p>
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