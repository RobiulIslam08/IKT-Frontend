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
                        EPOXY COATED REBAR
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
                            <h3 className="text-2xl font-bold text-foreground">Service Overview</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            IKT supply epoxy coated rebars complying with ASTM A 775, with diameters ranging between 8mm and 40mm. Epoxy coated rebar products are supplied from Jeddah and Dammam.
                        </p>
                        <p className="text-sm text-foreground">
                            In line with the goals of Vision 2030 which are embodied in Saudi Aramco's IKTVA program, IKT procures the majority of black rebar from local producers within KSA.
                        </p>
                    </motion.div>

                    {/* Manufacturing Process Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Manufacturing Process</h3>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">A. Surface Preparation</p>
                                <p className="text-sm text-foreground">
                                    The reinforcing bar is carried to a blasting unit to remove all surface contaminants, mill scales and oxidized layers. It also roughens the surface to give it a textured anchor profile.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">B. Coating</p>
                                <p className="text-sm text-foreground mb-4">
                                    After the reinforcement bars are blasted and pre-heated, they pass through a powder spray booth. Electrically charged particles are attracted to the grounded bar. When the dry powder hits the hot bar, it melts and flows into the anchor profile.
                                </p>
                                <p className="text-sm text-foreground">
                                    Numerous automated and batch based quality tests are performed to ensure that coating thickness and continuity meets ASTM A775 standard and Saudi Aramco guidelines.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">C. Curing</p>
                                <p className="text-sm text-foreground">
                                    Following the application of the powder, the coating is allowed to cure for a short period of approximately 30 seconds to harden into solid form, followed by a water quench.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Specifications and Sizes Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Product Details</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Specifications</p>
                                <ul className="space-y-2 text-sm text-foreground">
                                    <li>ASTM A 615 – Grade 60</li>
                                    <li>ASTM A 615 – Grade 75</li>
                                    <li>ASTM A 706 – Grade 60 (Seismic)</li>
                                    <li>BS: 4449: 2005 Grade 500B</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Product Sizes</p>
                                <p className="text-sm text-foreground mb-4">
                                    From Jeddah and Dammam are capable of epoxy coating diameters from 8mm to 40mm.
                                </p>
                                <p className="text-sm text-foreground">
                                    For special requests for higher thicknesses, please contact our commercial team so that the issue can be studied on an individual basis.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;