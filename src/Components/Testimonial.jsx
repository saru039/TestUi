import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../Data/testimonial";
import { assets } from "../assets/Assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-10 text-center">
      <h2 className="font-grotesk text-3xl font-bold mb-2">What Our Clients Say</h2>
      <p className="text-gray-500 mb-8">
        Real businesses. Real results. See how our Dubai SEO strategies have
        helped brands grow.
      </p>

      <motion.div
        ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={controls}
        className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        <button
          onClick={prev}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="w-full md:basis-2/5 flex justify-center">
          <img
            src={current.image}
            alt="Client"
            className="w-full h-auto object-cover rounded-xl max-h-64"
          />
        </div>

        <div className="w-full md:basis-3/5 text-left">
          <h3 className="text-xl font-semibold mb-1">{current.title}</h3>
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium">Client:</span> {current.client}
          </p>
          <div className="text-sm text-gray-700 mb-4">
            <span className="font-medium">Results:</span>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {current.results.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="text-purple-600 mt-4">
            <img src={assets.quote} alt="quote" />
            <p className="text-sm text-gray-500 mt-2">{current.quote}</p>
          </div>
          <p className="text-md font-semibold mt-2">{current.name}</p>
        </div>

        <button
          onClick={next}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Want to see similar results for your business?
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-[#7c3aed] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6d28d9] transition"
      >
        Get a Free SEO Audit
      </motion.button>
    </div>
  );
}
