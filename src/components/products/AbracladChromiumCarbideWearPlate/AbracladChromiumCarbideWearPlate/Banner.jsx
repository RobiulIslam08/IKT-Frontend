/* eslint-disable no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import banner1 from "../../../../assets/banner1.jpg";
import banner2 from "../../../../assets/banner2.jpg";

export default function Banner() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(false);

	const slides = [
		{
			title: 'ABRACLAD CHROMIUM CARBIDE WEAR PLATE',
			description:
				'With a proven track record of exceptional strength, ABRACLAD offers long-lasting protection where standard steel fails. Its superior functionality ensures that critical components remain operational under heavy stress, making it the ideal choice for:',
			points: [
				'Mining & Quarrying: Withstanding the abrasive nature of ore and mineral processing.',
				'Heavy Construction: Protecting buckets, liners, and chutes from constant friction.',
				
			],
			bgColor: 'from-slate-900 via-slate-800 to-slate-900',
			accentColor: '#06afcf',
			image: banner1
		},
		{
			title: 'ABRACLAD CHROMIUM CARBIDE WEAR PLATE',
			description:
				'With a proven track record of exceptional strength, ABRACLAD offers long-lasting protection where standard steel fails. Its superior functionality ensures that critical components remain operational under heavy stress, making it the ideal choice for:',
			points: [
				'Mining & Quarrying: Withstanding the abrasive nature of ore and mineral processing.',
				'Heavy Construction: Protecting buckets, liners, and chutes from constant friction.',
			
			],
			bgColor: 'from-blue-950 via-slate-900 to-blue-950',
			accentColor: '#06afcf',
			image: banner2
		},
	];

	useEffect(() => {
		if (!isAutoPlay) return;
		const interval = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [isAutoPlay, slides.length]);

	const goToSlide = (index) => {
		setActiveSlide(index);
		setIsAutoPlay(false);
	};

	const goToPrevious = () => {
		setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
		setIsAutoPlay(false);
	};

	const goToNext = () => {
		setActiveSlide((prev) => (prev + 1) % slides.length);
		setIsAutoPlay(false);
	};

	const slide = slides[activeSlide];

	return (
		<div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.div
					key={activeSlide}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className={`absolute inset-0 bg-linear-to-br ${slide.bgColor}`}
				>
					<div className="absolute inset-0 opacity-20">
						<img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
					</div>

					<div className="absolute inset-0 bg-black/40" />

					<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
						<div className="w-full grid md:grid-cols-2 gap-8 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-white space-y-6"
							>
								<motion.h1
									className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.3 }}
								>
									{slide.title}
								</motion.h1>

								<motion.p
									className="text-lg md:text-xl text-gray-200 leading-relaxed"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									{slide.description}
								</motion.p>

								<motion.ul
									className="space-y-3"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
								>
									{slide.points.map((point, index) => (
										<motion.li
											key={index}
											className="flex items-start gap-3"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
										>
											<CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
											<span className="text-gray-200">{point}</span>
										</motion.li>
									))}
								</motion.ul>

							
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="hidden md:block"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-primary rounded-2xl blur-3xl opacity-20" />
									<img
										src={slide.image}
										alt={slide.title}
										className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
									/>
								</div>
							</motion.div>
						</div>
					</div>

					<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
						<button
							onClick={goToPrevious}
							className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-6 h-6 text-white" />
						</button>

						<div className="flex gap-2">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`h-2 rounded-full transition-all duration-300 ${
										index === activeSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/80'
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>

						<button
							onClick={goToNext}
							className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
							aria-label="Next slide"
						>
							<ChevronRight className="w-6 h-6 text-white" />
						</button>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
