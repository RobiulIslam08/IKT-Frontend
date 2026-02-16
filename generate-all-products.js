import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper functions
function toComponentName(str) {
  let name = str
    .replace(/®/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // If starts with a number, prefix with 'Product'
  if (/^\d/.test(name)) {
    name = "Product" + name;
  }

  return name;
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/®/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toDisplayName(str) {
  return str.replace(/-/g, " ").replace(/®/g, "®");
}

// Product categories and items
const products = [
  {
    category: "STAINLESS-STEEL-PLATE",
    items: ["316-316L-STAINLESS-STEEL", "321-321H-STAINLESS-STEEL"],
  },
  { category: "SUPER-AUSTENITIC-STAINLESS-STEEL", items: [] },
  {
    category: "SUPER-DUPLEX-STAINLESS-STEEL",
    items: ["UNS S32750 (1.4410)", "UNS S32760 (1.4501)"],
  },
  {
    category: "PRESSURE-VESSEL-STEEL",
    items: [
      "ASME SA516 / ASTM A516 - Gr. 65",
      "ASME SA516 / ASTM A516 - Gr. 70",
      "490B-LT50",
      "P355NL2",
    ],
  },
  {
    category: "BOILER-PLATE-STEEL",
    items: [
      "ASME SA516 / ASTM A516 Gr. 60",
      "EN 10028:3 P275NH",
      "BS 1501 161 430 A/B",
      "EN 10028:2 P265GH",
      "EN 10207 P265S",
      "EN 10025 5890QL",
    ],
  },
  {
    category: "QUENCHED-AND-TEMPERED-STEEL",
    items: ["EN 10025 S690QL", "EN 10025 S890QL"],
  },
  { category: "ABRACLAD-CHROMIUM-CARBIDE-WEAR-PLATE", items: [] },
  { category: "CREUSABRO®-4800-&-CREUSABRO®-8000", items: [] },
  { category: "ABRASION-&-WEAR-RESISTANT-STEEL", items: [] },
  { category: "HIGH-YIELD-COLD-FORMING-STEEL-PLATE", items: [] },
  {
    category: "460-YIELD-STEEL-PLATE",
    items: [
      "EN 10028:3 P460NL1",
      "EN 10028:3 P460NL2",
      "EN 10028:3 P460NH",
      "EN 10025:3 S460N",
      "EN 10025:3 S460NL",
    ],
  },
  { category: "ARMOUR-PLATE", items: [] },
  {
    category: "CHROME-MOLY-PLATE",
    items: [
      "ASME SA387 AND ASTM A387",
      "SA387 / A387 Gr 11",
      "SA387 / A387 Gr 12",
      "SA387 / A387 Gr 22",
      "EN 10028-2",
    ],
  },
  { category: "OFFSHORE-&-STRUCTURA-STEEL-PLATE", items: [] },
  {
    category: "HIC-STEEL-PLATE",
    items: ["CARELSO HIC PREMIUM+", "ASME SA516 HIC AND ASTM A516 HIC"],
  },
  { category: "WEATHER-RESISTANT-STEEL-PLATE", items: [] },
];

const allProducts = [];
products.forEach((cat) => {
  if (cat.items.length === 0) {
    allProducts.push({
      category: cat.category,
      item: cat.category,
      isCategory: true,
    });
  } else {
    cat.items.forEach((item) => {
      allProducts.push({ category: cat.category, item, isCategory: false });
    });
  }
});

// Template generators
function generateBannerTemplate(displayName) {
  return `/* eslint-disable no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import banner1 from "../../../../../assets/banner1.jpg";
import banner2 from "../../../../../assets/banner2.jpg";

export default function Banner() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	const slides = [
		{
			title: '${displayName}',
			description:
				'High-quality steel plate engineered for demanding industrial applications. Superior performance, reliability, and compliance with international standards.',
			points: [
				'Industry certified – Meets all international standards',
				'Superior quality – Rigorous testing and quality control',
				'Reliable supply – Consistent availability and delivery',
			],
			bgColor: 'from-slate-900 via-slate-800 to-slate-900',
			accentColor: '#06afcf',
			image: banner1
		},
		{
			title: 'Premium Steel Solutions',
			description:
				'Engineered for excellence. Our steel products deliver unmatched performance in the most challenging environments. Trusted by global manufacturers.',
			points: [
				'Advanced metallurgy – Latest industry standards',
				'Quality assured – Rigorous testing protocols',
				'Cost-effective – Optimized production efficiency',
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
					className={\`absolute inset-0 bg-gradient-to-br \${slide.bgColor}\`}
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
											<CheckCircle2 className="w-6 h-6 text-[#06afcf] shrink-0 mt-0.5" />
											<span className="text-gray-200">{point}</span>
										</motion.li>
									))}
								</motion.ul>

								<motion.div
									className="flex gap-4 pt-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.9 }}
								>
									<button className="px-8 py-3 bg-[#06afcf] text-white font-semibold rounded-lg hover:bg-[#0598b8] transition-colors duration-300 shadow-lg hover:shadow-xl">
										Get Quote
									</button>
									<button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
										Learn More
									</button>
								</motion.div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="hidden md:block"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-[#06afcf] rounded-2xl blur-3xl opacity-20" />
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
									className={\`h-2 rounded-full transition-all duration-300 \${
										index === activeSlide ? 'w-8 bg-[#06afcf]' : 'w-2 bg-white/50 hover:bg-white/80'
									}\`}
									aria-label={\`Go to slide \${index + 1}\`}
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
`;
}

function generateInfoSectionTemplate(displayName) {
  return `/* eslint-disable no-unused-vars */
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
            ${displayName}
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                High-performance steel plate designed for demanding industrial applications
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                This grade offers excellent mechanical properties, corrosion resistance, and reliability for critical applications. 
                Manufactured to meet international standards and specifications, ensuring consistent quality and performance 
                across all product deliveries. Suitable for various industrial sectors including construction, manufacturing, 
                petrochemical, and energy generation.
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
              Key Features & Properties
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">High Strength:</span> Excellent mechanical properties
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Corrosion Resistance:</span> Superior protection in harsh environments
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-foreground">Weldability:</span> Easy to fabricate and join
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
              Applications & Industries
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Common applications include:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Structural components and fabrication</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pressure vessels and tanks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Industrial equipment and machinery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Construction and infrastructure</span>
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
`;
}

function generateApplicationsTemplate(displayName) {
  return `/* eslint-disable no-unused-vars */
'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import image from "../../../../../assets/application.jpg"

export default function Applications() {
	const applications = [
		'Structural fabrication',
		'Pressure vessels',
		'Industrial equipment',
		'Construction projects',
		'Manufacturing components',
		'Infrastructure development',
	]

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
						<div className="mb-8">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-1 h-6 bg-primary rounded-full"></div>
								<h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Applications</h2>
							</div>
							<div className="w-16 h-1 bg-linear-to-r from-primary to-primary/30 rounded-full"></div>
						</div>

						<motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 mb-8">
							{applications.map((app, index) => (
								<motion.li key={index} variants={itemVariants} className="flex items-center gap-3 group">
									<motion.div
										whileHover={{ scale: 1.2, rotate: 90 }}
										className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
									>
										<ChevronRight className="w-3 h-3 text-primary" />
									</motion.div>
									<span className="text-slate-700 font-medium group-hover:text-primary transition-colors duration-300">{app}</span>
								</motion.li>
							))}
						</motion.ul>

						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
							<button className="group relative px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
								<motion.div className="absolute inset-0 bg-[#049ab9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></motion.div>
								<span className="relative flex items-center gap-2">
									GET IN TOUCH
									<motion.svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										whileHover={{ x: 4 }}
										transition={{ type: 'spring', stiffness: 400 }}
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</motion.svg>
								</span>
							</button>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative group flex items-center justify-center"
					>
						<div className="w-full h-72 md:h-[380px] lg:h-[400px] xl:h-[430px] rounded-xl overflow-hidden shadow-2xl">
							<img
								src={image}
								alt="Industrial Application"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
		</section>
	)
}
`;
}

function generatePropertiesTableTemplate(displayName) {
  return `/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertiesTable() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      grade: '${displayName}',
      c: '–',
      cr: '–',
      ni: '–',
      mo: '–',
      pren: '–',
      proofStress: '–',
      tensile: '–',
      elongation: '–'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Chemical & Mechanical Properties
            </h2>
          </div>
          <p className="text-muted-foreground text-lg ml-7">
            Detailed composition and performance characteristics
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">C %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Cr %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Ni %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Mo %</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">PREN</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.grade}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.c}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.cr}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.ni}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.mo}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.pren}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Grade</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">0.2% Proof Stress (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Tensile Strength (MPa)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Elongation (%)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.grade}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.proofStress}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.tensile}</td>
                    <td className="px-6 py-4 text-sm text-center text-muted-foreground">{row.elongation}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Values shown are typical and may vary based on specific heat treatment and manufacturing processes. Please contact us for detailed material certificates and specifications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
`;
}

function generatePageTemplate(componentName, categoryFolder, displayName) {
  return `import React from 'react';

import InfoSection from '../../components/products/${categoryFolder}/${componentName}/InfoSection';
import Applications from '../../components/products/${categoryFolder}/${componentName}/Applications';
import RequestBrochure from '../../components/products/${categoryFolder}/${componentName}/RequestBrochure';
import GetInTouch from '../../components/products/${categoryFolder}/${componentName}/GetInTouch';
import PropertiesTable from '../../components/products/${categoryFolder}/${componentName}/PropertiesTable';
import Banner from '../../components/products/${categoryFolder}/${componentName}/Banner';

const ${componentName} = () => {
	return (
		<div>
			<Banner />
			<InfoSection />
			<Applications />
			<PropertiesTable />
			<RequestBrochure />
			<GetInTouch />
		</div>
	);
};

export default ${componentName};
`;
}

// Create all files
let created = 0;
let errors = 0;

allProducts.forEach((product) => {
  try {
    const componentName = toComponentName(product.item);
    const slug = toSlug(product.item);
    const displayName = toDisplayName(product.item);
    const categoryFolder = toComponentName(product.category);

    const componentDir = path.join(
      __dirname,
      "src",
      "components",
      "products",
      categoryFolder,
      componentName,
    );
    const pageDir = path.join(__dirname, "src", "pages", categoryFolder);

    // Create directories
    if (!fs.existsSync(componentDir)) {
      fs.mkdirSync(componentDir, { recursive: true });
    }
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    // Create Banner.jsx
    fs.writeFileSync(
      path.join(componentDir, "Banner.jsx"),
      generateBannerTemplate(displayName),
    );

    // Create InfoSection.jsx
    fs.writeFileSync(
      path.join(componentDir, "InfoSection.jsx"),
      generateInfoSectionTemplate(displayName),
    );

    // Create Applications.jsx
    fs.writeFileSync(
      path.join(componentDir, "Applications.jsx"),
      generateApplicationsTemplate(displayName),
    );

    // Create PropertiesTable.jsx
    fs.writeFileSync(
      path.join(componentDir, "PropertiesTable.jsx"),
      generatePropertiesTableTemplate(displayName),
    );

    // Create RequestBrochure.jsx (reexport)
    fs.writeFileSync(
      path.join(componentDir, "RequestBrochure.jsx"),
      `import RequestBrochure from '../../../RequestBrochure';\nexport default RequestBrochure;\n`,
    );

    // Create GetInTouch.jsx (reexport)
    fs.writeFileSync(
      path.join(componentDir, "GetInTouch.jsx"),
      `import GetInTouch from '../../../GetInTouch';\nexport default GetInTouch;\n`,
    );

    // Create Page component
    fs.writeFileSync(
      path.join(pageDir, `${componentName}.jsx`),
      generatePageTemplate(componentName, categoryFolder, displayName),
    );

    created++;
    console.log(`✓ Created ${componentName}`);
  } catch (error) {
    errors++;
    console.error(`✗ Error creating ${product.item}:`, error.message);
  }
});

console.log(`\n=== Summary ===`);
console.log(`Total products: ${allProducts.length}`);
console.log(`Successfully created: ${created}`);
console.log(`Errors: ${errors}`);
