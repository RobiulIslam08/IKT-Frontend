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

    const grades = ['EN 10025- S275 JR/JO/J2', 'S355JR/JO/J2', 'A572 GR-50'];

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
                   
                    <p className="text-primary font-medium text-lg mb-8 ">
                        Universal Beams-British Sections
                    </p>
                </motion.div>

                {/* Steel Grades Section */}
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
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Grades</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Our Universal Beams (British Sections) are available in the following high-grade specifications:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {grades.map((grade) => (
                                <div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center flex items-center justify-center">
                                    <span className="text-sm text-foreground">{grade}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Designation Section */}
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
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 inline-block"
                        >
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Designation</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-background border border-primary/20 rounded-xl px-6 py-4 flex flex-col justify-center">
                                <span className="text-xs text-muted-foreground uppercase mb-1">UB Range</span>
                                <p className="text-lg md:text-xl font-semibold text-primary">
                                    UB 127 X 76 to 1016 X 305
                                </p>
                            </div>
                            <div className="bg-background border border-primary/20 rounded-xl px-6 py-4 flex flex-col justify-center">
                                <span className="text-xs text-muted-foreground uppercase mb-1">UC Range</span>
                                <p className="text-lg md:text-xl font-semibold text-primary">
                                    UC 152 X 152 TO 356 X 406
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;