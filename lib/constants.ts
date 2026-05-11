export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "Up to 500 invoices/month, 1 Xero connection, email support",
    features: [
      "500 invoices/month",
      "1 Xero organisation",
      "Email support",
      "Basic OCR extraction",
      "GST validation",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 349,
    annualPrice: 279,
    description: "Up to 2,000 invoices/month, 3 Xero connections, approval workflows, priority support",
    features: [
      "2,000 invoices/month",
      "3 Xero organisations",
      "Approval workflows",
      "Priority support",
      "Advanced AI extraction",
      "Custom chart of accounts mapping",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Unlimited invoices, multi-firm, white-label, dedicated onboarding",
    features: [
      "Unlimited invoices",
      "Unlimited Xero orgs",
      "Multi-firm dashboard",
      "White-label options",
      "Dedicated onboarding",
      "SLA & custom contracts",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const testimonials = [
  {
    quote: "Finally an AP tool that understands GST. We processed 400 invoices in our first week without a single manual entry.",
    author: "Sarah M.",
    role: "Senior Bookkeeper",
    company: "Melbourne",
  },
  {
    quote: "The Xero push alone saves us 6 hours a week. Our clients love the audit trail.",
    author: "James T.",
    role: "Director",
    company: "Brisbane Accounting Co.",
  },
  {
    quote: "Kozai flagged 3 duplicate invoices in our first batch. It paid for itself immediately.",
    author: "Priya N.",
    role: "Finance Manager",
    company: "Sydney",
  },
];

export const painPoints = [
  {
    icon: "envelope",
    title: "Invoices lost in email",
    description: "accounts@, ap@, invoices@ inboxes pile up with no structured processing.",
  },
  {
    icon: "pencil",
    title: "Manual data entry errors",
    description: "Typing invoice numbers, ABNs, and GST amounts by hand causes costly mistakes.",
  },
  {
    icon: "clock",
    title: "Slow approval cycles",
    description: "Chasing down manager approvals via Slack or email kills your month-end close.",
  },
  {
    icon: "warning",
    title: "GST compliance risk",
    description: "Missing or incorrect GST on invoices creates BAS headaches and ATO exposure.",
  },
  {
    icon: "puzzle",
    title: "Xero sync nightmares",
    description: "Manual entry into Xero burns hours and introduces duplicate bills.",
  },
  {
    icon: "chart",
    title: "Zero visibility",
    description: "No centralised view of what's been processed, approved, or reconciled.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Email Ingestion",
    description: "Kozai monitors accounts@, ap@, and invoices@ inboxes. Every invoice email is captured automatically.",
    icon: "mail",
  },
  {
    number: "02",
    title: "OCR + AI Extraction",
    description: "Our AI reads PDFs, scans, and photos. Extracts vendor, ABN, invoice number, GST, line items, and totals.",
    icon: "scan",
  },
  {
    number: "03",
    title: "Validation Engine",
    description: "Duplicate detection, GST correctness checks, ABN validation, and suspicious total flags — before any human sees it.",
    icon: "shield",
  },
  {
    number: "04",
    title: "Human Review Dashboard",
    description: "Your team reviews AI suggestions with confidence scores. One click to approve, correct, or escalate.",
    icon: "layout",
  },
  {
    number: "05",
    title: "Approval Workflows",
    description: "Rules like 'invoices over $5,000 require manager sign-off' run automatically. No more chasing.",
    icon: "check-circle",
  },
  {
    number: "06",
    title: "Xero Sync",
    description: "Approved invoices push directly to Xero as bills. Vendor sync, chart of accounts mapping, payment status.",
    icon: "refresh",
  },
  {
    number: "07",
    title: "Reconciliation",
    description: "Kozai matches invoices to bank transactions. AI-assisted categorisation closes the loop.",
    icon: "link",
  },
];
