import { CapsShowcase } from "@/components/sections/caps-showcase";
import { ErpPreview } from "@/components/sections/erp-preview";
import { FounderContact } from "@/components/sections/founder-contact";
import { HomeHero } from "@/components/sections/home-hero";
import { Principles } from "@/components/sections/principles";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

// No title: the home page uses the root layout's default title.
export const metadata = pageMetadata({
  description: site.description,
  path: "/",
});

/*
 * Section backgrounds alternate so neighbours never match in either mode:
 * hero (surface) · Caps (alt / surface / alt) · ERP (dark band) ·
 * principles (alt) · founder and contact (surface) · footer (alt).
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapsShowcase />
      <ErpPreview />
      <Principles />
      <FounderContact />
    </>
  );
}
