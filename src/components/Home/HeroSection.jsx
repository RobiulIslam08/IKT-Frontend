/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/heroVideo.mp4"
import video2 from "../../assets/video2.mp4"
import video3 from "../../assets/video3.mp4"
import slide3 from "../../assets/banner6.png"
import slide2 from "../../assets/slide3333.png"
import slide1 from "../../assets/slide1.jpg"

const slides = [
	{
		id: 1,
		title: "Welcome to Our Steel World",
		description:
			"Discover premium quality steel products and exceptional services tailored for your industrial needs. Experience innovation and reliability like never before.",
		video: video,
		isVideo: true,
	},
	{
		id: 2,
		title: "Our services",
		description:
			"Since its beginnings as a simple contributor in the field of steel plates. We have expanded our range of services to the point where we not only offer a wide range of the assemble and prepare complex finished parts ready for assembly.",
		video: video2,
		isVideo: true,
	},
	{
		id: 3,
		title: "Quality Products",
		description:
			"We provide the highest quality steel products with precision engineering and superior craftsmanship for all industrial applications.",
		video: video3,
		isVideo: true,
	},
];

const HeroSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const navigate = useNavigate();

	// Auto slide every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<section className="relative h-[600px] lg:h-[700px] overflow-hidden ">
			{/* Background Images and Video */}
			{slides.map((slide, index) => (
				<motion.div
					key={slide.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: currentSlide === index ? 1 : 0 }}
					transition={{ duration: 0.8 }}
					className="absolute inset-0"
				>
					{slide.isVideo ? (
						<>
							<video
								className="absolute inset-0 w-full h-full object-cover"
								src={slide.video}
								autoPlay
								muted
								loop
								playsInline
							/>
							<div className="absolute inset-0 bg-linear-to-r from-slate-900/10 via-slate-800/10 to-slate-900/10" />
						</>
					) : (
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: `url(${slide.image})` }}
						>
							<div className="absolute inset-0 bg-linear-to-r from-slate-900/10 via-slate-800/30 to-slate-900/20" />
						</div>
					)}
				</motion.div>
			))}

			{/* Content */}
			<div className="relative h-full container  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
				<div className="max-w-2xl">
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<motion.h2
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-4xl lg:text-5xl font-bold text-white mb-6 font-[Poppins]"
						>
							{slides[currentSlide].title}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="text-lg text-white/90 mb-8 leading-relaxed"
						>
							{slides[currentSlide].description}
						</motion.p>

						<motion.button
							onClick={() => navigate('/menu-data-sheet')}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wider cursor-pointer shadow-lg"
							whileHover={{ scale: 1.05, x: 5 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore More
							<ChevronRight className="w-5 h-5" />
						</motion.button>
					</motion.div>
				</div>

				{/* Navigation Arrows */}
				<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
					<motion.button
						onClick={prevSlide}
						className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronLeft className="w-6 h-6" />
					</motion.button>
					<motion.button
						onClick={nextSlide}
						className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ChevronRight className="w-6 h-6" />
					</motion.button>
				</div>

				{/* Slide Indicators */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
					{slides.map((_, index) => (
						<motion.button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
								? "bg-primary w-8"
								: "bg-white/50 hover:bg-white/70"
								}`}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
