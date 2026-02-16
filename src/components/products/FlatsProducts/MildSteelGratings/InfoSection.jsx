/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, BoxIcon, CircleCheckIcon, LayoutGridIcon } from 'lucide-react';

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
        <div className="min-h-screen bg-background text-foreground">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="px-6 py-16 md:px-12 md:py-24"
            >
                <motion.div variants={itemVariants} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        More Information
                    </h1>
                    <p className="text-primary font-bold text-lg tracking-widest uppercase">
                        MILD STEEL GRATINGS
                    </p>
                </motion.div>

                {/* Gratings Main Specs Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Type Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 cursor-default"
                    >
                        <div className="mb-6 inline-block">
                            <LayersIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Available Type</h3>
                        <p className="text-muted-foreground text-lg">
                            Plain or Serrated
                        </p>
                    </motion.div>

                    {/* Panel Size Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 cursor-default"
                    >
                        <div className="mb-6 inline-block">
                            <BoxIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Panel Size</h3>
                        <p className="text-muted-foreground text-lg font-mono">
                            1m x 6m
                        </p>
                    </motion.div>

                    {/* Specifications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 cursor-default"
                    >
                        <div className="mb-6 inline-block">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Specifications</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The load bearing bar confirms to the grade <span className="text-foreground font-semibold">ASTM 36, S275JR</span> or equivalent grade.
                        </p>
                    </motion.div>
                </div>

                {/* Additional Visual/Layout Section */}
                <motion.div
                    variants={cardVariants}
                    className="bg-card border border-border rounded-2xl p-8 md:p-10"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <LayoutGridIcon className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold">Structural Grades</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {['ASTM 36', 'S275JR', 'Equivalent Grade'].map((grade) => (
                            <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                <span className="text-sm font-medium text-foreground">{grade}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;