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
						BULB BARS
					</p>
					<p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
						IKT can offer the full range of Bulb Flats from Euro and China Origin. Besides Bulb Flats, we can also supply Inverted Angles, Equal Angles, Unequal Angles, Flats, Wide Flats, and Round bars in Shipbuilding Grades.
					</p>
				</motion.div>

				{/* Steel Grades Section */}
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
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Steel Grades</h3>
						<p className="text-muted-foreground text-base leading-relaxed mb-6">
							Our Bulb Flats and other profiles are available in the following standard steel grades (upon request, customer-specific steel grade production is available):
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
							{['GRADE A', 'GRADE D', 'GRADE AH 32', 'GRADE AH 40', 'GRADE DH 36', 'GRADE EH 32', 'Gost A 40S', 'FH3', 'EH40'].map((grade) => (
								<div key={grade} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
									<span className="text-sm text-foreground">{grade}</span>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Quality and Certification Section */}
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
							<CircleCheckIcon className="w-10 h-10 text-primary" />
						</motion.div>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Quality and Certification</h3>
						<p className="text-muted-foreground text-base leading-relaxed mb-6">
							Our continuous strive for excellence and customer satisfaction is the driving force to keep our market leadership. We can supply from well-known International Classification Organizations, which include but not limited to:
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
							{['ABS', 'Lloyds Register', 'DNV-GL', 'BV', 'Class NK', 'RMRS', 'KR', 'Rina'].map((cert) => (
								<div key={cert} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
									<span className="text-sm text-foreground">{cert}</span>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Additional Services Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 gap-8 mb-12"
				>
					{/* Shot Blasting & Priming */}
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
						<h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Shot Blasting & Priming, Edge Preparation</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							We are able to supply Bulb Flats and other profiles in Shot blasted and primed condition (the primer type used according to customer specification) eliminating additional operation for our customers.
						</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Also, upon request, we are able to prepare the edges of Bulb Flats for better contact with plates before welding with our in-house design automatic edge machining.
						</p>
					</motion.div>

					{/* Customer Based Production */}
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
						<h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Customer / Project Based Production</h3>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							We are well aware that major projects require special solutions. We are able to produce according to customer special specifications to help them achieve the results for their projects.
						</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							We can also supply special Bulb Flats to our customer for their most challenging projects.
						</p>
					</motion.div>
				</motion.div>

				{/* Stock Section */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
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
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stock</h3>
						<p className="text-muted-foreground text-base leading-relaxed">
							Our large amount of Bulb Flat stock ensures that our partners with emergency needs won't suffer any delays in their projects.
						</p>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}

export default InfoSection;
