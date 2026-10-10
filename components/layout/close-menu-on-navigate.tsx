"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The mobile menu is a native popover, so it opens and closes without
 * JavaScript. The layout stays mounted between pages, though, so this closes
 * the menu after a client-side navigation.
 */
export function CloseMenuOnNavigate({ menuId }: { menuId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const menu = document.getElementById(menuId);
    if (menu?.matches(":popover-open")) menu.hidePopover();
  }, [pathname, menuId]);

  return null;
}
