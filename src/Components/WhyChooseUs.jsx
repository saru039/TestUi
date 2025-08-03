import React from "react";
import { assets } from "../assets/Assets.js";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const WhyChooseUs = () => {
  return (
    <div className="bg-white">
      <motion.div
        {...fadeInUp}
        viewport={{ once: true }}
        className="text-center mb-12 px-4"
      >
        <h2 className="font-grotesk text-3xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Why Choose Us as Your SEO Partner in Dubai?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Brandstory, we don’t just offer SEO services—we deliver real,
          measurable results that help businesses thrive in Dubai’s competitive
          digital landscape. Here’s why top brands trust us:
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {[
          {
            bg: assets.hexBg,
            icon: assets.local,
            title: "Local Expertise in Dubai’s Market",
            text: "Deep understanding of Dubai’s business environment, search trends, and customer behavior.\nSpecialized strategies for local businesses, e-commerce, and industries like real estate, hospitality, and healthcare.",
            reverse: false,
          },
          {
            bg: assets.hexBlack,
            icon: assets.results,
            title: "Proven Results with Data-Driven SEO",
            text: "100+ successful SEO campaigns across various industries.\nClient success stories with significant traffic growth and higher conversion rates.",
            reverse: true,
          },
          {
            bg: assets.hexPurple,
            icon: assets.transparent,
            title: "Transparent & Insightful Reporting",
            text: "Monthly performance reports with key insights and actionable recommendations.\n24/7 access to real-time analytics dashboards for full transparency.",
            reverse: false,
          },
          {
            bg: assets.hexOrange,
            icon: assets.strategy,
            title: "Customized SEO Strategies",
            text: "Tailor-made SEO solutions—no one-size-fits-all approach.\nStrategies built around your business goals, target audience, and competition.",
            reverse: true,
          },
          {
            bg: assets.hexGold,
            icon: assets.team,
            title: "Dedicated Team of SEO Experts",
            text: "Certified SEO professionals with years of experience in Dubai SEO services.\nContinuous learning and adaptation to Google algorithm updates.",
            reverse: false,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            {...fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
            className={`relative bg-no-repeat bg-center bg-contain p-6 flex flex-col ${
              item.reverse ? "sm:flex-row-reverse" : "sm:flex-row"
            } items-center gap-4 min-h-[200px]`}
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div
              className={`w-40 aspect-square mt-[-50px] lg:mt-0 flex flex-col items-center justify-center bg-no-repeat bg-center bg-contain text-center shrink-0 relative z-10 ${
                item.reverse ? "sm:-mr-10" : "sm:-ml-10"
              }`}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "100% 100%",
                backgroundColor: "#fff",
              }}
            >
              <img className="w-10 h-10 mb-2" src={item.icon} alt="" />
              <h3 className="text-[15px] font-semibold text-gray-800 leading-tight px-2">
                {item.title}
              </h3>
            </div>

            <div
              className={`text-sm text-gray-700 max-w-xs text-center ${
                item.reverse ? "sm:text-right" : "sm:text-left"
              } whitespace-pre-line`}
            >
              {item.text}
            </div>
          </motion.div>
        ))}

        {/* Final CTA Card */}
        <motion.div
          {...fadeInUp}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          viewport={{ once: true }}
          className="relative bg-no-repeat bg-center bg-contain p-6 flex flex-col sm:flex-row-reverse items-center justify-center gap-4 min-h-[200px]"
          style={{
            backgroundImage: `url(${assets.hexBlue})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-sm text-gray-700 max-w-xs text-center sm:text-center justify-center">
            <h6 className="text-[17px] font-semibold text-gray-800 leading-tight px-2">
              Partner with us and dominate search rankings in Dubai!
            </h6>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium"
            >
              Get a Free SEO Audit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
