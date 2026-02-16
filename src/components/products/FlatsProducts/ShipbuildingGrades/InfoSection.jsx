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
				<motion.div variants={itemVariants} className="mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						More Information
					</h1>
					<p className="text-muted-foreground text-lg mb-8">
						SHIPBUILDING GRADES
					</p>
					<p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
						Steel Plate Marine Quality Grade: GR-A/B/D, GR-AH36/DH36/EH36 with TPI & 3.2 Certification.
					</p>
				</motion.div>

				{/* Marine Quality Grades */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mb-12"
				>
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.15 }}
							transition={{ duration: 0.3 }}
							className="mb-6 inline-block"
						>
							<LayersIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Marine Quality Grades</h3>
						<p className="text-muted-foreground text-base leading-relaxed mb-6">
							Available steel grades with TPI & 3.2 Certification:
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
							{['GR-A', 'GR-B', 'GR-D', 'GR-AH36', 'GR-DH36', 'GR-EH36'].map((grade) => (
								<div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
									<span className="text-sm font-medium text-foreground">{grade}</span>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Size & Thickness Specifications */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mb-12"
				>
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.15 }}
							transition={{ duration: 0.3 }}
							className="mb-6 inline-block"
						>
							<FileTextIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Size & Thickness Specifications</h3>

						<div className="overflow-x-auto">
							<table className="w-full border-collapse">
								<thead>
									<tr className="bg-background border-b-2 border-border">
										<th className="text-left py-4 px-6 text-foreground font-semibold">Size</th>
										<th className="text-left py-4 px-6 text-foreground font-semibold">Thickness</th>
									</tr>
								</thead>
								<tbody>
									{[
										{ size: '2000MM × 6000MM', thickness: '6MM till 100MM' },
										{ size: '2500MM × 8000MM', thickness: '6MM till 100MM' },
										{ size: '2500MM × 12000MM', thickness: '6MM till 100MM' },
										{ size: '3050MM × 12000MM', thickness: '6MM till 100MM' },
									].map((spec, index) => (
										<tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
											<td className="py-4 px-6 text-muted-foreground font-medium">{spec.size}</td>
											<td className="py-4 px-6 text-muted-foreground">{spec.thickness}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
				</motion.div>

				{/* Additional Information */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 gap-8"
				>
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.15 }}
							transition={{ duration: 0.3 }}
							className="mb-6 inline-block"
						>
							<CircleCheckIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Quality Assurance</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							All our shipbuilding grade steel plates come with TPI (Third Party Inspection) and 3.2 Certification, ensuring compliance with international marine standards.
						</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							We maintain strict quality control throughout the manufacturing process to ensure consistency and reliability for demanding marine applications.
						</p>
					</motion.div>

					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.15 }}
							transition={{ duration: 0.3 }}
							className="mb-6 inline-block"
						>
							<LayersIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Large Format Availability</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							IKT stocks large-format marine grade steel plates ensuring optimal utilization and minimal waste during shipbuilding operations. Our extensive inventory and fast processing capabilities ensure quick delivery times for your maritime projects.
						</p>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}

export default InfoSection;
