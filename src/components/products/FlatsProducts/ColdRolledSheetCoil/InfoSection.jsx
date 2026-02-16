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
					<p className="text-muted-foreground text-lg">
						COLD ROLLED SHEET & COIL
					</p>
				</motion.div>



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
							className="mb-6"
						>
							<FileTextIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<p className="text-muted-foreground text-sm leading-relaxed">High-quality materials engineered for demanding industrial applications. Our products meet international standards and offer superior performance across various industries.</p>
						<p className="text-muted-foreground text-sm leading-relaxed">We maintain strict quality control throughout the manufacturing process to ensure consistency and reliability. Each product undergoes rigorous testing to meet or exceed industry specifications.</p>
						<p className="text-muted-foreground text-sm leading-relaxed">Our extensive inventory and fast processing capabilities ensure quick delivery times for your projects. Contact us for detailed specifications and custom requirements.</p>
					</motion.div>

					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<motion.div
							whileHover={{ rotate: 15, scale: 1.15 }}
							transition={{ duration: 0.3 }}
							className="mb-6"
						>
							<LayersIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							IKT stocks large-format materials ensuring optimal utilization and minimal waste during custom processing. By leveraging our high-definition plasma cutting technology, we deliver cost-effective, precision-cut components that save clients both time and expense. Additionally, our large plate sizes allow for full-scale fabrications, helping customers reduce costs by minimizing the need for extensive welding.
						</p>
					</motion.div>
				</motion.div>

				{/* Specifications Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="mt-12 mb-12"
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
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Specifications</h3>
						<div className="mb-6">
							<ul className="list-disc pl-6 text-muted-foreground text-sm leading-relaxed space-y-2">
								<li>4′ x 8′ / 1m x 2m x 0.5mm to 2.0mm</li>
								<li>4'X16′ / 1mx 2m x 0.5mm To 1.5mm</li>
								<li>5'X20′ / 1m X 2m X 0.5mm To 1.5mm</li>
							</ul>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Grades</h3>
						<ul className="list-disc pl-6 text-muted-foreground text-sm leading-relaxed space-y-2">
							<li>S235JR</li>
							<li>S275JR</li>
							<li>ASTM A36</li>
							<li>SS400</li>
						</ul>
					</motion.div>
				</motion.div>

				{/* Cold Rolled Coils Section */}
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
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Cold Rolled Coils</h3>
						<div className="space-y-4">
							<div>
								<p className="text-muted-foreground text-sm font-semibold mb-2">Grade:</p>
								<p className="text-muted-foreground text-sm">Gost 1050-88/08KP</p>
							</div>
							<div>
								<p className="text-muted-foreground text-sm font-semibold mb-2">Size:</p>
								<p className="text-muted-foreground text-sm">0.6MM TO 2MM</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Product Table Section */}
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
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Product Sizes & Grades</h3>
						<div className="overflow-x-auto">
							<table className="w-full border-collapse">
								<thead>
									<tr className="bg-background border-b-2 border-border">
										<th className="text-left py-4 px-6 text-foreground font-semibold">Size/Width</th>
										<th className="text-left py-4 px-6 text-foreground font-semibold">Thickness</th>
										<th className="text-left py-4 px-6 text-foreground font-semibold">Grade</th>
									</tr>
								</thead>
								<tbody>
									{[
										{ size: '12MM X 19MM', thickness: '0.5MM TO 2MM', grade: 'KP08/ST12.03' },
										{ size: '1219 X 2438MM', thickness: '0.5MM TO 2MM', grade: 'KP08/ST12.03' },
									].map((row, idx) => (
										<tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
											<td className="py-4 px-6 text-muted-foreground font-medium">{row.size}</td>
											<td className="py-4 px-6 text-muted-foreground">{row.thickness}</td>
											<td className="py-4 px-6 text-muted-foreground">{row.grade}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}

export default InfoSection;
