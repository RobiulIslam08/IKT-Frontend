/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import banner1 from "../../../../assets/images/SpeacialAlloys/common1.png";

export default function Banner() {
  const slides = [
    {
      title: 'IKT Hastelloy X Alloy (UNS N06002)',
      description:
        'Conquer extreme thermal environments with IKT\'s Hastelloy X. Expertly formulated as a nickel-chromium-iron-molybdenum superalloy, it delivers extraordinary resistance to oxidation and structural degradation at incredibly high temperatures, serving as the ultimate foundational material for Saudi Arabia\'s gas turbine engines and industrial heating sectors.',
      points: [
        'Globally certified high-heat superalloy strictly equivalent to DIN 2.4665 standards.',
        'Maintains formidable tensile strength and oxidation resistance up to 2200°F (1200°C).',
      ],
      bgColor: 'from-slate-900 via-slate-800 to-slate-900',
      image: banner1
    }
  ];

  const slide = slides[0];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <motion.div
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
                className="text-base md:text-lg font-medium text-gray-200 leading-relaxed"
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
                    <span className="text-base font-medium text-gray-200">{point}</span>
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
      </motion.div>
    </div>
  );
}