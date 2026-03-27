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
                        BRASS
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Material Overview Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Material Characteristics</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is one of the Top Brass Suppliers in KSA and a source of Non-Ferrous Metal in KSA. Brass is a mixture of Copper and Zinc, making it one of the most commonly used metals in the world. It has high malleability and a low melting point, which makes it easy to machine or form for a wide variety of purposes.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            The physical properties of brass make it ideal for industrial, automotive, and architectural ventures. Flat bars are frequently used to line marble flooring and for ornamental purposes due to their structural flexibility. Above all, we stock Special grade profiles and offer sourcing for special orders.
                        </p>
                    </motion.div>

                    {/* Stock Range & Grades Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Stock and Specifications</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Inventory</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        'Sheets', 'Round Bars', 'Flat Bars', 'Square Bars', 
                                        'Hex Bars', 'Shims', 'Sheet(MKM)', 'Tube', 'Pipe'
                                    ].map((item) => (
                                        <div key={item} className="bg-background border border-border rounded-lg px-3 py-2">
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Brass Grades</p>
                                <div className="space-y-3">
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">CuZn39Pb3 / CZ121</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Standard: BS2874</span>
                                    </div>
                                    <div className="bg-background border border-border rounded-lg px-4 py-3">
                                        <span className="text-sm text-foreground block font-medium">C2720</span>
                                        <span className="text-xs text-muted-foreground uppercase mt-1">Industrial Grade</span>
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