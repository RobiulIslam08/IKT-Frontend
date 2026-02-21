/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, BoxIcon, CircleCheckIcon, ShipIcon, FlameIcon } from 'lucide-react';

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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        hover: {
            y: -8,
            boxShadow: '0 20px 25px -5px rgba(6, 175, 207, 0.15)',
            transition: { duration: 0.3 },
        },
    };

    const grades = [
        { title: 'Commercial', items: ['ST 37-2', 'A36', 'SS400', 'S275JR'], icon: <LayersIcon className="w-6 h-6 text-primary" /> },
        { title: 'High Grade', items: ['S355JR/JO/J2K2', 'A572 GR-50'], icon: <CircleCheckIcon className="w-6 h-6 text-primary" /> },
        { title: 'Shipbuilding', items: ['ABS GR-A', 'EH36', 'AH36', 'DH 36'], icon: <ShipIcon className="w-6 h-6 text-primary" /> },
        { title: 'Boiler Quality', items: ['ASTM/ASME', 'SA516 GR-60/65/70'], icon: <FlameIcon className="w-6 h-6 text-primary" /> },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="px-6 py-16 md:px-12 md:py-24"
            >
                <motion.div variants={cardVariants} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">More Information</h1>
                    <p className="text-primary font-bold text-lg tracking-widest uppercase">HOT ROLLED PLATES</p>
                </motion.div>

                {/* Grades Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {grades.map((grade, index) => (
                        <motion.div key={index} variants={cardVariants} whileHover="hover" className="bg-card border border-border rounded-2xl p-6">
                            <div className="mb-4">{grade.icon}</div>
                            <h4 className="font-bold text-lg mb-3">{grade.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {grade.items.map((item) => (
                                    <span key={item} className="text-sm bg-background px-2 py-1 rounded border border-border text-foreground">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sizes and Specifications Table */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Sizes Card */}
                    <motion.div variants={cardVariants} className="bg-card border border-border rounded-2xl p-8 lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <BoxIcon className="w-6 h-6 text-primary" /> Available Sizes
                        </h3>
                        <div className="space-y-4 text-sm text-foreground">
                            <p className="flex justify-between border-b border-border pb-2"><span>4’ x 8’</span> <span className="text-foreground">16mm to 250mm</span></p>
                            <p className="flex justify-between border-b border-border pb-2"><span>1.5m x 6m</span> <span className="text-foreground">16mm to 50mm</span></p>
                            <p className="flex justify-between border-b border-border pb-2"><span>2m x 6m/12m</span> <span className="text-foreground">5mm to 100mm</span></p>
                            <p className="flex justify-between border-b border-border pb-2"><span>2.5m x 8m/12m</span> <span className="text-foreground">6mm to 50mm</span></p>
                            <p className="flex justify-between border-b border-border pb-2"><span>3.05m x 12m</span> <span className="text-foreground">6mm to 50mm</span></p>
                        </div>
                    </motion.div>

                    {/* Standard/Grade Table */}
                    <motion.div variants={cardVariants} className="bg-card border border-border rounded-2xl p-8 lg:col-span-2 overflow-x-auto">
                        <h3 className="text-xl font-bold mb-6 ">Standards & Heat Treatment</h3>
                        <table className="w-full text-left text-xs md:text-sm">
                            <thead className="text-foreground uppercase border-b border-border">
                                <tr>
                                    <th className="pb-3 px-2">Standard</th>
                                    <th className="pb-3 px-2">Grade</th>
                                    <th className="pb-3 px-2">Heat Treatment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr><td className="py-3 px-2">EN10025</td><td className="py-3 px-2">S235JR / S275JR / S355JR</td><td className="py-3 px-2">AR / N / TMCP</td></tr>
                                <tr><td className="py-3 px-2">ASTM</td><td className="py-3 px-2">A36 / A283 GRC / A572 GR-C</td><td className="py-3 px-2">AR / N / TMCP</td></tr>
                                <tr><td className="py-3 px-2">ASTM A131</td><td className="py-3 px-2">Ordinary & Higher Strength (AH, DH, EH)</td><td className="py-3 px-2">3.2 Class Approved</td></tr>
                                <tr><td className="py-3 px-2">JIS G3101</td><td className="py-3 px-2">SS330 / SS400 / SS490</td><td className="py-3 px-2">AR</td></tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default InfoSection;