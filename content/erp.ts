import { site } from "@/lib/site";

/*
 * Fire & Safety ERP page copy. The product is in development: future tense
 * only, no dates, prices, customers, launch country or screenshots
 * (docs/product/fire-safety-erp.md, decision 0006).
 */

const earlyAccessHref = `mailto:${site.email.company}?subject=${encodeURIComponent("Fire & Safety ERP early access")}`;

export const erp = {
  title: "Fire & Safety ERP",
  description:
    "An ERP for fire & safety companies, in development at NoOzyTech: projects, maintenance contracts, scheduling, stock, billing and compliance in one system.",
  tagline: "An enterprise solution for fire & safety companies.",
  status: "In development",
  earlyAccess: { label: "Request early access", href: earlyAccessHref },
  audience: {
    headline: "Built for how fire & safety companies work.",
    text: "Fire & safety companies install and maintain fire protection systems. Many run projects, maintenance contracts and supply at the same time. We’re building one system for all three, instead of a separate tool for each.",
  },
  modules: {
    headline: "What it will cover",
    items: [
      {
        title: "Projects",
        text: "From enquiry and estimate to installation, testing, commissioning and handover.",
      },
      {
        title: "Maintenance contracts and service",
        text: "Planned visits with checklists, breakdown calls, and service reports with photos and customer signatures.",
      },
      {
        title: "Sales",
        text: "Quotations with bills of quantities, costs and margins, and internal approval.",
      },
      {
        title: "Scheduling",
        text: "A dispatch board for technicians and teams.",
      },
      {
        title: "Stock and purchasing",
        text: "Suppliers, purchase orders, and stock in stores, vans and on site.",
      },
      {
        title: "Billing",
        text: "Tax invoices, credit notes, receipts and statements.",
      },
      {
        title: "Compliance",
        text: "Equipment records, open defects and certificates for every building.",
      },
    ],
  },
  closing: {
    headline: "Be one of the first to use it.",
    text: "The ERP is still being built. If you run a fire & safety company and would like early access, email us and tell us a little about your work.",
  },
};
