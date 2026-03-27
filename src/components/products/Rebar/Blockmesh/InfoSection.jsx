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
                        BLOCKMESH
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
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Material Overview</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            IKT Blockmesh is the ideal reinforcement for masonry block or clay walls. It is manufactured from cold drawn steel wire (plain or deformed) which conforms to Saudi, British, German, and American standard specifications.
                        </p>
                        <p className="text-sm text-foreground">
                            The wires are Cold Drawn to comply with the strength requirements to BS4482 and ASTM A82, A496. Hot dipped galvanized to BS 443, BS729 and ASTM A 123, A153. It may also be manufactured from Pre-Galvanized wire to BS443 and ASTM A641 if required.
                        </p>
                    </motion.div>

                    {/* Standard Sizes Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Standard Sizes</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Wire Size</p>
                                    <p className="text-sm text-foreground">Cold Drawn : 3.75 mm - 5.0 mm</p>
                                    <p className="text-sm text-foreground">Plain & Deformed Galvanized : 3.0mm – 4.5mm</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Sheet Dimensions</p>
                                    <p className="text-sm text-foreground">Sheet length 2.0 meters – 6.0 meters</p>
                                    <p className="text-sm text-foreground">Standard stock sheet length 3.2m, special length on request</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-primary uppercase mb-2">Spacing & Width</p>
                                    <p className="text-sm text-foreground">Sheet width 50mm - 250mm (in increments of 25mm)</p>
                                    <p className="text-sm text-foreground">Cross wire spacing 50mm – 400mm (in increments of 50mm)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Strength & Benefits Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Strength & Benefits</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            A brick or masonry block wall reinforced with IKT Blockmesh will withstand considerable horizontal pressure from either side. The use of IKT Blockmesh reinforcing helps to:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm text-foreground">Combat wind effects</p>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm text-foreground">Withstand the loading of material against the wall</p>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm text-foreground">Control shrinkage, thermal and settlement effects</p>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4">
                                <p className="text-sm text-foreground">Enable the wall to span across openings</p>
                            </div>
                        </div>
                        <p className="text-sm text-foreground mt-6">
                            IKT Blockmesh enables strength to be used with maximum efficiency, locating the wires for minimum specified cover from the face of the wall, concentrating reinforcement where it is needed most.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;