/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, FileTextIcon, CircleCheckIcon, MoveHorizontalIcon } from 'lucide-react';

export function InfoSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
                viewport={{ once: true, amount: 0.1 }}
                className="px-6 py-16 md:px-12 md:py-24 max-w-7xl mx-auto"
            >
                {/* Header Section */}
                <motion.div variants={cardVariants} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 ">
                        More Information
                    </h1>

                    <p className="text-primary font-bold text-lg tracking-wider uppercase">
                        COLD ROLLED SHEET & COIL
                    </p>
                </motion.div>

                {/* Top Info Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 cursor-default"
                    >
                        <FileTextIcon className="w-10 h-10 text-primary mb-6" />
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>High-quality materials engineered for demanding industrial applications. Our products meet international standards and offer superior performance across various industries.</p>
                            <p>We maintain strict quality control throughout the manufacturing process to ensure consistency and reliability. Each product undergoes rigorous testing.</p>
                            <p>Our extensive inventory ensures quick delivery times for your projects. Contact us for custom requirements.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 cursor-default"
                    >
                        <LayersIcon className="w-10 h-10 text-primary mb-6" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            IKT stocks large-format materials ensuring optimal utilization and minimal waste. By leveraging our high-definition plasma cutting technology, we deliver cost-effective, precision-cut components. Additionally, our large plate sizes allow for full-scale fabrications, helping customers reduce costs by minimizing the need for extensive welding.
                        </p>
                    </motion.div>
                </div>

                {/* Specs and Coils Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Specifications */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 lg:col-span-2"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold">Specifications & Grades</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-bold text-primary uppercase mb-4 tracking-widest">Dimensions</h4>
                                <ul className="space-y-3 text-foreground text-sm">
                                    <li className="flex items-center gap-2 italic"> 4′ x 8′ (0.5mm to 2.0mm)</li>
                                    <li className="flex items-center gap-2 italic"> 4'X16′ (0.5mm to 1.5mm)</li>
                                    <li className="flex items-center gap-2 italic"> 5'X20′ (0.5mm to 1.5mm)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-primary uppercase mb-4 tracking-widest">Available Grades</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['S235JR', 'S275JR', 'ASTM A36', 'SS400'].map((g) => (
                                        <span key={g} className="bg-background border border-border px-3 py-1 rounded-md text-sm text-foreground">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cold Rolled Coils */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8"
                    >
                        <MoveHorizontalIcon className="w-8 h-8 text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-6">Cold Rolled Coils</h3>
                        <div className="space-y-6">
                            <div className="bg-background p-4 rounded-xl border border-border">
                                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Grade</p>
                                <p className="text-sm text-foreground">Gost 1050-88/08KP</p>
                            </div>
                            <div className="bg-background p-4 rounded-xl border border-border">
                                <p className="text-xs text-muted-foreground uppercase font-bold mb-1">Thickness Range</p>
                                <p className="text-sm text-foreground">0.6MM TO 2MM</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Table Section */}
                <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                    <div className="p-8 border-b border-border bg-muted/30">
                        <h3 className="text-2xl font-bold ">Product Sizes & Grades Matrix</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-background">
                                <tr>
                                    <th className="py-4 px-8 text-foreground font-bold uppercase text-xs tracking-widest">Size/Width</th>
                                    <th className="py-4 px-8 text-foreground font-bold uppercase text-xs tracking-widest">Thickness</th>
                                    <th className="py-4 px-8 text-foreground font-bold uppercase text-xs tracking-widest">Grade</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { size: '12MM X 19MM', thickness: '0.5MM TO 2MM', grade: 'KP08/ST12.03' },
                                    { size: '1219 X 2438MM', thickness: '0.5MM TO 2MM', grade: 'KP08/ST12.03' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-primary/5 transition-colors">
                                        <td className="py-5 px-8 text-foreground text-sm">{row.size}</td>
                                        <td className="py-5 px-8 text-foreground text-sm">{row.thickness}</td>
                                        <td className="py-5 px-8 text-foreground  text-sm">{row.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;