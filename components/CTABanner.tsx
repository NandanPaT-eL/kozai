"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Failed to submit:", err);
    }
  };

  return (
    <section className="py-24 bg-[#F25B5B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to reclaim 10 hours a week?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Join the waitlist. We&apos;re onboarding Australian accounting firms now.
        </p>

        {submitted ? (
          <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
            <svg className="w-12 h-12 text-white mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white font-semibold">You&apos;re on the list!</p>
            <p className="text-white/70 text-sm mt-1">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@firm.com.au"
              required
              className="flex-1 px-4 py-3 rounded bg-white text-[#1A1A1A] placeholder-[#9B9B96] focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button type="submit" variant="white" size="md" className="whitespace-nowrap">
              Join Waitlist
            </Button>
          </form>
        )}

        <p className="text-sm text-white/60 mt-6">
          No credit card required. Australian data residency.
        </p>
      </div>
    </section>
  );
}
