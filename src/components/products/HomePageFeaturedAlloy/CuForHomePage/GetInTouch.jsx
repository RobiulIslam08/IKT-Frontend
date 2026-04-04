/* eslint-disable no-unused-vars */
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function GetInTouch() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
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
		setTimeout(() => {
			setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
			setSubmitted(false)
		}, 3000)
	}

	const contactInfo = [
		{
			icon: Phone,
			label: 'Phone',
			value: '+966-13-3444036',
			href: '+966-13-3444036',
		},
		{
			icon: Mail,
			label: 'Email',
			value: 'sales@ikt.sa',
			href: 'mailto:info@company.com',
		},
		{
			icon: MapPin,
			label: 'Address',
			value: 'ATH Thuqbah District-15th Street-Postal Code 34623,Al-Khobar-7666',
			href: '#',
		},
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
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
		 <section id="get-in-touch" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="w-1 h-6 bg-primary rounded-full"></div>
						<h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Get in Touch</h2>
						<div className="w-1 h-6 bg-primary rounded-full"></div>
					</div>
					<p className="text-slate-600 text-lg max-w-2xl mx-auto">Have questions? We're here to help. Contact us anytime and we'll respond as soon as possible.</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Left - Contact Info */}
					<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
						{/* Contact Cards */}
						{contactInfo.map((info, index) => {
							const IconComponent = info.icon
							return (
								<motion.a
									key={index}
									
									variants={itemVariants}
									whileHover={{ x: 8 }}
									className="group block p-6 rounded-xl bg-white border border-slate-200 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
								>
									<div className="flex items-start gap-4">
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center"
										>
											<IconComponent className="w-6 h-6 text-primary" />
										</motion.div>
										<div className="grow">
											<h3 className="font-semibold text-[#1a3a4a] mb-1">{info.label}</h3>
											<p className="text-slate-600 text-sm group-hover:text-primary transition-colors duration-300">{info.value}</p>
										</div>
										
									</div>
								</motion.a>
							)
						})}

					</motion.div>

					{/* Right - Contact Form */}
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
						<div className="relative group">
							{/* Glow Effect */}
							<div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

							{/* Form Card */}
							<div className="relative bg-white rounded-xl p-8 shadow-lg border border-slate-200">
								<form onSubmit={handleSubmit} className="space-y-4">
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
											placeholder="Your name"
											required
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
										/>
									</motion.div>

									<div className="grid sm:grid-cols-2 gap-4">
										<motion.div variants={itemVariants} className="space-y-2">
											<label htmlFor="email" className="block text-sm font-semibold text-[#1a3a4a]">
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Your email"
												required
												className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
											/>
										</motion.div>

										<motion.div variants={itemVariants} className="space-y-2">
											<label htmlFor="phone" className="block text-sm font-semibold text-[#1a3a4a]">
												Phone
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Your phone"
												className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
											/>
										</motion.div>
									</div>

									<motion.div variants={itemVariants} className="space-y-2">
										<label htmlFor="subject" className="block text-sm font-semibold text-[#1a3a4a]">
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="What is this about?"
											required
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white"
										/>
									</motion.div>

									<motion.div variants={itemVariants} className="space-y-2">
										<label htmlFor="message" className="block text-sm font-semibold text-[#1a3a4a]">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Your message..."
											required
											rows={5}
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none bg-white"
										></textarea>
									</motion.div>

									<motion.button
										variants={itemVariants}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										type="submit"
										className="w-full group relative px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mt-2"
									>
										<motion.div className="absolute inset-0 bg-[#049ab9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></motion.div>
										<span className="relative flex items-center justify-center gap-2">
											<Send className="w-4 h-4" />
											SEND MESSAGE
										</span>
									</motion.button>

									{/* Success Message */}
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : -10 }}
										transition={{ duration: 0.3 }}
										className={`p-3 rounded-lg text-center text-sm font-medium ${submitted ? 'bg-green-50 text-green-700 border border-green-200' : 'hidden'}`}
									>
										✓ Message sent! We'll get back to you soon.
									</motion.div>
								</form>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Background Decoration */}
			<div className="absolute top-32 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
			<div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
		</section>
	)
}
