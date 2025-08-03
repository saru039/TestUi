import React, { useEffect, useState } from "react";
import { assets } from "../assets/Assets.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactCard() {
  const [isMobile, setIsMobile] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className="w-full px-4 sm:px-8 md:px-8"
    >
      <div
        className="max-w-6xl mx-auto rounded-3xl bg-[#ea7d30] bg-opacity-90 p-8 sm:p-10 md:p-10 overflow-hidden relative"
        style={{
          backgroundImage: isMobile ? "none" : `url(${assets.bgcover})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: isMobile ? "bottom center" : "50em top",
        }}
      >
        <div className="w-full lg:w-3/4">
          <h2 className="font-grotesk text-2xl sm:text-3xl md:text-3xl font-semibold mb-4 text-white">
            Ready to Grow Your Business with SEO in Dubai?
          </h2>
          <p className="text-sm md:text-base mb-2 text-white/90">
            Don’t let your competitors outrank you. Take the first step toward
            higher rankings, more traffic, and increased revenue with our
            expert SEO services.
          </p>
          <h3 className="text-lg font-semibold mb-2 text-white">
            Get a Free SEO Audit Today!
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-white text-sm">
              <img className="w-3 h-3 mt-2" src={assets.white_list} alt="" />
              Personalized strategy for your business
            </li>
            <li className="flex items-start gap-2 text-white text-sm">
              <img className="w-3 h-3 mt-2" src={assets.white_list} alt="" />
              Competitor analysis & keyword opportunities
            </li>
            <li className="flex items-start gap-2 text-white text-sm">
              <img className="w-3 h-3 mt-2" src={assets.white_list} alt="" />
              No-obligation consultation with an SEO expert
            </li>
          </ul>

          <div className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
            <div className="w-full md:w-1/2 lg:w-1/3 border-2 border-white rounded-lg p-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white text-sm">
                  <img className="w-5 h-5 mt-1" src={assets.phone} alt="" />
                  +971 52 283 1655
                </li>
                <li className="flex items-start gap-2 text-white text-sm">
                  <img className="w-5 h-5 mt-1" src={assets.email} alt="" />
                  info@brandstory.ae
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 border-2 border-white rounded-lg p-4">
              <ul>
                <li className="flex items-start gap-2 text-white text-sm">
                  <img className="w-5 h-5 mt-1" src={assets.location} alt="" />
                  G5, Al Meheri Plaza, opp DBC Building, Al Khabaisi Area, Deira
                  Dubai - 81577, United Arab Emirates
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-[#7c3aed] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6d28d9] transition">
            Request a Free SEO Audit
          </button>

          <p className="mt-6 text-white text-lg font-medium">
            Limited-Time Offer: Get a FREE SEO strategy session when you sign
            up this month!
          </p>
        </div>

        <div className="hidden md:block absolute -top-10 -right-10">
          <div className="w-[300px] h-[300px] bg-gradient-to-tr from-[#fcd34d] via-transparent to-transparent rounded-full opacity-30"></div>
        </div>
      </div>
    </motion.div>
  );
}
