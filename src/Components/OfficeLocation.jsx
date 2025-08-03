import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { locations } from "../Data/location.js";
import { assets } from "../assets/Assets.js";
import { motion } from "framer-motion";

export default function MapWithCarousel() {
  const swiperRef = useRef(null);

  const handleMarkerClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full bg-white px-6 md:px-16 lg:px-32 pb-16 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mt-14 sm:m-14 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-grotesk text-2xl sm:text-3xl font-bold mb-4 text-center">
          Serving Businesses Across Dubai
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mb-8 text-justify mx-auto">
          As a leading SEO company in Dubai, we understand the unique digital landscape of the city’s diverse business hubs. Whether you’re a luxury retailer in Downtown Dubai, a tech startup in Business Bay, or a restaurant in Dubai Marina, our Dubai-focused SEO strategies ensure you stand out in local search results.
        </p>

        <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Our Key Service Areas in Dubai
        </h4>
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={assets.map}
          alt="Dubai Map"
          className="w-full h-full object-cover"
        />

        {/* Location markers */}
        {locations.map((loc, i) => (
          <motion.button
            key={i}
            onClick={() => handleMarkerClick(i)}
            className={`absolute text-white px-2 py-1 text-xs sm:text-sm rounded-md shadow-md whitespace-nowrap cursor-pointer hover:scale-105 transition-transform duration-200 ${loc.position.color}`}
            style={{
              top: loc.position.top,
              left: loc.position.left,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {loc.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="pt-8 sm:pt-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          loop={true}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {locations.map((loc, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full sm:w-1/3 h-40 sm:h-auto object-cover"
                />
                <div className="p-4 w-full sm:w-2/3">
                  <h3 className="font-semibold text-md mb-2">{loc.name}</h3>
                  <p className="text-xs text-gray-600">{loc.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
