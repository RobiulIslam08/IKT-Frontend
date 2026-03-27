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
                        CHROME BAR & HONED TUBES
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
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Supplier Excellence</h3>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT is one of the Top Chrome Bar Suppliers in KSA. We are widely recognized for supplying Hard Chrome Plated Bars, catering to the most demanding industrial requirements. Our inventory features high-performance components designed for durability and precision.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            We maintain a significant stock of shafts and tubes, while also offering custom sourcing for special grade profiles based on specific client orders and unique project applications.
                        </p>
                    </motion.div>

                    {/* Product Details Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {/* Piston Rods */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <CircleCheckIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Piston Rods</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Featuring hard chrome shafts with enhanced surface hardness and superior corrosion resistance. Ideal for marine hydraulic cylinders, mining equipment, road transport, chemical plants, and aerospace industries.
                            </p>
                            <div className="bg-background border border-border rounded-lg px-4 py-2">
                                <span className="text-sm font-semibold text-primary uppercase">Grade: CK45</span>
                            </div>
                        </motion.div>

                        {/* Honed Tubes */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <FileTextIcon className="w-8 h-8 text-primary" />
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Honed Tubes</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Seamless hydraulic tubes with a micro-finish and highly accurate bore sizes within H7 tolerance. This precision ensures long piston seal life and prevents cylinder failure under high working pressures.
                            </p>
                            <div className="bg-background border border-border rounded-lg px-4 py-2">
                                <span className="text-sm font-semibold text-primary uppercase">Grade: ST52</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Applications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Primary Applications</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Marine Hydraulics', 'Mining Industry', 'Civil Engineering', 
                                'Farming Machinery', 'Off-shore Industry', 'Aeronautical', 
                                'Aerospace', 'Nuclear Sector'
                            ].map((app) => (
                                <div key={app} className="bg-background border border-border rounded-lg px-4 py-2 text-center">
                                    <span className="text-sm text-foreground">{app}</span>
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