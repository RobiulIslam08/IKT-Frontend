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
                        BALLISTIC ARMOR PLATES
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
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Armor Plate Material</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            IKT’s stock of steel plates is aimed primarily at the market for armouring civilian vehicles and is used to strengthen door panels and other vulnerable components. This type of steel has been specifically developed to provide human protection through its ability to withstand the impact of projectiles.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Tested to EN1522, MIL-A 46100D and STANAG 4569
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Hardness from 320 – 420 HB
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Thickness available up to 130mm
                                </li>
                            </ul>
                            <div className="bg-background border border-border rounded-xl p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-2">Primary Users</p>
                                <p className="text-sm text-foreground">Diplomats, aid agencies, and medical teams operating in some of the world’s most dangerous environments, as well as cash-in-transit and military vehicles.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Miilux Protection */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">About Miilux Protection</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            Miilux Protection is an established brand of protection steel produced by Miilux Oy in Finland. IKT works closely with them and is proud to have been selected as the Miilux exclusive distributor of Protection plate throughout the Middle East and much of South East Asia.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-6">
                            <p className="text-sm font-semibold text-primary uppercase mb-3">Certification & Integrity</p>
                            <p className="text-sm text-foreground">
                                Protection 500 plates meet the protection standards of most international authorities including EN1522, MIL-A 46100D, and STANAG 4569. All plates sold by IKT are supplied with material test certificates and ballistic test reports.
                            </p>
                        </div>
                    </motion.div>

                    {/* Specifications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Specifications & Grades</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-2 border-l-2 border-primary pl-4">
                                <p className="text-sm font-bold text-foreground">Miilux Protection 380</p>
                                <p className="text-sm text-muted-foreground">Hardness: 320 – 370HB</p>
                                <p className="text-sm text-muted-foreground">Thickness: 6mm to 25mm</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-primary pl-4">
                                <p className="text-sm font-bold text-foreground">Miilux Protection 400</p>
                                <p className="text-sm text-muted-foreground">Hardness: 360 – 420HB</p>
                                <p className="text-sm text-muted-foreground">Thickness: 5mm to 40mm</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-primary pl-4">
                                <p className="text-sm font-bold text-foreground">Miilux Protection 450</p>
                                <p className="text-sm text-muted-foreground">Hardness: 420 – 480HB</p>
                                <p className="text-sm text-muted-foreground">Thickness: 5mm to 40mm</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-primary pl-4">
                                <p className="text-sm font-bold text-foreground">Miilux Protection 500</p>
                                <p className="text-sm text-muted-foreground">Hardness: 480 – 540HB</p>
                                <p className="text-sm text-muted-foreground">Thickness: 2.5mm to 40mm</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-primary pl-4">
                                <p className="text-sm font-bold text-foreground">Miilux Protection 500T</p>
                                <p className="text-sm text-muted-foreground">Hardness: 480 – 540HB</p>
                                <p className="text-sm text-muted-foreground">Thickness: 2.5mm to 40mm</p>
                            </div>
                        </div>
                        <p className="text-sm text-foreground mt-8 text-center bg-background py-3 rounded-lg border border-border">
                            Plate formats for all grades of Miilux Protection are available up to 6100 x 2500 mm.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;