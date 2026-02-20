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
        <div className="min-h-screen bg-background">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="px-6 py-16 md:px-12 md:py-24"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        More Information
                    </h1>
                    <p className="text-muted-foreground text-lg uppercase tracking-wider">
                        BRITISH, EUROPEAN AND JAPANESE CHANNELS
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* British (PFC) Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">BRITISH (PFC)</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Grades</p>
                                <div className="flex flex-wrap gap-2">
                                    {['EN10025', 'S275JR', 'S355JR', 'JO', 'J2'].map((g) => (
                                        <span key={g} className="bg-background border border-border px-3 py-1 rounded text-sm">{g}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Sizes</p>
                                <p className="text-lg font-medium text-foreground">100 X 50 TO 430 X 100</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* European Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">EUROPEAN</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Grades</p>
                                <div className="flex flex-wrap gap-2">
                                    {['EN10025', 'S275JR', 'S355JR'].map((g) => (
                                        <span key={g} className="bg-background border border-border px-3 py-1 rounded text-sm">{g}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Sizes</p>
                                <ul className="space-y-2 text-foreground">
                                    <li><span className="font-bold text-primary mr-2">UPN:</span> 50 X 38 TO 400 X 110</li>
                                    <li><span className="font-bold text-primary mr-2">UPE:</span> 80 X 40 TO 400 X 115</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Japanese (JIS) Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">JAPANESE (JIS)</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Grades</p>
                                <span className="bg-background border border-border px-3 py-1 rounded text-sm inline-block">JIS G3101 SS400</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Sizes</p>
                                <p className="text-lg font-medium text-foreground">40 X 20 TO 380 X 100</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;