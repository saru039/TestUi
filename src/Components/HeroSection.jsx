import React from 'react';
import { assets } from '../assets/Assets';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col-reverse md:flex-row gap-10 bg-black text-white px-4 sm:px-6 md:px-10 lg:px-32 pt-12 md:pt-16 pb-16 md:pb-24"
    >
      {/* ------------------ Left Text Section ------------------ */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-3/5 flex flex-col justify-center"
      >
        <h1 className="font-grotesk text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold mb-5 leading-tight font-grotesk">
          Top-Rated SEO Company in Dubai | Drive Organic Growth
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-4 font-medium">
          Boost Your Online Presence with Data-Driven SEO Strategies
        </p>

        <p className="text-sm md:text-base mb-4">
          We help businesses in Dubai dominate search rankings with cutting-edge, ROI-focused SEO solutions. Increase visibility, attract qualified leads, and grow your revenue with our expert team.
        </p>

        <p className="text-sm md:text-base mb-2">
          📍 Dubai-based experts | Proven results | Tailored strategies
        </p>

        <p className="text-sm md:text-base mb-6">
          ✅ 97% client retention rate | 🚀 50K+ keywords ranked
        </p>

        <div className="w-fit">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            Get A Free SEO Audit
          </motion.button>
        </div>
      </motion.div>

      {/* ------------------ Right Image Section ------------------ */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-2/5 flex items-center justify-center"
      >
        <img
          src={assets.TopRatedSEOCompany}
          alt="SEO Illustration"
          className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-xl h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
