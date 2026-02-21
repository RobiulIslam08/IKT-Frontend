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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
                        More Information
                    </h1>

                </motion.div>

                {/* Specifications Section */}
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
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Specifications</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-primary">JIS G 310/ G 3131 & JIS 3141 SPCC</p>
                                <p className="text-sm text-foreground">SS330, SS400, SS490, SS540</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-primary">ASTM</p>
                                <p className="text-sm text-foreground">ASTM A36 / A572 Gr. 42 / A572 Gr. 50</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-primary">DIN 17100</p>
                                <p className="text-sm text-foreground">DIN St 32 / St 37-2 / St 44-2 / St 50-2 / St 52-3</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-primary">EN 10025</p>
                                <p className="text-sm text-foreground">S235 JR / S275 JR / S355 JR / SS400 / ST37-2 / ST52-2</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Width Tolerance & Metal Table */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Width Tolerance */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:col-span-1"
                    >
                        <div className="mb-6 inline-block">
                            <MoveHorizontalIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Width Tolerance</h3>
                        <div className="space-y-4">
                            <div className="bg-background p-3 rounded-lg border border-border text-center">
                                <p className="text-xs text-muted-foreground uppercase">Up to 2000mm</p>
                                <p className="text-sm text-foreground">-0 / +20mm</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg border border-border text-center">
                                <p className="text-xs text-muted-foreground uppercase">Width {`>=`} 1500m</p>
                                <p className="text-sm text-foreground">-0 / +25mm</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Offered Rolled Metal Table */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:col-span-2 overflow-x-auto"
                    >
                        <div className="mb-6 inline-block">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Offered Rolled Metal</h3>
                        <table className="w-full text-left text-sm">
                            <thead className="text-foreground uppercase text-xs border-b border-border">
                                <tr>
                                    <th className="pb-3 px-2">Thickness (mm)</th>
                                    <th className="pb-3 px-2">Width (mm)</th>
                                    <th className="pb-3 px-2">Form</th>
                                    <th className="pb-3 px-2">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="py-3 px-2">1.00 - 20.00</td>
                                    <td className="py-3 px-2">1000 - 2000</td>
                                    <td className="py-3 px-2">COIL FORM</td>
                                    <td className="py-3 px-2">MILL EDGE</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2">1.00 - 20.00</td>
                                    <td className="py-3 px-2">650 - 2000</td>
                                    <td className="py-3 px-2">COIL FORM</td>
                                    <td className="py-3 px-2">MILL EDGE</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-2">1.00 - 16.00</td>
                                    <td className="py-3 px-2">1200 - 3000</td>
                                    <td className="py-3 px-2">SHEET</td>
                                    <td className="py-3 px-2">2400-600 CUT TO LENGTH</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;