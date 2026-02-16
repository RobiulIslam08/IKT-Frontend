/* eslint-disable no-unused-vars */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Flame, Award } from "lucide-react";

const BANNER_IMAGE_PATH = "/banner_image.avif";

const features = [
  {
    icon: Shield,
    title: "Corrosion Resistant",
    description: "Premium alloys engineered for extreme conditions",
  },
  {
    icon: Flame,
    title: "High Temperature",
    description: "Superior performance up to 2000°F",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "ISO 9001 & industry-leading standards",
  },
];

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.9 + i * 0.1,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BANNER_IMAGE_PATH || "/placeholder.svg"}
          alt="Industrial steel warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-800/60 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-[#cfd8c9]" />
            <span className="text-gray-300 font-semibold tracking-wider uppercase text-xs md:text-sm">
              Excellence in Metal Distribution
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-xl md:text-2xl  lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
          >
            Your Strategic Partner in{" "}
            <span className="block text-white">High-Performance Steel Engineering</span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            variants={lineVariants}
            className="w-24 h-1 bg-[#418ccb] origin-left mb-8 rounded-full"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/95 max-w-xl mb-10 leading-relaxed font-semibold"
          >
           A premier global distributor of high-performance, corrosion-resistant, and heat-tolerant alloys, engineered for mission-critical applications and the world’s most demanding environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#418ccb] text-white font-semibold rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#3578ab]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            <motion.a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 hover:border-[#418ccb] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards - Bottom Section */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white via-white/97 to-transparent pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                className="group p-5 md:p-6 bg-white border border-slate-200 rounded-lg hover:border-[#418ccb] hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-5 h-5 text-[#418ccb]" />
                </motion.div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
