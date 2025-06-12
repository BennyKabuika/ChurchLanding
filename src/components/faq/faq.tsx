"use client";
import { useState } from "react";
import { FAQData } from "@/app/functions";
import { colors } from "@/app/color";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="bg-black text-white py-24 px-4 md:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-6">
        <span className="px-4 py-2 rounded-full border border-gray-700 text-white text-sm font-medium" style={{ background: colors.Primary3 }}>
          FAQ
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-instrument">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl w-full mx-auto space-y-6">
        {FAQData.map((faq) => (
          <div
            key={faq.id}
            className="rounded-2xl border border-gray-900 transition-shadow hover:shadow-lg"
            style={{ background: colors.Primary4 }}
          >
            <button
              className="flex items-center justify-between w-full px-6 py-5 focus:outline-none"
              onClick={() => handleToggle(faq.id)}
              aria-expanded={open === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="text-lg font-semibold text-left">{faq.question}</span>
              <span
                className={`ml-4 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                  open === faq.id
                    ? "bg-white text-black rotate-45"
                    : "bg-black text-white"
                }`}
                style={{ minWidth: 32, minHeight: 32 }}
              >
                {open === faq.id ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 px-6 ${
                open === faq.id
                  ? "max-h-40 py-2 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity, padding" }}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}