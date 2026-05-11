"use client";

import Button from "./ui/Button";
import InvoiceCard from "./ui/InvoiceCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid-paper flex items-center pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1]">
                Stop drowning in{" "}
                <span className="relative inline-block">
                  invoices
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F25B5B]/20 -z-10"></span>
                </span>
                .
              </h1>
              <p className="text-lg sm:text-xl text-[#6B6B66] max-w-xl leading-relaxed">
                Kozai automates invoice processing, GST validation, and Xero sync for Australian accounting firms — with AI that works the way you do.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Get Early Access →
              </Button>
              <Button variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {[
                "Xero Certified Partner",
                "Australian GST Compliant",
                "SOC 2 Ready",
                "MYOB + QuickBooks Coming",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-sm text-[#6B6B66]">
                  <svg className="w-4 h-4 text-[#1D9E75]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="flex justify-center lg:justify-end">
            <InvoiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
