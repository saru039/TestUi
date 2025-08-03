import React from "react";
import { serviceCard } from "../Data/Service.js";
import { assets } from "../assets/Assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ServiceSection = () => {
  return (
    <div className="w-full bg-white px-6 md:px-16 lg:px-32 pb-16">
      {/* Intro Content */}
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Our Comprehensive SEO Services in Dubai
        </h2>
        <p className="text-base text-gray-700 mb-4 text-justify">
          At Brandstory, we offer a full suite of Dubai SEO services designed to
          help businesses rank higher, attract quality traffic, and maximize
          ROI. Whether you're a restaurant in Dubai Marina or an e-commerce
          store in Downtown Dubai, our customized strategies deliver real
          results.
        </p>
      </div>

      {/* SEO Cards */}
      <div className="mt-10">
        <div className="w-full flex flex-wrap justify-center gap-6">
          {serviceCard.map((card, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl w-full sm:w-[48%] hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundColor: card.bg }}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-base text-gray-700 text-justify mb-2">
                {card.description}
              </p>
              <ul className="space-y-2">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-base"
                  >
                    <img className="w-3 h-3 mt-2" src={assets.list} alt="" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
            }}
            className="p-4 rounded-xl w-full sm:w-[48%]"
          >
            <div className="p-6 bg-black w-full h-full flex flex-col items-center justify-center">
              <p className="text-base text-white text-center mb-4">
                Ready to Elevate Your Online Presence?
              </p>
              <div className="w-fit">
                <motion.button whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} className="bg-white text-black text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                  Get A Free SEO Audit
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
