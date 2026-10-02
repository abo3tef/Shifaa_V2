// Create a TypeScript interface for the navigation items
export interface NavItem {
  titleKey: string;
  href: string;
  icon?: React.ReactNode;
  subItems?: NavItem[];
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  { titleKey: "About Al-Shifaa", href: "#about" },
  { titleKey: "For Hospitals", href: "#ecosystem" },
  { titleKey: "For Doctors", href: "#ecosystem" },
  { titleKey: "Artificial Intelligence", href: "#ai" },
  { titleKey: "Features", href: "#features" },
  { titleKey: "How It Works", href: "#how-it-works" },
  { titleKey: "home", href: "#home" },
];
