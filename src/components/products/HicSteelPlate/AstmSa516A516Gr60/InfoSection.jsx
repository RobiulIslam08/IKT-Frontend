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
                        ASME SA516 & ASTM A516 HIC
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Specifications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Available Specifications</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            CarElso HIC Premium+ is produced for IKT to the following steel specifications and grades. Compatibility with global HIC specifications ensures the plate is off the shelf and ready to use without additional testing delays.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                'ASME SA516 Gr 60', 'ASME SA516 Gr 65', 'ASME SA516 Gr 70',
                                'ASTM A516 Gr 60', 'ASTM A516 Gr 65', 'ASTM A516 Gr 70'
                            ].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground ">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quality Philosophy Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Manufactured – Not Just Tested</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            It is essential to be certain that steel used in critical applications is fit for purpose. CarElso HIC Premium+ is produced with the sole intention of being HIC resistant: a plate with identical properties throughout every millimeter of thickness.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            While "ordinary" plates might pass HIC tests if specific pieces are selected, only IKT offers the certainty that the entire plate is homogeneous and specifically engineered for H2S resistance.
                        </p>
                    </motion.div>

                    {/* Technical & Processing Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {/* Chemical & Mechanical */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Properties</h3>
                            <div className="space-y-4 text-sm text-foreground">
                                <div>
                                    <p className="font-semibold text-primary uppercase mb-1">Chemical</p>
                                    <p>Max Ceq 0.41% (≤50mm) | Max S 0.001%, P 0.008%, O 0.002%</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary uppercase mb-1">Mechanical</p>
                                    <p>Charpy impact tested at -51°C and -46°C. HIC tests after simulated PWHT at 610°C.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Supply Conditions */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Supply & Processing</h3>
                            <div className="space-y-4 text-sm text-foreground">
                                <p>Normalized 920°C. Surface shot blasted to SA 2.5 with low-stress die stamping and continuous brand marks.</p>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <span className="bg-background border border-border p-2 rounded text-center">Plasma: 16m x 4m</span>
                                    <span className="bg-background border border-border p-2 rounded text-center">Oxy/Propane: 50m x 6m</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* NDT Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">NDT Specifications</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Ultrasonic testing control is performed strictly as per SA 578 level C with +75mm pitch scanning and a maximum defect area of +100mm², ensuring absolute material integrity.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;