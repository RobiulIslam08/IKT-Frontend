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
					<p className="text-lg font-medium text-primary">EN Standards — European Norm Certified Materials from IKT</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-8">
					<motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex flex-col md:flex-row gap-6 items-start">
							<motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
								<LayersIcon className="w-8 h-8 text-primary shrink-0" />
							</motion.div>
							<div className="flex-1">
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Technical Insights: EN Standards Compliance</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									European Norm (EN) standards define strict requirements for chemical composition, mechanical properties, dimensional tolerances, and test methods for a broad spectrum of metallic materials. IKT is fully equipped to supply EN-compliant materials spanning nickel alloys (EN 10095, EN 10168), heat-resistant steels, stainless steels (EN 10088), pressure vessel steels (EN 10028), and structural steels (EN 10025). Every material is supplied with full traceability and mill test certificates.
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
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Quality Assurance & Certification</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									All EN-certified materials supplied by IKT are sourced from approved mills with documented quality management systems. Our rigorous inspection process covers chemical analysis, mechanical testing, dimensional verification, and surface inspection. We provide EN 10204 3.1 and 3.2 mill test certificates on request, ensuring full compliance for regulated industries including oil and gas, petrochemical, aerospace, power generation, and marine engineering.
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
								<h2 className="text-2xl font-bold text-gray-900 mb-3">Product Range & Availability</h2>
								<p className="text-base font-medium text-gray-700 leading-relaxed">
									IKT stocks an extensive range of EN-standard materials including Incoloy alloys to EN standards, stainless and duplex steels, pressure vessel and boiler steels, structural steels, and high-performance engineering alloys. Materials are available in bar, plate, sheet, tube, and pipe forms. Our knowledgeable team is ready to assist with EN-equivalent cross-references and full material traceability documentation.
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
