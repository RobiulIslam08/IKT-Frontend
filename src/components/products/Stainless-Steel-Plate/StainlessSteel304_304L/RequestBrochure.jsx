/* eslint-disable no-unused-vars */
'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useState } from 'react'

export default function RequestBrochure() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => setSubmitted(false), 3000)
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
						{/* Title */}
						<motion.div variants={itemVariants}>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-1 h-6 bg-primary rounded-full"></div>
								<h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Request Product Brochure</h2>
							</div>
							<div className="w-16 h-1 bg-linear-to-r from-primary to-primary/30 rounded-full"></div>
						</motion.div>

						{/* Description */}
						<motion.p variants={itemVariants} className="text-slate-600 text-base leading-relaxed">
							Download our comprehensive product brochure to learn more about our 304 & 304L Stainless Steel plates, specifications, and applications. Fill in your details below to get instant access.
						</motion.p>

						{/* Features List */}
						<motion.ul variants={itemVariants} className="space-y-3">
							{[
								'Complete product specifications',
								'Technical data sheets',
								'Quality certifications',
								'Application guides',
							].map((feature, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-3"
								>
									<div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
										<svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</div>
									<span className="text-slate-700 font-medium">{feature}</span>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>

					{/* Right Form */}
					<motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
						<div className="relative group">
							{/* Glow Effect */}
							<div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

							{/* Form Card */}
							<div className="relative bg-white rounded-xl p-8 shadow-lg border border-slate-200">
								<form onSubmit={handleSubmit} className="space-y-5">
									{/* Name Input */}
									<motion.div variants={itemVariants} className="space-y-2">
										<label htmlFor="name" className="block text-sm font-semibold text-[#1a3a4a]">
											Full Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											placeholder="Enter your name"
											required
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
										/>
									</motion.div>

									{/* Email Input */}
									<motion.div variants={itemVariants} className="space-y-2">
										<label htmlFor="email" className="block text-sm font-semibold text-[#1a3a4a]">
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="Enter your email"
											required
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
										/>
									</motion.div>

									{/* Submit Button */}
									<motion.button
										variants={itemVariants}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										type="submit"
										className="w-full group relative px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
									>
										<motion.div className="absolute inset-0 bg-[#049ab9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></motion.div>
										<span className="relative flex items-center justify-center gap-2">
											<Download className="w-4 h-4" />
											REQUEST DOWNLOAD
										</span>
									</motion.button>

									{/* Success Message */}
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : -10 }}
										transition={{ duration: 0.3 }}
										className={`p-3 rounded-lg text-center text-sm font-medium ${submitted ? 'bg-green-50 text-green-700 border border-green-200' : 'hidden'}`}
									>
										✓ Thank you! Your brochure will be sent shortly.
									</motion.div>
								</form>

								{/* Info Text */}
								<motion.p variants={itemVariants} className="text-xs text-slate-500 text-center mt-4">
									We respect your privacy. Your information will only be used to send the brochure.
								</motion.p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Background Decoration */}
			<div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
		</section>
	)
}
