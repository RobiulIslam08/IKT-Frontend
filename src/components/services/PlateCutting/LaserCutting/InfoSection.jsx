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
						ABRACLAD CHROMIUM CARBIDE WEAR PLATE
					</p>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12"
				>
					<div className="flex gap-4 items-start mb-6">
						<motion.div
							whileHover={{ rotate: 10, scale: 1.1 }}
							transition={{ duration: 0.3 }}
						>
							<LayersIcon className="w-8 h-8 text-primary shrink-0 mt-1" />
						</motion.div>
						<div className="flex-1">

							<p className="text-muted-foreground leading-relaxed text-base md:text-lg">
								IKT delivers high-precision, in-house laser cutting using the industry’s most advanced fiber technology. Our state-of-the-art Durma 10kW Fiber Laser ensures rapid production cycles and superior edge quality for projects of any scale.
							</p>
						</div>
					</div>
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
						<h3 className="text-2xl font-bold text-foreground mb-4">
							Core Features
						</h3>
						<ul className="space-y-3 text-muted-foreground mb-6">
							<li className="flex gap-3 items-start">
								<CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span>
									<span className="font-semibold text-foreground">CAD/CNC Integration:</span> Seamlessly converts digital designs into precise physical components.
								</span>
							</li>
							<li className="flex gap-3 items-start">
								<CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span>
									<span className="font-semibold text-foreground">Intricate Detailing:</span> Capable of achieving complex patterns and fine tolerances.
								</span>
							</li>
							<li className="flex gap-3 items-start">
								<CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span>
									<span className="font-semibold text-foreground">Focused Energy:</span> High-intensity laser optics ensure a clean, concentrated cut.
								</span>
							</li>
							<li className="flex gap-3 items-start">
								<CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
								<span>
									<span className="font-semibold text-foreground">Material Versatility:</span> Optimized for a wide variety of industrial and structural steels.
								</span>
							</li>
						</ul>
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
						<h3 className="text-2xl font-bold text-foreground mb-4">
							IKT Laser Finishing & Precision
						</h3>
						<div className="space-y-4 text-muted-foreground">
							<p>
								IKT utilizes high-pressure gas jets to clear molten material during the cutting process, ensuring a smooth, high-quality surface finish. We use Oxygen for standard processing and Nitrogen for stainless steel to prevent oxidation and maintain material purity.
							</p>
							<ul className="space-y-2 text-sm">
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span><span className="font-semibold text-foreground">Precision Focus:</span> High-intensity optics concentrate the beam to approximately 0.002 cm, ensuring unmatched accuracy.</span>
								</li>
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span><span className="font-semibold text-foreground">Superior Edge Quality:</span> Gas-assisted clearing leaves clean, burr-free edges.</span>
								</li>
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span><span className="font-semibold text-foreground">Nitrogen Protection:</span> Specialized shielding for stainless steel to eliminate oxidation.</span>
								</li>
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span><span className="font-semibold text-foreground">Efficiency:</span> More energy-efficient and precise than standard plasma cutting for thin-to-medium materials.</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}

export default InfoSection;
