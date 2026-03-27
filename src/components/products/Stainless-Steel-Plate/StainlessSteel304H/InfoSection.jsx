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
                    <p className="text-muted-foreground text-lg mb-8 uppercase tracking-wider">
                        Steel Grade 304H | UNS S30409 | 1.4948
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        A recent addition to our stainless steel range, IKT 304H plates are a modification of standard 304 grades with a higher Carbon content (0.04-0.10%), engineered for service in elevated temperature environments.
                    </p>
                </motion.div>

                {/* Key Features Section - Single Large Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-12"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <LayersIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Exclusive Advantages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Western European origin with hot rolled 1D mill finish.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Dual certified to ASTM/ASME A/SA 304/304H.</span>
                                </li>
                            </ul>
                            <div className="bg-background border border-primary/20 rounded-xl p-6">
                                <p className="text-sm text-foreground ">
                                    "We are the only stockist in the KSA to keep this grade in plate form, following our success in major Oil & Gas refinery projects."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Technical Properties Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <FileTextIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Strength & Durability</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Higher carbon content compared to 304/304L results in significantly increased tensile and yield strength, ideal for high-heat performance.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Weldability</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            A fully weldable material under conventional procedures that responds exceptionally well to precision machining despite its tough austenitic nature.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Size Range Section - Large Stock Style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Available Size Range</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { label: 'Plate Thickness', value: '5mm to 35mm' },
                                { label: 'Max Plate Width', value: 'Up to 2500mm' },
                                { label: 'Max Plate Length', value: 'Up to 12000mm' }
                            ].map((item) => (
                                <div key={item.label} className="bg-background border border-border rounded-lg px-4 py-6 text-center">
                                    <p className="text-xs font-bold text-primary uppercase mb-2">{item.label}</p>
                                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;