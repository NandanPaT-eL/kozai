"use client";

import Card from "./ui/Card";
import Badge from "./ui/Badge";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#F25B5B] uppercase tracking-widest mb-4">Platform Modules</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
            Everything your finance team needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card - Invoice Processing */}
          <Card className="md:col-span-2 p-6 lg:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Invoice Processing Engine</h3>
                <p className="text-sm text-[#6B6B66]">Full OCR + AI extraction pipeline</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4]">
                <p className="text-xs text-[#9B9B96] uppercase">Extraction</p>
                <p className="text-sm font-medium text-[#1A1A1A]">PDF, scan & photo OCR</p>
              </div>
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4]">
                <p className="text-xs text-[#9B9B96] uppercase">Fields</p>
                <p className="text-sm font-medium text-[#1A1A1A]">Vendor, ABN, GST, totals</p>
              </div>
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4]">
                <p className="text-xs text-[#9B9B96] uppercase">Speed</p>
                <p className="text-sm font-medium text-[#1A1A1A]">&lt; 30 seconds per invoice</p>
              </div>
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4]">
                <p className="text-xs text-[#9B9B96] uppercase">Accuracy</p>
                <p className="text-sm font-medium text-[#1A1A1A]">99.2% field-level</p>
              </div>
            </div>
          </Card>

          {/* Validation Engine */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Validation Engine</h3>
                <p className="text-sm text-[#6B6B66]">Auto-checks before review</p>
              </div>
            </div>
            <div className="space-y-2">
              {["Duplicate detection", "GST correctness", "ABN validation", "Suspicious total flags"].map((check) => (
                <div key={check} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                  <svg className="w-4 h-4 text-[#1D9E75] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {check}
                </div>
              ))}
            </div>
          </Card>

          {/* Approval Workflows */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Approval Workflows</h3>
                <p className="text-sm text-[#6B6B66]">Rules-based automation</p>
              </div>
            </div>
            <div className="bg-[#FAFAF9] rounded border border-[#E8E8E4] p-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B6B66]">Amount &gt; $5,000</span>
                <Badge variant="success" className="text-[10px]">Manager</Badge>
              </div>
              <div className="h-px bg-[#E8E8E4]"></div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B6B66]">New vendor</span>
                <Badge variant="warning" className="text-[10px]">Finance</Badge>
              </div>
              <div className="h-px bg-[#E8E8E4]"></div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#6B6B66]">GST mismatch</span>
                <Badge variant="info" className="text-[10px]">Review</Badge>
              </div>
            </div>
          </Card>

          {/* Xero Integration */}
          <Card className="md:col-span-2 p-6 lg:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Xero Integration</h3>
                <p className="text-sm text-[#6B6B66]">Two-way sync, zero manual entry</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4] text-center">
                <p className="text-2xl font-bold text-[#1D9E75]">✓</p>
                <p className="text-xs text-[#6B6B66] mt-1">Vendor Sync</p>
              </div>
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4] text-center">
                <p className="text-2xl font-bold text-[#1D9E75]">✓</p>
                <p className="text-xs text-[#6B6B66] mt-1">Chart Mapping</p>
              </div>
              <div className="bg-[#FAFAF9] rounded p-3 border border-[#E8E8E4] text-center">
                <p className="text-2xl font-bold text-[#1D9E75]">✓</p>
                <p className="text-xs text-[#6B6B66] mt-1">Payment Status</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#6B6B66]">
              <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse"></span>
              Sync status: Connected to Xero — last sync 2 min ago
            </div>
          </Card>

          {/* GST & BAS */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">GST & BAS Compliance</h3>
                <p className="text-sm text-[#6B6B66]">Australia-specific</p>
              </div>
            </div>
            <div className="space-y-2">
              <Badge variant="success">ATO Compliant</Badge>
              <p className="text-sm text-[#6B6B66]">Automatic GST code assignment, BAS-ready reporting, and ABN verification against the Australian Business Register.</p>
            </div>
          </Card>

          {/* Multi-tenant */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded bg-[#F25B5B]/10 flex items-center justify-center text-[#F25B5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">Multi-tenant SaaS</h3>
                <p className="text-sm text-[#6B6B66]">Built for firms</p>
              </div>
            </div>
            <p className="text-sm text-[#6B6B66]">
              Built for accounting firms managing 50+ clients. Firm-level dashboards, client isolation, and white-label options.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl font-bold text-[#1A1A1A]">50+</span>
              <span className="text-sm text-[#6B6B66]">clients per firm</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
