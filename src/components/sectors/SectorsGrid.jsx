/* eslint-disable no-unused-vars */
'use client';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import constructionImg from '../../assets/images/Sectors/constraction1.png';
import defenceImg from '../../assets/images/Sectors/defence.png';
import nuclearImg from '../../assets/images/Sectors/nuclear1.png';
import oilGasImg from '../../assets/images/Sectors/oilandgas.png';
import offshoreImg from '../../assets/images/Sectors/Offshore.png';
import agriculturalImg from '../../assets/images/Sectors/agriculture.png';
import materialsImg from '../../assets/images/Sectors/materials.png';
import safetyImg from '../../assets/images/Sectors/safty.png';
import transportImg from '../../assets/images/Sectors/transport.png';
import engineeringImg from "../../assets/images/Sectors/engineering.png";

const sectors = [
  {
    name: 'Construction',
    href: '/sectors/construction',
    image: constructionImg,
    description:
      'IKT provides premium quality general steel products for large-scale structural fabrication and construction. From universal beams to high-precision processing, we are a trusted partner for the Kingdom\'s most ambitious infrastructure and commercial projects.',
  },
  {
    name: 'Defence',
    href: '/sectors/defence',
    image: defenceImg,
    description:
      'IKT provides a secure, high-integrity supply chain for mission-critical land platforms and safety-critical defence infrastructure. Leveraging EN 1090-2 Execution Class 4 processing and full 3.1/3.2 traceability, we deliver precision steel solutions directly to defence OEMs and Tier 1 contractors.',
  },
  {
    name: 'Nuclear',
    href: '/sectors/nuclear',
    image: nuclearImg,
    description:
      'IKT provides certified steel products and advanced processing for the critical nuclear sector. From new-build fusion projects to lifecycle maintenance and decommissioning, we deliver the precision and long-term reliability required for the Kingdom\'s energy security.',
  },
  {
    name: 'Oil & Gas',
    href: '/sectors/oil-gas',
    image: oilGasImg,
    description:
      'IKT combines deep expertise in "oil patch grades" to supply high-performance materials for the energy sector. From precision Nickel Alloys to Titanium forged rings, we deliver the structural integrity required for the most demanding offshore and downhole environments.',
  },
  {
    name: 'Offshore',
    href: '/sectors/offshore',
    image: offshoreImg,
    description:
      'IKT provides a focused, high-integrity supply chain for the offshore oil, gas, and renewable energy sectors. From S355 J2+M structural beams to high-precision tubulars, we deliver total supply solutions engineered for the harshest marine environments.',
  },
  {
    name: 'Agricultural',
    href: '/sectors/agricultural',
    image: agriculturalImg,
    description:
      'IKT provides innovative, high-grade steel solutions tailored for the farming and agricultural sectors. From specialized animal flooring mesh to self-closing safety gates, we deliver the quality and durability required to withstand harsh outdoor environments.',
  },
  {
    name: 'Materials Handling',
    href: '/sectors/materials-and-handling',
    image: materialsImg,
    description:
      'IKT provides a first-class, single point of contact service for the materials handling sector. Supplying direct to OEMs and subcontractors, we deliver high-capacity steel solutions integrated with just-in-time delivery and expert supply chain management.',
  },
  {
    name: 'Safety and Access',
    href: '/sectors/safety-and-access',
    image: safetyImg,
    description:
      'IKT provides a comprehensive "one-stop shop" for industrial safety systems, specializing in high-integrity handrails and walkways. From initial design to final delivery, we ensure compliant edge protection and robust flooring for Saudi Arabia\'s most demanding industrial environments.',
  },
  {
    name: 'Transport',
    href: '/sectors/transport',
    image: transportImg,
    description:
      'IKT is a trusted supplier of premium finished components for high-profile vehicle manufacturers and automotive sub-contractors. From coach building to complex chassis parts, we provide a total package integrated with advanced 3D modeling and just-in-time delivery.',
  },
  {
    name: 'Engineering',
    href: '/sectors/engineering',
    image: engineeringImg,
    description:
      'IKT is the premier supplier of precision engineering steel, tool steel, and specialty alloys for the mechanical engineering, precision machining, and manufacturing industries in Saudi Arabia. Our materials deliver consistent machinability, strength, and dimensional accuracy.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function SectorsGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sectors We Serve</h2>
          </div>
          <p className="text-base font-medium text-gray-600 max-w-2xl mx-auto">
            IKT delivers certified steel solutions across ten key industrial sectors in Saudi Arabia.
            Select a sector below to explore our specialist capabilities.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sectors.map((sector) => (
            <motion.div key={sector.name} variants={cardVariants}>
              <Link
                to={sector.href}
                className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  {/* Accent + name */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-0.5 bg-primary rounded-full flex-shrink-0" />
                    <h3 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider">
                      {sector.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                    {sector.description}
                  </p>

                  {/* Find out more */}
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-bold text-primary uppercase tracking-wider group-hover:gap-2 transition-all duration-200">
                    <span>Find Out More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
