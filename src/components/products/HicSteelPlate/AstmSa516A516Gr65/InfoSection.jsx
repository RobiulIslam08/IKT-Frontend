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
                        ASTM SA516-A516 GR-65
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Authorized Supply Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Supply and Distribution</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT holds an extensive stock range of hydrogen induced crack resistant steel plates (HIC plates). We are an Industeel-authorised stock supplier of CarElso HIC Premium+, manufactured by Industeel (Arcelor Mittal). Our plate stocks range from 6 mm to 180 mm thick, based in the KSA/UAE.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Global Compatibility</p>
                                <p className="text-sm text-foreground">Compatibility with global HIC specifications ensures plates are off the shelf and ready to use without additional testing.</p>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Origin</p>
                                <p className="text-sm text-foreground">Manufactured by Industeel specifically for critical oil and gas applications.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quality Assurance Card */}
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
                            CarElso HIC Premium+ is produced with the sole intention of being HIC resistant. Unlike "ordinary" plates where only test pieces are verified, our plates maintain the same properties throughout every millimetre of thickness and every square metre of area.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                'ASME SA516 Gr 60', 'ASME SA516 Gr 65', 'ASME SA516 Gr 70',
                                'ASTM A516 Gr 60', 'ASTM A516 Gr 65', 'ASTM A516 Gr 70'
                            ].map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Specifications Grid */}
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
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Material Properties</h3>
                            <div className="space-y-4 text-sm text-foreground">
                                <div>
                                    <p className="font-semibold text-primary uppercase mb-1">Mechanical</p>
                                    <p>HIC tests after simulated PWHT at 610°C. Charpy impact tested at -51°C (≤25mm) and -46°C (&gt;25mm).</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary uppercase mb-1">Chemical</p>
                                    <p>Max Ceq 0.41% - 0.43%. Fully killed, vacuum degassed, fine grain electric arc furnace steel.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Supply Conditions</h3>
                            <div className="space-y-4 text-sm text-foreground">
                                <p>Normalized 920°C. Surface shot blasted to SA 2.5 with low-stress die stamping and identification paint markings.</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-background border border-border p-2 rounded text-center text-xs">NDT: SA 578 Level C</div>
                                    <div className="bg-background border border-border p-2 rounded text-center text-xs">Plasma: 16m x 4m</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Processing Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">In-House Processing</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div className="p-4">
                                <p className="text-sm font-bold text-primary mb-1">High Def Plasma</p>
                                <p className="text-sm text-muted-foreground">16m x 4m Capacity</p>
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-bold text-primary mb-1">Oxy/Propane</p>
                                <p className="text-sm text-muted-foreground">50m x 6m Capacity</p>
                            </div>
                            <div className="p-4">
                                <p className="text-sm font-bold text-primary mb-1">Fabrication</p>
                                <p className="text-sm text-muted-foreground">Rolling & Dished Ends</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;