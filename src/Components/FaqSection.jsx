import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("general");

  const faqData = {
    general: [
{
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the effectiveness of the SEO strategy. Typically, you may start seeing noticeable improvements in rankings, traffic, and conversions within 3 to 6 months. However, more competitive industries may take 6 to 12 months or longer for significant results. Consistency and quality in SEO efforts are key to sustained growth.",
      },
      {
        question: "How do you measure the success of your SEO campaigns?",
        answer:
          "We track SEO success using key performance indicators (KPIs), such as:\n- Organic Traffic: The number of visitors from search engines.\n- Keyword Rankings: Improvements in rankings for targeted keywords.\n- Click-Through Rate (CTR): The percentage of users who click on search results.\n- Domain Authority & Backlinks: Growth in high-quality backlinks.\n- Conversions & ROI: The impact on leads, sales, or other business goals.\nWe use tools like Google Analytics, Google Search Console, SEMrush, and Ahrefs to monitor performance and provide detailed reports.",
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer:
          "On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. Think of it as optimizing the inside of your store.\n\nOff-Page SEO involves external factors that influence your rankings, such as backlinks, social media signals, and brand mentions. It’s like building your store’s reputation through word-of-mouth and partnerships.\nBoth are essential for a well-rounded SEO strategy.",
      },
      {
        question: "Do you provide technical SEO audits?",
        answer:
          "Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:\n- Website speed and performance analysis\n- Mobile-friendliness and Core Web Vitals assessment\n- Indexing and crawlability checks\n- Structured data and schema implementation\n- Fixing broken links, redirects, and duplicate content\nOur team ensures your website is technically optimized for better search engine visibility.",
      },
      {
        question: "Do you offer content marketing services as part of your SEO packages?",
        answer:
          "Yes, content marketing is an essential part of our SEO strategy. We provide:\n- SEO-optimized blog writing to improve organic traffic\n- Website content optimization for better engagement and rankings\n- Infographics, videos, and visual content to enhance user experience\n- Content strategy development based on keyword research and competitor analysis\nHigh-quality content plays a crucial role in ranking well on search engines, and we integrate it seamlessly with our SEO efforts.",
      },
      {
        question: "What kind of reporting do you provide?",
        answer:
          "We provide detailed, transparent, and data-driven reports, including:\n- Monthly SEO performance reports with traffic, rankings, and conversions\n- Google Analytics & Search Console insights\n- Backlink analysis and competitor comparisons\n- Recommendations for ongoing optimization\nOur reports ensure you understand how your SEO campaign is progressing and where improvements can be made.",
      },
      {
        question: "Do you offer SEO for E-commerce websites?",
        answer:
          "Yes, we specialize in E-commerce SEO to help online stores improve visibility and sales. Our services include:\n- Product page optimization for better rankings\n- Category structure and internal linking strategies\n- Technical SEO for platforms like Shopify, WooCommerce, and Magento\n- Schema markup for rich snippets (e.g., product reviews, pricing)\n- Conversion rate optimization (CRO) for better sales performance\nWe tailor our strategies to maximize organic traffic and revenue for e-commerce businesses.",
      },
    ],
    dubai: [
      {
        question: "Is SEO different in Dubai compared to other regions?",
        answer:
          "Yes, local SEO practices and competition vary. We optimize based on regional search behavior.",
      },
    ],
    pricing: [
      {
        question: "Do you offer flexible pricing packages?",
        answer:
          "Yes, we have packages tailored to different business sizes and needs.",
      },
    ],
    company: [
      {
        question: "How experienced is your SEO team?",
        answer:
          "Our team has over 10 years of experience across multiple industries.",
      },
    ],
  };

  
  const tabs = [
    { label: "General FAQ", id: "general" },
    { label: "Dubai-Specific SEO FAQs", id: "dubai" },
    { label: "Pricing & Process FAQs", id: "pricing" },
    { label: "Company & Expertise FAQs", id: "company" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      <div className="flex flex-wrap justify-evenly gap-6 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 text-md font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <AnimatePresence mode="wait">
          {faqData[activeTab].map((item, idx) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-lg shadow p-4 border border-gray-100"
            >
              <h3 className="font-semibold">{item.question}</h3>
              <p className="text-gray-600 text-sm mt-1 whitespace-pre-line">{item.answer}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
