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
                        CARBON & ALLOY STEEL
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Carbon Steel Overview */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Carbon Steel Categories</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-8">
                            IKT is one of the leading Carbon & Alloy Steel Suppliers in KSA. Our material is imported from elite global suppliers in India, Turkey, Italy, and China to ensure top-tier quality for our Middle Eastern clients.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Low Carbon (Mild)</p>
                                <p className="text-sm text-foreground">Contains 0.04% to 0.30% carbon. Highly versatile, covering everything from flat sheets to structural beams with excellent formability.</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Medium Carbon</p>
                                <p className="text-sm text-foreground">Range of 0.31% to 0.60% carbon. Stronger than mild steel, often hardened and tempered using specialized heat treatments.</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">High Carbon</p>
                                <p className="text-sm text-foreground">Known as carbon tool steel (0.61% to 1.50%). Extremely hard and brittle once heat treated, ideal for high-strength tools.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Alloy Steel & Sourcing */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Alloy Steel & Services</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Alloy steel features elements like manganese, nickel, and chromium to produce specific mechanical properties. These are the workhorses of the industry due to their economical cost and superior response to heat treatments.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Round Bars (Bright & Hot-rolled)', 'Square Bars', 'Flat Bars', 
                                'Hex Bars', 'Hollow Tubes', 'Heavy Plates'
                            ].map((product) => (
                                <div key={product} className="bg-background border border-border rounded-lg px-4 py-3">
                                    <span className="text-sm text-foreground">{product}</span>
                                </div>
                            ))}
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
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Technical Specifications</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-primary uppercase">Carbon Grades</p>
                                <p className="text-sm text-foreground leading-relaxed">EN8, C20, C22, C35, C40, C45, C60</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-primary uppercase">Alloy Grades</p>
                                <p className="text-sm text-foreground leading-relaxed">EN19, 8.8, B-7, 4140, 4140 Q&T, EN24, 10.9, 4340, 4340 Q&T</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-primary uppercase">Structural Grades</p>
                                <p className="text-sm text-foreground leading-relaxed">ST52, S355JR (Available for Round Bars)</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-primary uppercase">Wear Resistance</p>
                                <p className="text-sm text-foreground leading-relaxed">Hardox 400, 450, 500, 600 Series</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;