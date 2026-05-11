"use client";

import { testimonials } from "@/lib/constants";
import Card from "./ui/Card";

const metrics = [
  { value: "400+", label: "Invoices Processed" },
  { value: "99.2%", label: "Extraction Accuracy" },
  { value: "6 hrs", label: "Saved Per Week" },
  { value: "Auto", label: "GST Validated" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F25B5B] uppercase tracking-widest mb-4">Built for Australia</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Trusted by accounting firms who hate manual work.
          </h2>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-6 bg-[#FAFAF9] border border-[#E8E8E4] rounded">
              <p className="text-3xl font-bold text-[#1A1A1A]">{metric.value}</p>
              <p className="text-sm text-[#6B6B66] mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.author} className="p-6 flex flex-col">
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#F25B5B]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#1A1A1A] leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div className="border-t border-[#E8E8E4] pt-4">
                <p className="font-semibold text-[#1A1A1A]">{t.author}</p>
                <p className="text-sm text-[#6B6B66]">{t.role}, {t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
