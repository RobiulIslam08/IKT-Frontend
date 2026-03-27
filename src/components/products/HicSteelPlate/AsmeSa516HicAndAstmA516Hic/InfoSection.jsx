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
            bosmhadow: '0 20px 25px -5px rgba(6, 175, 207, 0.15)',
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
                        ASME-ASTM SA516-A516 GR-70
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* HIC Plates Overview Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">HIC Resistant Steel Overview</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT holds an extensive stock range of hydrogen induced crack resistant steel plates (HIC plates). As an Industeel-authorised stock supplier of CarElso HIC Premium+, we maintain plate stocks from 6 mm to 180 mm thick based in the KSA/UAE.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-background  p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Available Specifications</p>
                                <ul className="text-sm text-foreground grid grid-cols-2 gap-1">
                                    <li>• ASME SA516 Gr 60/65/70</li>
                                    <li>• ASTM A516 Gr 60/65/70</li>
                                </ul>
                            </div>
                            <div className="bg-background  p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Stock Advantage</p>
                                <p className="text-sm text-foreground">Off the shelf and ready to use, meeting world-wide HIC standards without additional testing delays.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Manufacturing Philosophy Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Manufactured – Not Just Tested</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            CarElso HIC Premium+ is produced with the sole intention of being HIC resistant. Unlike "ordinary" plates that are simply tested, our plates guarantee consistent HIC-resistant properties throughout every millimetre of thickness and every square metre of area, ensuring fitness for critical applications.
                        </p>
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
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Chemical Properties</h3>
                            <div className="space-y-3 text-sm text-foreground">
                                <p>• Max Ceq: 0.41% (≤ 50mm) | 0.43% (&gt; 50mm)</p>
                                <p>• Max S 0.001%, P 0.008%, Nb 0.015%, V 0.005%, O 0.002%</p>
                                <p>• Fully killed, vacuum degassed, fine grain electric arc furnace steel.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Mechanical & NDT</h3>
                            <div className="space-y-3 text-sm text-foreground">
                                <p>• Ultrasonic testing (NDT) as per SA 578 level C.</p>
                                <p>• Charpy Impact tested at -51°C and -46°C.</p>
                                <p>• HIC tests performed after simulated PWHT at 610°C.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Supply & Processing Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Supply & Processing</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Normalized at 920°C. Material surface shot blasted to SA 2.5 with low-stress die stamping and continuous brand marking on edges.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-background  p-4 text-center">
                                <p className="text-sm font-bold text-primary">Plasma Cutting</p>
                                <p className="text-sm text-foreground">16m x 4m High Def</p>
                            </div>
                            <div className="bg-background  p-4 text-center">
                                <p className="text-sm font-bold text-primary">Oxy/Propane</p>
                                <p className="text-sm text-foreground">50m x 6m</p>
                            </div>
                            <div className="bg-background  p-4 text-center">
                                <p className="text-sm font-bold text-primary">Fabrication</p>
                                <p className="text-sm text-foreground">Rolling & Dished Ends</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;