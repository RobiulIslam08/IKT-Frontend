/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, FileTextIcon, CircleCheckIcon } from 'lucide-react';

export function InfoSection() {
    const productHighlights = [
        {
            brand: 'HARDOX',
            title: 'Hardox 450 Abrasion Resistant Steel Plate (Hardox 450 & 500Tuf)',
            description:
                'HARDOX 450 is an abrasion resistant plate with a hardness of 450 HBW, intended for applications where demands are imposed on abrasion resistance in combination with good cold bending properties. HARDOX 450 offers very good weldability.',
        },
        {
            brand: 'SIDUR',
            title: 'Abrasion Wear Resistant Steel Plate (SIDUR 450 & 500)',
            description:
                'SIDUR is a highly wear-resistant steel of extreme hardness, strength, and toughness. This makes it durable and suitable for difficult environments where abrasion is caused by contact with hard minerals and other abrasive materials. SIDUR 450 heavy plates are produced in the hardness range of 420-470 HB.',
        },
        {
            brand: 'SIJ Acroni',
            title: 'PROTAC 500 Armored Steel Plate',
            description:
                'PROTAC 500 is a high-strength and high-hardness steel used for armour applications. It has excellent workshop properties for welding and bending due to a unique balance of high strength, elongation, and impact toughness, even at low operating temperatures. Armour components made of PROTAC 500 meet STANAG 4569 AEP55, VPAM PM 2007, and other ballistic standards.',
        },
        {
            brand: 'Perdur',
            title: 'Perdur 400 & 450 HBW',
            description:
                'Perdur steels from ThyssenKrupp are wear resistant steels with excellent workability and exceptionally high toughness. Perdur stands for performance and durability with particularly pronounced wear resistance, with hardness options of 400 and 450 HBW.',
        },
        {
            brand: 'DEEMEX',
            title: 'DEEMEX 110 Hard-Facing Plate',
            description:
                'Hard-faced or overlaid plate includes chromium carbide grades with outstanding resistance to abrasion, erosion, and low-to-average impact at ambient and elevated temperatures. In many severe abrasion environments, chromium carbide alloys are an economical solution with Rockwell hardness 60-64 HRC.',
        },
        {
            brand: 'COR-TEN B',
            title: 'High-Performance Weathering Steel',
            description:
                'With anti-corrosive properties, COR-TEN minimizes maintenance and corrosion-prevention treatment, reducing lifecycle cost. The reduced need for paint and solvents also makes it an environmentally friendly choice. Typical applications include structural components for buildings, transmission poles, bridges, and similar projects.',
        },
    ];

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
                        ABRASION RESISTANT STEEL
                    </p>
                </motion.div>

                <div className="grid gap-10">
                    {/* Overview and Specifications Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <LayersIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Material Overview</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            Abrasion and wear resistant steels are selected to extend service life where sliding wear, impact, and mineral abrasion are critical. The grades below cover high-hardness wear plate, hard-facing overlay plate, armour plate, and weathering steel options.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ul className="space-y-2 text-sm text-foreground">
                                <li>Hardness coverage from 400 HBW up to hard-facing 60-64 HRC</li>
                                <li>Strong blend of wear resistance, weldability, and workshop formability</li>
                                <li>Options available for both abrasion-heavy and corrosion-prone environments</li>
                            </ul>
                            <div className="bg-background border border-border rounded-xl p-4">
                                <p className="text-sm font-semibold text-primary uppercase mb-2">Included Product Families</p>
                                <p className="text-sm text-foreground">Wear plate: HARDOX, SIDUR, Perdur</p>
                                <p className="text-sm text-foreground">Armour plate: PROTAC 500</p>
                                <p className="text-sm text-foreground">Overlay plate: DEEMEX 110</p>
                                <p className="text-sm text-foreground">Weathering steel: COR-TEN B</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Explanation Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <FileTextIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Material Data Provided</h3>
                        </div>
                        <div className="grid gap-4">
                            {productHighlights.map((item) => (
                                <div key={item.brand} className="bg-background border border-border rounded-xl p-5">
                                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{item.brand}</p>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-sm text-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits and Industries Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <CircleCheckIcon className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Benefits and Uses</h3>
                        </div>
                        <p className="text-sm text-foreground mb-6">
                            These grades are ideal where abrasion, impact, ballistic resistance, or atmospheric corrosion performance are required in fabricated steel structures and equipment.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                'Mining and quarrying',
                                'Earthmoving/excavation',
                                'Agriculture',
                                'Process industries',
                                'Construction and demolition',
                                'Armoured vehicle and protective structure fabrication',
                                'Bridges and transmission infrastructure',
                            ].map((industry) => (
                                <div key={industry} className="bg-background border border-border rounded-lg p-4">
                                    <p className="text-sm text-foreground">{industry}</p>
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