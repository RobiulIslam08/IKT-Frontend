/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

export default function MaterialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
     The foundation of modern industry. The catalyst for future evolution.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-4"
            >
              IKT: A premier distributor of high-performance, corrosion-resistant, and heat-tolerant alloys. We bridge the gap between world-class material science and industrial excellence, delivering unparalleled expertise and quality from the globe’s most trusted names in specialty metals.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg mb-8"
            >
              We provide a comprehensive range of products in numerous metals, types and grades.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors"
            >
              VIEW OUR RANGE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          {/* Right - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-100 p-8 lg:p-10 relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#408ccb] flex items-center justify-center"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Latest success story
              </h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 text-lg  mb-6 leading-relaxed"
              >
                "Their commitment to excellence and proactive support ensures we can consistently deliver high-performance solutions to our clients. Partnering with Specialty Metals isn't just a choice; it’s the foundation that enables us to fulfill our operational promises."
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-12 bg-[#408ccb]" />
                <div>
                  <p className="font-semibold text-gray-900">Delivering Solutions</p>
                  <p className="text-gray-500 text-sm">Satisfied Customer</p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-amber-500 -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
