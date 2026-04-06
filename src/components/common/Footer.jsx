/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronRight
} from "lucide-react";

const productLinks = [
  "Titanium",
  "Stainless Steel",
  "Nickel Based Alloys",
  "Copper Based Alloys",
  "Aluminium Based Alloys",
  "Cobalt",
  "Duplex",
  "Tantalum",
];

const aboutLinks = [
  "Company Profile",
  "About Us",
  // "Capability Statement",
  // "Industries",
  // "What We Do",
  // "Weight Calculator",
  // "Terms & Conditions",
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">
            IKT
            </h3>
            <p className="text-gray-400 text-sm mb-6">
            A premier global distributor of high-performance, corrosion-resistant, and heat-tolerant alloys, engineered for mission-critical applications and the world’s most demanding environments.
            </p>
            <p className="text-gray-400 text-sm">
              IKT: A premier distributor and stockist of high-performance specialty metals, strategically serving the Kingdom of Saudi Arabia. As industry experts, we provide world-class alloy solutions and technical excellence tailored for the Kingdom’s most ambitious energy, infrastructure, and industrial projects.
            </p>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {productLinks.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#408ccb] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">About</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {aboutLinks.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#408ccb] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+61892505588"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#408ccb] transition-colors "
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#408ccb] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">+966-13-3444036
</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:email@us"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#408ccb] transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#408ccb] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">sales@ikt.sa</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">
                  ATH Thuqbah District-15th Street-Postal Code 34623,Al-Khobar-7666
                  </span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#408ccb] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

       
          </motion.div>
        </div>
      </div>

      
    </footer>
  );
}
