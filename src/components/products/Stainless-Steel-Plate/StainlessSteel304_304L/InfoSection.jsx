
// /* eslint-disable no-unused-vars */
// 'use client';
// import { motion } from 'framer-motion';
// import { LayersIcon, FileTextIcon, CircleCheckIcon } from 'lucide-react';

// export function InfoSection() {
// 	const fadeIn = {
// 		hidden: { opacity: 0, y: 20 },
// 		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// 	};

// 	return (
// 		<section className="py-5 md:py-10 px-4 bg-white relative overflow-hidden">
// 			{/* Background Pattern */}
// 			<div className="absolute inset-0 opacity-5">
// 				<div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
// 				<div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
// 			</div>

// 			<div className="max-w-7xl mx-auto relative z-10">
// 				{/* Header Section */}
// 				<motion.div
// 					initial="hidden"
// 					whileInView="visible"
// 					viewport={{ once: true }}
// 					variants={fadeIn}
// 					className="mb-16"
// 				>
// 					<div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-primary/10 border border-primary/30 rounded-full">
// 						<LayersIcon className="w-5 h-5 text-primary" />
// 						<span className="text-primary font-semibold text-sm">Material Specifications</span>
// 					</div>

// 					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
// 						304 stainless steel is:
// 					</h2>

// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// 						{[
// 							'Easy to form, weld and fabricate',
// 							'Durable',
// 							'Anti-corrosive',
// 							'Anti-rust'
// 						].map((item, index) => (
// 							<motion.div
// 								key={index}
// 								initial={{ opacity: 0, x: -20 }}
// 								whileInView={{ opacity: 1, x: 0 }}
// 								transition={{ delay: index * 0.1 }}
// 								viewport={{ once: true }}
// 								className="flex items-start gap-3 bg-gray-50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
// 							>
// 								<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
// 								<p className="text-gray-700 text-sm leading-relaxed">{item}</p>
// 							</motion.div>
// 						))}
// 					</div>

// 					<motion.p
// 						initial={{ opacity: 0 }}
// 						whileInView={{ opacity: 1 }}
// 						transition={{ delay: 0.4 }}
// 						viewport={{ once: true }}
// 						className="text-gray-600 mt-6 text-lg"
// 					>
// 						As a result, it is suitable for a wide range of applications.
// 					</motion.p>
// 				</motion.div>

// 				{/* Two Column Grid */}
// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// 					{/* Left Card */}
// 					<motion.div
// 						initial="hidden"
// 						whileInView="visible"
// 						viewport={{ once: true }}
// 						variants={fadeIn}
// 						className="group relative"
// 					>
// 						{/* Accent Border */}
// 						<div className="absolute -inset-0.5 bg-linear-to-r from-primary to-transparent rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity" />

// 						<div className="relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow">
// 							<div className="flex items-center gap-3 mb-6">
// 								<div className="p-2 bg-primary/10 rounded-lg">
// 									<FileTextIcon className="w-6 h-6 text-primary" />
// 								</div>
// 								<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
// 							</div>

// 							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
// 								What is the difference between 304 vs 304L stainless steel?
// 							</h3>

// 							<div className="space-y-5 text-gray-700  ">
// 								<p>
// 									Stainless steel grades 304 and 304L are among the most commonly used and fundamental stainless steel materials.
// 								</p>
// 								<p>
// 								Both grades exhibit very similar mechanical and chemical properties; however, grade 304L contains a lower carbon content compared to grade 304. This reduced carbon level significantly enhances weldability and minimizes the risk of intergranular corrosion, particularly in the heat-affected zones around welds.


// 								</p>
// 								<p className="">
// 								According to SAE specifications, both 304 and 304L belong to the 300 Series stainless steels, a group that encompasses a broad range of austenitic chromium-nickel alloys known for their excellent corrosion resistance, formability, and durability.
// 								</p>
// 							</div>
// 						</div>
// 					</motion.div>

// 					{/* Right Card */}
// 					<motion.div
// 						initial="hidden"
// 						whileInView="visible"
// 						viewport={{ once: true }}
// 						variants={fadeIn}
// 						className="group relative"
// 					>
// 						{/* Accent Border */}
// 						<div className="absolute -inset-0.5 bg-linear-to-l from-primary to-transparent rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity" />

// 						<div className="relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow">
// 							<div className="flex items-center gap-3 mb-6">
// 								<div className="p-2 bg-primary/10 rounded-lg">
// 									<CircleCheckIcon className="w-6 h-6 text-primary" />
// 								</div>
// 								<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
// 							</div>

// 							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
// 								Sizes available for 304 and 304L Stainless Steel
// 							</h3>

// 							<div className="space-y-5 text-gray-700 text-base leading-relaxed">
// 								<p>
// 								IKT maintains a comprehensive inventory of large-format stainless steel plate, with dimensions of up to 12,000 mm in length and 3,000 mm in width.
// 								</p>
// 								<p>
// 									These large-area plates are specifically intended to help minimize fabrication costs for customers by significantly reducing the amount of welding required during manufacture.
// 								</p>
// 								<p>
// 								As a result, the majority of customers choose to purchase 304 and 304L stainless steel as pre-cut, ready-to-size components, allowing for faster fabrication and reduced overall production costs.
// 								</p>
// 							</div>

// 							{/* Bottom Accent */}
// 							<div className="mt-8 pt-6 border-t border-primary/20">
// 								<div className="flex items-center gap-2">
// 									<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
// 									<p className="text-primary text-sm font-medium">Ready to order custom sizes</p>
// 								</div>
// 							</div>
// 						</div>
// 					</motion.div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

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
                    <p className="text-muted-foreground text-lg mb-8 uppercase tracking-wider">
                        304-304L STAINLESS STEEL
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
                        304 stainless steel is the most widely used grade globally, known for its versatility and ease of formation into a vast number of shapes across numerous industries.
                    </p>
                </motion.div>

                {/* Industries Section - Grid Style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    {/* Food Processing */}
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Food Processing</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Essential for strong and non-corrosive equipment. Its superb anti-corrosion properties make it suitable for the processing and handling of most food products.
                        </p>
                    </motion.div>

                    {/* Chemical Industry */}
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
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Chemical Industry</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Highly advantageous in chemical applications due to its superior resistance to both corrosion and extreme heat.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Comparison Card - Full Width */}
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
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">304 vs 304L: The Difference</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4">
                            The primary difference lies in <strong>lower carbon content in 304L</strong>, which improves weldability and reduces the risk of corrosion around welded areas. While 304L has slightly lower tensile strength, both are key parts of the SAE 300 Series of austenitic chromium-nickel alloys.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Stock Section - Stock Style */}
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
                            <LayersIcon className="w-10 h-10 text-primary" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Sizes & Custom Processing</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            IKT holds comprehensive stock in large area formats (up to <strong className="text-foreground">12,000 mm x 3,000 mm</strong>), designed to minimize fabrication costs and welding requirements.
                        </p>
                        <div className="bg-background border border-border rounded-xl p-6">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our computer-controlled <strong>high definition plasma and laser cutting</strong> ensures optimal plate utilization. Most customers prefer purchasing 304 and 304L as ready-cut to size items to save time and expense.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}

export default InfoSection;