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
						DEFORMED WELDED WIRE MESH
					</p>
				</motion.div>

				<div className="grid gap-10">
					{/* Benefits Card */}
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<div className="flex items-center gap-4 mb-6">
							<LayersIcon className="w-8 h-8 text-primary" />
							<h3 className="text-2xl font-bold text-foreground">Key Benefits</h3>
						</div>
						<div className="grid md:grid-cols-3 gap-8">
							<div>
								<p className="text-sm font-semibold text-primary uppercase mb-3">Less Steel Required</p>
								<p className="text-sm text-foreground">
									Due to higher working stress allowed in building codes, a saving is made in steel purchased, transported, handled and installed.
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold text-primary uppercase mb-3">Uniform Distribution</p>
								<p className="text-sm text-foreground">
									Provides proper distribution of reinforcement throughout the slab with smaller, closely and uniformly spaced members.
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold text-primary uppercase mb-3">Economic Placement</p>
								<p className="text-sm text-foreground">
									No laying of single bars or manual knotting needed. Labor expense is reduced as sheets are speedily placed in position.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Technical Data Card */}
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<div className="flex items-center gap-4 mb-6">
							<FileTextIcon className="w-8 h-8 text-primary" />
							<h3 className="text-2xl font-bold text-foreground">Technical Data</h3>
						</div>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<div>
									<p className="text-sm font-semibold text-primary uppercase mb-2">Raw Material</p>
									<p className="text-sm text-foreground">
										Purchased from Hadeed Jubail (Saudi Iron and steel Co.). Laboratory testing ensures quality meets highest international standards.
									</p>
								</div>
								<div>
									<p className="text-sm font-semibold text-primary uppercase mb-2">Standards & Quality</p>
									<p className="text-sm text-foreground">
										Supply to meet BS4483, DIN 488, ASTMA 185 and 497. Quality Control maintains standards through electronic testing equipment.
									</p>
								</div>
							</div>
							<div className="bg-background border border-border rounded-xl p-6">
								<p className="text-sm font-semibold text-primary uppercase mb-4 text-center">Material Strengths</p>
								<div className="space-y-4">
									<div className="flex justify-between border-b border-border pb-2">
										<span className="text-sm text-foreground font-semibold ">Yield Strength</span>
										<span className="text-sm text-foreground ">500 N/mm2</span>
									</div>
									<div className="flex justify-between border-b border-border pb-2">
										<span className="text-sm text-foreground font-medium">Ultimate Strength</span>
										<span className="text-sm text-foreground ">550 N/mm2</span>
									</div>
									<div className="flex justify-between">
										<span className="text-sm text-foreground font-medium">Wire Diameters</span>
										<span className="text-sm text-foreground ">4 mm - 12 mm</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Special Sheets Card */}
					<motion.div
						variants={cardVariants}
						whileHover="hover"
						className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
					>
						<div className="flex items-center gap-4 mb-6">
							<CircleCheckIcon className="w-8 h-8 text-primary" />
							<h3 className="text-2xl font-bold text-foreground">Special Sheets</h3>
						</div>
						<p className="text-sm text-foreground">
							Where the quantity is sufficient to justify an economical production run, we can produce sheets in any width up to 3.2 meters and in any length up to 12 meters.
						</p>
					</motion.div>
				</div>
			</motion.section>
		</div>
	);
}

export default InfoSection;