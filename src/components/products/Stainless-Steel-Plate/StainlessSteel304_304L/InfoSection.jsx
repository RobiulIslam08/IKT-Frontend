// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';
// import { LayersIcon, FileTextIcon, CircleCheckIcon } from 'lucide-react';

// export function InfoSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//     hover: {
//       y: -8,
//       boxShadow: '0 20px 25px -5px rgba(6, 175, 207, 0.15)',
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header Section */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="px-6 py-16 md:px-12 md:py-24"
//       >
//         <motion.div variants={itemVariants} className="mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             More Information
//           </h1>
//           <p className="text-muted-foreground text-lg">
//             BS1501 161 4304 and BS1501 161 4308 Boiler Plate Steel
//           </p>
//         </motion.div>

//         {/* Main Description Card */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12"
//         >
//           <div className="flex gap-4 items-start mb-6">
//             <motion.div
//               whileHover={{ rotate: 10, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <LayersIcon className="w-8 h-8 text-primary shrink-0 mt-1" />
//             </motion.div>
//             <div className="flex-1">
//               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                 BS1501 is the British standard for carbon and carbon manganese steel plates
//                 used in pressure applications.
//               </h2>
//               <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
//                 A significant part of Brown McFarlane's boiler plate stack inventory is made up
//                 of plates certified to BS1501 161 4304 and BS1501 161 4308. This is despite the
//                 fact that BS 1501- 1990 Part 1 was officially withdrawn on 15th February 1992.
//                 The standard was superseded by the European standard EN 10028. Brown McFarlane
//                 recognises that BS1501 is a steel specification that is still required by our
//                 customers and for that reason, we continue to hold stock in order to provide the
//                 best possible service.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Two Column Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {/* Left Card */}
//           <motion.div
//             variants={cardVariants}
//             whileHover="hover"
//             className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
//           >
//             <motion.div
//               whileHover={{ rotate: 15, scale: 1.15 }}
//               transition={{ duration: 0.3 }}
//               className="mb-6"
//             >
//               <FileTextIcon className="w-10 h-10 text-primary" />
//             </motion.div>
//             <h3 className="text-2xl font-bold text-foreground mb-4">
//               BS1501 161 Boiler Plate Steel Specification
//             </h3>
//             <ul className="space-y-3 text-muted-foreground mb-6">
//               <li className="flex gap-3 items-start">
//                 <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
//                 <span>
//                   <span className="font-semibold text-foreground">Type A:</span> indicated specified
//                   minimum room temperature tensile strength
//                 </span>
//               </li>
//               <li className="flex gap-3 items-start">
//                 <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
//                 <span>
//                   <span className="font-semibold text-foreground">Type B:</span> as above but with
//                   specified elevated temperature properties
//                 </span>
//               </li>
//             </ul>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Plates up to and including 50mm thick. In these cases, the specified property
//               requirements must be met when the steel is in the hot finished condition.
//             </p>
//           </motion.div>

//           {/* Right Card */}
//           <motion.div
//             variants={cardVariants}
//             whileHover="hover"
//             className="bg-card border border-border rounded-2xl p-8 md:p-10 cursor-default"
//           >
//             <motion.div
//               whileHover={{ rotate: 15, scale: 1.15 }}
//               transition={{ duration: 0.3 }}
//               className="mb-6"
//             >
//               <LayersIcon className="w-10 h-10 text-primary" />
//             </motion.div>
//             <h3 className="text-2xl font-bold text-foreground mb-4">
//               Other BS1501 Steel Plate Grades
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               BS 1501 161 430 type B is the same as type A in all respects except that it also
//               has elevated temperature properties specified.
//             </p>
//             <div className="space-y-4 text-muted-foreground">
//               <p>
//                 As well as BS 1501 161 4304 and 4308, we are also stockholders of pressure vessel
//                 plates manufactured and certified to BS 1501 in the following grades:
//               </p>
//               <ul className="space-y-2 text-sm">
//                 <li className="flex gap-2">
//                   <span className="text-primary font-bold">•</span>
//                   <span>BS 1503 254 4908 (TSD)</span>
//                 </li>
//                 <li className="flex gap-2">
//                   <span className="text-primary font-bold">•</span>
//                   <span>BS 1503 223 4908 (TSD)</span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
'use client';
import { motion } from 'framer-motion';
import { LayersIcon, FileTextIcon, CircleCheckIcon } from 'lucide-react';

export function InfoSection() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeIn}
					className="mb-16"
				>
					<div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-primary/10 border border-primary/30 rounded-full">
						<LayersIcon className="w-5 h-5 text-primary" />
						<span className="text-primary font-semibold text-sm">Material Specifications</span>
					</div>

					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
						304 stainless steel is:
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{[
							'Easy to form, weld and fabricate',
							'Durable',
							'Anti-corrosive',
							'Anti-rust'
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-start gap-3 bg-gray-50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
							>
								<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
								<p className="text-gray-700 text-sm leading-relaxed">{item}</p>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						viewport={{ once: true }}
						className="text-gray-600 mt-6 text-lg"
					>
						As a result, it is suitable for a wide range of applications.
					</motion.p>
				</motion.div>

				{/* Two Column Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						className="group relative"
					>
						{/* Accent Border */}
						<div className="absolute -inset-0.5 bg-linear-to-r from-primary to-transparent rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity" />

						<div className="relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 bg-primary/10 rounded-lg">
									<FileTextIcon className="w-6 h-6 text-primary" />
								</div>
								<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
							</div>

							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
								What is the difference between 304 vs 304L stainless steel?
							</h3>

							<div className="space-y-5 text-gray-700  ">
								<p>
									Stainless steel grades 304 and 304L are among the most commonly used and fundamental stainless steel materials.
								</p>
								<p>
								Both grades exhibit very similar mechanical and chemical properties; however, grade 304L contains a lower carbon content compared to grade 304. This reduced carbon level significantly enhances weldability and minimizes the risk of intergranular corrosion, particularly in the heat-affected zones around welds.


								</p>
								<p className="">
								According to SAE specifications, both 304 and 304L belong to the 300 Series stainless steels, a group that encompasses a broad range of austenitic chromium-nickel alloys known for their excellent corrosion resistance, formability, and durability.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Right Card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						className="group relative"
					>
						{/* Accent Border */}
						<div className="absolute -inset-0.5 bg-linear-to-l from-primary to-transparent rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity" />

						<div className="relative bg-white border border-gray-200 p-8 md:p-10 rounded-2xl h-full shadow-lg hover:shadow-xl transition-shadow">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 bg-primary/10 rounded-lg">
									<CircleCheckIcon className="w-6 h-6 text-primary" />
								</div>
								<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
							</div>

							<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
								Sizes available for 304 and 304L Stainless Steel
							</h3>

							<div className="space-y-5 text-gray-700 text-base leading-relaxed">
								<p>
								IKT maintains a comprehensive inventory of large-format stainless steel plate, with dimensions of up to 12,000 mm in length and 3,000 mm in width.
								</p>
								<p>
									These large-area plates are specifically intended to help minimize fabrication costs for customers by significantly reducing the amount of welding required during manufacture.
								</p>
								<p>
								As a result, the majority of customers choose to purchase 304 and 304L stainless steel as pre-cut, ready-to-size components, allowing for faster fabrication and reduced overall production costs.
								</p>
							</div>

							{/* Bottom Accent */}
							<div className="mt-8 pt-6 border-t border-primary/20">
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
									<p className="text-primary text-sm font-medium">Ready to order custom sizes</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}