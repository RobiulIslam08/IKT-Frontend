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
                        CUT AND BEND PRODUCTS
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Leading Supplier Info */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Service Overview</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            IKT has been a leading supplier of cut and bend products for decades. Cut and bend services done within steel service centers instead of onsite, generates considerable gains for contractors.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Cost Reductions</p>
                                <p className="text-sm text-foreground">
                                    The considerable cost reductions stemming from productivity gains through mass production in expert production facilities, leading to immensely less man hours needed on site.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Quality Gains</p>
                                <p className="text-sm text-foreground">
                                    The increased quality gains from automated machines that cannot be achieved with manual processes on the construction site.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision 2030 & IKTVA Section */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Vision 2030 & IKTVA</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            Now, with the focus of Vision 2030 and the drive led by Saudi Aramco with the crucial IKTVA program, cut and bend services are becoming even more sought after as all companies are focusing on higher efficiencies and more streamlined processes with less manpower on site.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Major Facilities</p>
                                <p className="text-sm text-foreground">IKT has 2 major facilities that serve the whole KSA market for cut and bend services.</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Standards</p>
                                <p className="text-sm text-foreground">IKT can process cut and bend products with numerous standards depending on client needs, ranging from SSA and ASTM to BS standards.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* General Guidelines Info */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">General Guidelines</h3>
                        </div>
                        <p className="text-sm text-foreground">
                            Below are some general guidelines used according to BS standards for cut and bend processing.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;