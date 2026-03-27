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

    const equalWidths = ['20 mm', '25 mm', '30 mm', '40 mm', '45 mm', '50 mm', '60 mm', '70 mm', '75 mm', '80 mm', '100 mm', '120 mm', '150 mm','180mm', '200mm','220mm','250mm','300mm'];
    const unEqualWidths = ['30 mm', '40 mm', '45 mm',  '50 mm', '60 mm','65 mm', '70 mm', '75 mm', '80 mm', '90 mm', '100 mm', '120 mm', '120 mm','1250mm', '130mm','135mm','150mm','200mm'];

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
                        EQUAL, UNEQUAL AND T- ANGLE
                    </p>
                </motion.div>

                <div className="grid gap-12">
                    {/* Equal Angle Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Equal Angle</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2 ">What is hot rolled mild steel equal angle and what is it used for?</h4>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    Equal angle sections are widely used for general fabrication work, frame making, automotive applications, and in the construction industries.
                                    Equal angle has a 90° angle in the centre of the profile and both sides having equal width.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Widths</p>
                                <div className="flex flex-wrap gap-2">
                                    {equalWidths.map((w) => (
                                        <span key={w} className="bg-background border border-border px-3 py-1 rounded text-sm text-foreground">{w}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 bg-background/50 p-6 rounded-xl border border-border/50">
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase mb-2">Grades</p>
                                    <p className="text-sm text-foreground">A36/A572 GR-50/A992/S275JR/S235JR/S355JR/J2/JIS G 3101 SS 400/CS350W
 (Mill Finish)</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase mb-2">Properties</p>
                                    <p className="text-sm text-foreground">Excellent weldability and machining properties.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Unequal Angle Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Unequal Angle</h3>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-foreground mb-2 ">What is hot rolled mild steel unequal angle and what is it used for?</h4>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Unequal angle sections have a 90° angle as with standard equal angle, however, the width of the sides are not the same—the corner does not lay central to the profile, it is essentially an L shape.
                                This profile is perfect for use in projects where asymmetrical support or specialized framing is required.
                            </p>
                                 <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Widths</p>
                                <div className="flex flex-wrap gap-2">
                                    {unEqualWidths.map((w) => (
                                        <span key={w} className="bg-background border border-border px-3 py-1 rounded text-sm text-foreground">{w}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 bg-background/50 p-6 rounded-xl border border-border/50">
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase mb-2">Grades</p>
                                    <p className="text-sm text-foreground">A36/A572 GR-50/A992/S275JR/S235JR/S355JR/J2/JIS G 3101 SS 400/CS350W
 (Mill Finish)</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase mb-2">Properties</p>
                                    <p className="text-sm text-foreground">Excellent weldability and machining properties.</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                                <span className="text-primary font-medium text-sm">L-Shape Structural Profile</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;