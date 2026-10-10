import type { Metadata } from "next";

import { CapsShowcase } from "@/components/sections/caps-showcase";
import { HomeHero } from "@/components/sections/home-hero";

// The title and description come from the root layout's defaults.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapsShowcase />
    </>
  );
}
