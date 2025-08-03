import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/Assets";
import { seoCards } from "../Data/SeoImportanceCard.js";
import { seoBenefits } from "../Data/SeoBenefits.js";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16">
  {/* Intro Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-6">
      Dominate Dubai’s Competitive Market with Expert SEO Solutions
    </h2>
    <p className="text-sm sm:text-base text-gray-700 mb-4 text-justify">
      In Dubai’s fast-paced digital landscape, standing out among competitors is a challenge. Businesses struggle with high competition, shifting search algorithms, and the need for a strong online presence to attract local and international customers.
    </p>
    <p className="text-sm sm:text-base text-gray-700 text-justify">
      As a leading SEO company in Dubai, we specialize in tailored Dubai SEO services that drive measurable growth. With years of experience optimizing businesses in diverse industries, we understand the unique challenges of the Dubai market. Our data-driven strategies ensure your brand ranks higher, attracts the right audience, and achieves long-term success.
    </p>
  </motion.div>

  {/* SEO Importance Cards */}
  <div className="mt-10">
    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
      Importance of SEO in Dubai
    </h3>

    <div className="flex flex-wrap justify-center gap-6">
      {seoCards.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="group bg-[#F2F2F2] p-4 sm:p-6 rounded-xl w-full sm:w-[48%] lg:w-[30%] shadow-md transition-transform duration-300 hover:shadow-xl"
        >
          <div className="w-12 h-12 mb-4 transition-transform duration-500 transform group-hover:rotate-y-180">
            <img
              src={card.icon}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h4>
          <p className="text-sm sm:text-base text-gray-700 text-justify">
            {card.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* SEO Benefits Cards */}
  <div className="mt-12">
    <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
      Benefits of SEO
    </h3>

    <div className="flex flex-wrap justify-center gap-6">
      {seoBenefits.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="group bg-[#F2F2F2] p-4 sm:p-6 rounded-xl w-full sm:w-[48%] lg:w-[30%] shadow-md transition-transform duration-300 hover:shadow-xl"
        >
          <div className="w-12 h-12 mb-4 transition-transform duration-500 transform group-hover:rotate-y-180">
            <img
              src={card.icon}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h4>
          <p className="text-sm sm:text-base text-gray-700 text-justify">
            {card.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
};

export default AboutSection;
