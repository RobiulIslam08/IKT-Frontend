/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { LayersIcon, Settings, PackageOpen } from 'lucide-react';

export function InfoSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
	};

	return (
		<div className="bg-gray-50 py-5 md:py-10">
			<motion.section
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
			>
				<motion.div variants={itemVariants} className="text-center md:text-left mb-8">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Material Overview</h1>
					<p className="text-lg font-medium text-primary">Alloy Steel — Enhanced Properties Through Precise Alloying</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-8">
					<motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col md:flex-row gap-6 items-start">
							<motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
								<LayersIcon className="w-8 h-8 text-primary shrink-0" />
							</motion.div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Technical Insights: Alloy Steel</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									Alloy steels are formulated by adding one or more alloying elements — including chromium, molybdenum, nickel, vanadium, tungsten, and manganese — to plain carbon steel. IKT provides a comprehensive selection of low-alloy and high-alloy steels that meet demanding mechanical and environmental performance requirements. These steels are specifically engineered to deliver properties that standard carbon steels cannot achieve alone.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col md:flex-row gap-6 items-start">
							<motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
								<Settings className="w-8 h-8 text-primary shrink-0" />
							</motion.div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Performance & Mechanical Properties</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									The strategic addition of alloying elements provides significant improvements in hardenability, tensile strength, fatigue resistance, and toughness. IKT recommends alloy steels for components subjected to impact, dynamic loading, elevated temperatures, and corrosive environments. The superior response to heat treatment makes alloy steels particularly well-suited for heavy-duty shafts, gears, pressure vessels, and structural components in demanding industries.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col md:flex-row gap-6 items-start">
							<motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
								<PackageOpen className="w-8 h-8 text-primary shrink-0" />
							</motion.div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Forms, Grades & Stock Availability</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									IKT holds extensive inventory of alloy steels across ASTM, EN, DIN, and BS standards in a variety of heat treatment conditions including annealed, normalized, quenched and tempered, and solution annealed. Supply forms include round bars, flat bars, hexagons, square bars, plates, and billets. Our team provides expert material selection guidance to ensure optimal grade choice for your application.
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
