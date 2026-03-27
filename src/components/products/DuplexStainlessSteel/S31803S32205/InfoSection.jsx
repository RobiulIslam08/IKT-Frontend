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
                        STAINLESS STEEL PLATE
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
                            <h3 className="text-2xl font-bold text-foreground">Duplex Stainless Steel</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            IKT stocks a wide range of large area duplex stainless steel plates which are certified to material grades UNS S31803, UNS S32205, and 1.4462. These steels are also compatible with the branded 2205 designation.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-6">
                            <p className="text-sm font-semibold text-primary uppercase mb-2">Manufacturing & Origin</p>
                            <p className="text-sm text-foreground">
                                All IKT stock is manufactured by Western European steel makers and fully certified in accordance with the relevant material specification.
                            </p>
                        </div>
                    </motion.div>

                    {/* Testing and Quality Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Quality Assurance</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Enhanced Testing</p>
                                <p className="text-sm text-foreground">
                                    Material is enhanced with further tests such as E562 microstructure analysis, and corrosion testing to G48 or A293 Method C. All stock is purchased with a guaranteed minimum PREN of 35.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary uppercase mb-3">Certifications</p>
                                <p className="text-sm text-foreground">
                                    Produced and certified in accordance with NORSOK MDS D45. Plates up to 35 mm thick are certified to Revision 4. Mill test certificates include third party inspection to EN 10204 3.2.
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