import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Keelean laundry service work?",
    answer:
      "You schedule a pickup through our website or app. Our team collects your clothes, cleans them using fabric-safe methods, and delivers them back to your doorstep.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Standard delivery takes 24–48 hours. Express delivery options may be available in selected locations.",
  },
  {
    question: "Is pickup and delivery free?",
    answer:
      "Yes, Keelean provides free pickup and delivery for all standard laundry orders.",
  },
  {
    question: "Are my clothes safe with Keelean?",
    answer:
      "Absolutely. We follow hospital-grade hygiene, fabric-specific washing, and strict quality checks to ensure safety.",
  },
  {
    question: "Can I track my laundry order?",
    answer:
      "Yes, you can track your order in real time from the Track Order section on our website or mobile app.",
  },
  {
    question: "What if I have an issue with my order?",
    answer:
      "Our customer support team is available to help. You can contact us through the support page or live chat.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our laundry services.
          </p>
        </div>
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300
                ${isOpen ? "border-gray-400 shadow-md" : "border-gray-200 hover:shadow-sm"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300
                    ${isOpen ? "rotate-180 text-gray-800" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden px-6 pb-2 text-gray-600 leading-relaxed">
                    <div className="h-px bg-gray-200 mb-4" />
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
