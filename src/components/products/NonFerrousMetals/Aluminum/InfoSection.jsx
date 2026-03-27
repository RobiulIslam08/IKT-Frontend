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
                        ALUMINUM
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Overview Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Supplier Overview</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is one of the growing and High-Quality Aluminium Suppliers in KSA in various forms of Aluminium Alloy. We also supply Marine Grade Aluminum Plates. We are the distributors of Non-Ferrous Metal in KSA.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Aluminium Alloy in KSA is the most widely used non-ferrous metal in engineering owing to their attractive properties, such as high strength-to-weight ratio, good ductility, good corrosion resistance, availability, and low cost. In Super-cold temperatures alloy is generally one of the toughest metals, making it useful to handle very low-temperature metals.
                        </p>
                    </motion.div>

                    {/* Applications & Grades Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Applications and Grades</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            Extrusion profiles are used for architectural structures and decor, catering equipment, cladding, construction, door sections, display equipment, electronics, furniture, general engineering, machine building, shipping, and marine industry.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Main Alloys</p>
                                <p className="text-sm text-foreground">
                                    The main alloys used within most industries are the Grades (6063 and 6061), of which we stock every profile. We stock Special grade profiles or get them sourced on special orders.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Available Grades</p>
                                <div className="flex flex-wrap gap-2">
                                    {['6061', '6082', '707', '6063', '1100 H14', '1050 H14', '5083'].map((grade) => (
                                        <div key={grade} className="bg-background border border-border rounded-lg px-3 py-1 text-center">
                                            <span className="text-sm text-foreground">{grade}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stock Range Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Leading Stockist Range</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            We are the leading stockist of Non-Ferrous Metal in the KSA. Our comprehensive inventory includes the following products:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {[
                                'Sheets', 'Marine Grade Sheets', 'Chequered Sheets', 'Round Bar', 
                                'Flat Bars', 'Square Bars', 'Hex Bars', 'Angles Bars', 
                                'Round Tubes', 'Square Tubes', 'Rectangular Tubes', 'Perforated Sheet'
                            ].map((product) => (
                                <div key={product} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                                    <span className="text-sm text-foreground">{product}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;