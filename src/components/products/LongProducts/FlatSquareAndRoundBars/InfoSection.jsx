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

    const barData = [
        {
            title: "SQUARE BARS",
            icon: <LayersIcon className="w-10 h-10 text-primary" />,
            grades: "ASTM A36 / EN10025 S275JR, S355 / JIS G3101 SS400",
            designation: "8mm To 10mm"
        },
        {
            title: "ROUND BARS",
            icon: <CircleCheckIcon className="w-10 h-10 text-primary" />,
            grades: "ASTM A36 / EN10025 S275, S355 / JIS G3101 SS400",
            designation: "6mm To 100mm"
        },
        {
            title: "FLAT BARS",
            icon: <FileTextIcon className="w-10 h-10 text-primary" />,
            grades: "S275 JR, ASTM A36, SS400",
            designation: "13 x 13mm To 300 x 400mm"
        }
    ];

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
                        FLAT, SQUARE AND ROUND BARS
                    </p>
                </motion.div>

                {/* Bars Grid Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {barData.map((bar, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 cursor-default flex flex-col"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6"
                            >
                                {bar.icon}
                            </motion.div>

                            <h3 className="text-2xl font-bold text-foreground mb-6">{bar.title}</h3>

                            <div className="space-y-6 mt-auto">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Grades</p>
                                    <p className="text-sm text-foreground leading-relaxed">
                                        {bar.grades}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/50">
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Designation</p>
                                    <p className="text-sm text-foreground">
                                        {bar.designation}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;