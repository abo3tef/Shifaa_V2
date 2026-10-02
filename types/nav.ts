// Create a TypeScript interface for the navigation items
export interface NavItem {
  titleKey: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: NavItem[];
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  { titleKey: "About Al-Shifaa", href: "/about-al-shifaa" },
  { titleKey: "For Hospitals", href: "/for-hospitals" },
  { titleKey: "For Doctors", href: "/for-doctors" },
  { titleKey: "Artificial Intelligence", href: "/artificial-intelligence" },
  { titleKey: "Features", href: "/features" },
  { titleKey: "How It Works", href: "/how-it-works" },
  { titleKey: "home", href: "/" },
];
