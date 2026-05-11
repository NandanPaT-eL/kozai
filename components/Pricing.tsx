"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#F25B5B] uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
            Simple, transparent pricing.
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#E8E8E4] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !annual ? "bg-[#1A1A1A] text-white" : "text-[#6B6B66] hover:text-[#1A1A1A]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                annual ? "bg-[#1A1A1A] text-white" : "text-[#6B6B66] hover:text-[#1A1A1A]"
              }`}
            >
              Annual
              <span className="text-[10px] bg-[#1D9E75] text-white px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 flex flex-col ${
                plan.popular ? "border-[#F25B5B] ring-1 ring-[#F25B5B]/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F25B5B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#1A1A1A]">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-4xl font-bold text-[#1A1A1A]">
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-[#6B6B66]">/mo AUD</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-[#1A1A1A]">Custom</span>
                  )}
                </div>
                {plan.monthlyPrice && annual && (
                  <p className="text-sm text-[#9B9B96] mt-1">
                    Billed annually (${(plan.annualPrice || 0) * 12}/year)
                  </p>
                )}
                <p className="text-sm text-[#6B6B66] mt-3">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]">
                    <svg className="w-4 h-4 text-[#1D9E75] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "primary" : "ghost"}
                size="md"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-[#9B9B96] mt-8">All prices in AUD. GST not included.</p>
      </div>
    </section>
  );
}
