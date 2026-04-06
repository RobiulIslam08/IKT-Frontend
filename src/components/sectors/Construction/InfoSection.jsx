/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Construction Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Premium Structural Steel & Advanced Processing</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Versatile General Steel Range</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT supplies a comprehensive range of structural steel products that serve as the backbone of Saudi Arabia’s construction market. Our inventory includes universal beams, columns, channels, and angles of all sizes. Known for premium quality and competitive pricing, we provide the raw materials and finished sections needed for everything from industrial trusses to high-profile public monuments.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Processing & Digital Fabrication</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  We offer state-of-the-art processing facilities, including shot-blasting to SA2.5 and weldable holding primers. Our close-coupled saw drill lines receive coordinates electronically via XSteel or Stru Cad, producing DSTV/CAM information with hard stamping for absolute accuracy. From punch and shear for base plates to complex profiling, our technology ensures your structural sections are project-ready.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Reliable Global Supply & Logistics</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  With successful partnerships in high-profile international projects—including major gas pipelines and warehouse distribution centers—IKT brings global expertise to KSA. We provide a personal service that adds value at every stage, offering detailed pricing and reliable "just-in-time" transport solutions to ensure your construction timelines are met without compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;