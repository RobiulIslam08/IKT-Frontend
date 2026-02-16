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
			{/* Header Section */}
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
						304H Stainless Steel Plate
					</p>
				</motion.div>

				{/* Main Description Card */}
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
						
							<p className="text-muted-foreground leading-relaxed ">
								Part of the 300 series, IKT’s 304H is designed for high-temperature service. Compared to standard 304/304L, its higher carbon content provides superior tensile and yield strength.
							</p>
						</div>
					</div>
				</motion.div>

				{/* Two Column Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 gap-8"
				>
					{/* Left Card */}
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
					
						<p className="text-muted-foreground text-sm leading-relaxed">
					Grade 304H is fully weldable via conventional methods and offers excellent machinability despite its toughness. Following IKT’s successful supply to a major UK Oil & Gas refinery, we have officially added this grade to our regular stock. For more details or inquiries, please contact IKT’s stainless division.
						</p>
					</motion.div>

					{/* Right Card */}
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
							Size range
						</h3>
						
						<div className="space-y-4 text-muted-foreground">
							
							<ul className="space-y-2 text-sm">
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span>Plate thickness : 5mm to 35mm

</span>
								</li>
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span>Max plate width : up to 2500mm</span>
								</li>
								<li className="flex gap-2">
									<span className="text-primary font-bold">•</span>
									<span>Max plate length : up to 12000mm</span>
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
