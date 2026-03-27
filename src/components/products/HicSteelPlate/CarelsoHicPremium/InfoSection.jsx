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
                        CarElso HIC Premium+
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
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Authorized Supply & Offer</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is an Industeel-authorized supplier of CarElso HIC Premium+. We hold a complete range of plates specifically manufactured for resistance to Hydrogen Induced Cracking (HIC), with stocks from 6 mm to 180 mm thick based in the KSA/UAE.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background  p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Compliance</p>
                                <p className="text-sm text-foreground">Saudi Aramco 01-SAMSS-016, Shell MESC 74/125, Petrobras N1706, AXENS IN-43.</p>
                            </div>
                            <div className="bg-background  p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-1">Global Standards</p>
                                <p className="text-sm text-foreground">Meets NACE MR0175, MR0103, and ISO 15156-2 requirements.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Background & Features */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Technical Optimization</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Steel Features</p>
                                <ul className="space-y-2 text-sm text-foreground">
                                    <li>• Low Sulphur (S ≤ 0.001%) &amp; Oxygen (O &lt; 0.0015%)</li>
                                    <li>• Phosphorus control (P ≤ 0.008%)</li>
                                    <li>• Controlled chemical composition (CEq 0.38 to 0.45)</li>
                                    <li>• Very low inclusion content</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">H2S Resistance</p>
                                <p className="text-sm text-foreground leading-relaxed">
                                    Specifically developed to counter Hydrogen Induced Cracking (HIC) and Sulphide Stress Cracking (SSC). Proper chemistry and microstructure prevent hydrogen trapping at temperatures below 200 degrees Celsius.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Properties & Conditions */}
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
                                <p>• Normalized at 920°C with SA 2.5 shot blasting.</p>
                                <p>• Ultrasonic testing control as per SA 578 level C.</p>
                                <p>• Charpy impact tests at -51°C and -46°C based on thickness.</p>
                            </div>
                        </motion.div>

                        {/* Processing & Apps */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Applications</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground">
                                <span>• Pressure Vessels</span>
                                <span><span>• Heat Exchangers</span></span>
                                <span>• Line Pipe</span>
                                <span>• Dished Ends</span>
                                <span>• Condensers</span>
                                <span>• Valves & Filters</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Final Processing Info */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Processing Capabilities</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 text-center text-sm text-foreground">
                            <div className="bg-background  p-4">
                                <p className="font-bold text-primary mb-1">High Definition Plasma</p>
                                <p>16m x 4m</p>
                            </div>
                            <div className="bg-background  p-4">
                                <p className="font-bold text-primary mb-1">Oxy/Propane</p>
                                <p>50m x 6m</p>
                            </div>
                            <div className="bg-background  p-4">
                                <p className="font-bold text-primary mb-1">PWHT Range</p>
                                <p>595 to 610 degrees Celcius</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;