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
                        SUPER DUPLEX UNS S32760 | 1.4501
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Quality and Testing Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Technical Assessment</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            The Super Duplex UNS S32760 alloy undergoes rigorous evaluation including microstructure analysis via E562 and specialized corrosion testing according to A293 Method C or G48 protocols.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-6">
                            <p className="text-sm font-semibold text-primary uppercase mb-2">Corrosion Resistance</p>
                            <p className="text-sm text-foreground">
                                To ensure superior protection in harsh environments, IKT maintains a minimum guaranteed PREN of 40 for all stock, significantly exceeding the standard Duplex requirement of PREN 35.
                            </p>
                        </div>
                    </motion.div>

                    {/* Certification Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Compliance & Standards</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Industry Specification</p>
                                <p className="text-sm text-foreground">
                                    Our inventory is strictly manufactured and validated under NORSOK MDS D55 guidelines. This includes full certification to Revision 4 for plates with thicknesses up to 35 mm.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Documentation</p>
                                <p className="text-sm text-foreground">
                                    Verification is provided through mill test certificates audited by independent third-party inspections, adhering to the EN 10204 3.2 international standard.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;