import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "hi"] as const;
export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
