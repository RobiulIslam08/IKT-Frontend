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
                        EUROPEAN & JAPANESE SECTIONS (HEA, HEB, IPE, I-BEAM, H-BEAM)
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* European Sections */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">European Sections</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Grades</p>
                                <p className="text-sm text-foreground">
                                    A36/A572 GR-50/A992/S275JR/S235JR/S355JR/J2/JIS G 3101 SS 400/CS350W
 (Mill Finish)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Size Ranges</p>
                                <ul className="grid grid-cols-1 gap-3">
                                    {['HEA 100 TO 1000', 'HEB 100 TO 1000', 'IPE 100 TO 750', 'IPEAA 80 TO 200', 'IPN 80 TO 400'].map((size) => (
                                        <li key={size} className="flex items-center gap-3 text-foreground bg-background/50 p-2 rounded-lg border border-border/40">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {size}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Japanese Sections */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Japanese Sections</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Grades</p>
                                <p className="text-sm text-foreground">
                                    A36/A572 GR-50/A992/S275JR/S235JR/S355JR/J2/JIS G 3101 SS 400/CS350W
 (Mill Finish)
                                </p>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Size Ranges</p>
                                <div className="space-y-4">
                                    <div className="bg-background/50 p-4 rounded-xl border border-border/40">
                                        <p className="text-xs text-primary font-bold uppercase mb-1">I BEAMS</p>
                                        <p className="text-sm text-foreground">100 x 50 to 900 x 300</p>
                                    </div>
                                    <div className="bg-background/50 p-4 rounded-xl border border-border/40">
                                        <p className="text-xs text-primary font-bold uppercase mb-1">H BEAMS</p>
                                        <p className="text-sm text-foreground">100 X 400 X 400</p>
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