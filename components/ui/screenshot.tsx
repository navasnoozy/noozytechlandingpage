import Image from "next/image";

import type { Screenshot as ScreenshotData } from "@/content/home";

/**
 * An app screenshot with rounded corners and no device frame. Caps is
 * Android-only, so it's never shown on an iPhone (docs/design/principles.md).
 */
export function Screenshot({
  screen,
  sizes,
  className = "",
}: {
  screen: ScreenshotData;
  sizes: string;
  className?: string;
}) {
  return (
    <Image
      src={screen.src}
      alt={screen.alt}
      sizes={sizes}
      className={`rounded-card border border-line bg-surface-raised ${className}`}
    />
  );
}
