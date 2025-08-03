import React, { useState } from 'react';
import { steps } from '../Data/process';
import { motion, AnimatePresence } from 'framer-motion';

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <h2 className="font-grotesk text-3xl font-bold text-center mb-8">
        Our Comprehensive SEO Process
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-center">
        {/* Left Side - List */}
        <ul className="md:w-2/5 space-y-4">
          {steps.map((step, index) => (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer text-sm md:text-lg mb-6 font-medium transition-all 
                ${activeIndex === index ? 'text-violet-600 font-semibold' : 'text-gray-500'} 
                flex items-center gap-2`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-violet-600' : 'bg-gray-300'
                }`}
              ></span>
              {step.title}
            </li>
          ))}
        </ul>

        {/* Right Side - Detail with animation */}
        <div className="md:w-3/5 bg-violet-50 rounded-xl p-10 overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {steps[activeIndex].title}
              </h3>
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {steps[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
