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
						DIE & TOOL STEEL
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
			</motion.section>
		</div>
	);
}

export default InfoSection;
