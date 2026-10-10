import type { ReactNode } from "react";

const widths = {
  page: "max-w-page",
  text: "max-w-text",
  nav: "max-w-nav",
} as const;

/** Centers content at 87.5% of the window, up to a token width (docs/design/tokens.md). */
export function Container({
  size = "page",
  className = "",
  children,
}: {
  size?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-7/8 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
