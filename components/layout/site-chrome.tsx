"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./navbar";

export function SiteChrome() {
  const pathname = usePathname();
  const isDashboard = /\/(patient|doctor)\/dashboard\/?$/.test(pathname);

  if (isDashboard) return null;

  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname();
  const isDashboard = /\/(patient|doctor)\/dashboard\/?$/.test(pathname);

  if (isDashboard) return null;

  return <Footer />;
}
