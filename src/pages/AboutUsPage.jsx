import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, CheckCircle2 } from "lucide-react";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const AboutUsPage = () => {
  const features = [
    {
      title: "Trust and Commitment",
      description: "Documenting the rituals with photos and videos, and providing them to the Umrah student after the request is executed.",
      icon: <ShieldCheck className="w-10 h-10 text-[#408ccb]" />,
    },
    {
      title: "Competitiveness",
      description: "Providing technical services that keep pace with the Kingdom's Vision 2030 and contribute to serving Muslims from all countries of the world.",
      icon: <Target className="w-10 h-10 text-[#408ccb]" />,
    },
    {
      title: "Value",
      description: "Pay calculation - honesty - commitment. Our focus is on the supply of highly specified, quality steel plate products. We’re proud to hold one of the most diverse stock ranges available anywhere in the world running from carbon manganese through to super duplex stainless steel. Whatever your ex-stock steel plate requirement, the chances are that we can offer a speedy supply.",
      icon: <Award className="w-10 h-10 text-[#408ccb]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner Section */}
      <section className="relative h-[60vh] bg-gray-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={slide2}
            alt="About Us Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Committed to quality, honesty, and rapid supply. We lead the way in technical service and excellence.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand by our commitment to delivering the best and upholding core values that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src={slide3}
                  alt="Industrial standard representation"
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#408ccb] text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold mb-1">Vision 2030</p>
                  <p className="text-sm opacity-90">Committed to Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Pioneering the Future of Quality Supply
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a premier global distributor, we are proud to hold one of the most diverse stock ranges available anywhere in the world. Our journey is driven by the commitment to honesty, pay calculation, and unprecedented quality.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Diverse stock of steel plates from carbon to super duplex.",
                  "Speedy supply and reliable ex-stock delivery.",
                  "Aligning with the Kingdom's Vision 2030.",
                  "Serving with honesty, pay calculation, and excellence."
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#408ccb] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
