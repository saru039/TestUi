import { assets } from "../assets/Assets";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const SocialLink = () => {
  return (
    <div className="bg-[#2e1f59] text-white text-center py-10 px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-grotesk text-2xl md:text-3xl font-semibold mb-6"
      >
        Our Experience Extends Across All Social Media Channels, <br />
        Ensuring Your Complete Presence
      </motion.h2>

      <motion.div
        className="flex justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: assets.twitter, link: "#", z: "z-40" },
          { icon: assets.linkedin, link: "#", z: "z-30" },
          { icon: assets.instagram, link: "#", z: "z-20" },
          { icon: assets.facebook, link: "#", z: "z-10" },
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            variants={iconVariants}
            className={`w-14 h-14 bg-white text-black flex items-center justify-center rounded-full shadow-md border border-black transition-all hover:scale-105
              ${idx !== 0 ? "-ml-1" : ""} ${item.z}`}
          >
            <img src={item.icon} alt="social icon" className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLink;
