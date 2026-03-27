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
					<p className="text-lg font-medium text-primary">Carbon Steel — Grades, Properties & Applications</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-8">
					<motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col md:flex-row gap-6 items-start">
							<motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
								<LayersIcon className="w-8 h-8 text-primary shrink-0" />
							</motion.div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Technical Insights: Carbon Steel</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									Carbon steel is an iron-carbon alloy with up to 2.1% carbon content, making it one of the most widely used engineering materials globally. IKT supplies low-carbon (mild), medium-carbon, and high-carbon grades to suit a vast range of manufacturing, structural, and tooling applications. The carbon content directly governs the steel's hardness, strength, and ductility, enabling precise material selection for each application.
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
									Carbon steel exhibits excellent tensile strength, good machinability, and reliable weldability — especially in the lower carbon ranges. Medium and high-carbon grades respond superbly to heat treatment, enabling exceptional hardness for tooling and wear-resistant applications. IKT recommends carbon steel for projects demanding robust performance with cost efficiency, including structural frames, mechanical components, and precision-machined parts.
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
									IKT maintains a comprehensive stock of carbon steel across all major international standards including ASTM, EN, BS, and DIN. Available forms include round bars, flat bars, square bars, hexagons, plates, sheets, and structural sections in a wide range of sizes and tolerances. Whether your requirement is for normalized, annealed, or as-rolled condition, IKT guarantees prompt supply and competitive pricing.
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
