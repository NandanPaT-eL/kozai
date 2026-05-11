"use client";

import Badge from "./Badge";
import Button from "./Button";

export default function InvoiceCard() {
  return (
    <div className="animate-float w-full max-w-md bg-white border border-[#E8E8E4] rounded shadow-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E8E8E4] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1A1A1A] rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A1A1A]">Atlassian Pty Ltd</p>
            <p className="text-xs text-[#9B9B96] font-mono">ABN: 53 102 XXX XXX</p>
          </div>
        </div>
        <Badge variant="info">AI Extracted</Badge>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-[#9B9B96] uppercase tracking-wide">Invoice #</p>
            <p className="text-sm font-mono font-medium text-[#1A1A1A]">INV-2025-0042</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#9B9B96] uppercase tracking-wide">Amount</p>
            <p className="text-lg font-bold text-[#1A1A1A]">$4,400.00</p>
            <p className="text-xs text-[#9B9B96]">inc. GST</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#6B6B66]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BA7517]"></span>
          Awaiting Approval
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="primary" size="sm" className="w-full">
            Approve
          </Button>
          <Button variant="ghost" size="sm" className="w-full">
            Review
          </Button>
        </div>
      </div>
    </div>
  );
}
