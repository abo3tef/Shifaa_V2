"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../../types/nav";
import { Button } from "../ui/button";
import LanguageSwitcher from "./language-switcher";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const orderedNavItems = locale === "ar" ? [...navItems].reverse() : navItems;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 left-1/2 z-50 flex w-[calc(100%-1rem)] max-w-[1280px] -translate-x-1/2 items-center gap-2 rounded-[28px] border border-[var(--border-color)] bg-[var(--cart-item-background)] px-2 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md sm:top-4 sm:w-[calc(100%-2rem)] sm:gap-4 sm:px-3"
    >
      <div
        className="flex w-auto min-w-[100px] shrink-0 items-center justify-start gap-2 px-2 lg:w-[116px]"
        aria-label="Logo placeholder"
      >
        <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--success-light)] to-[var(--success)] text-lg font-bold text-white">
          <Image src="/logo/logo2.png" alt="Logo" width={32} height={32} />
        </span>
        <span className="inline text-lg font-extrabold text-[var(--main-text-color)] sm:text-xl">
          {t("SHIFAA")}
        </span>
      </div>

      <ul className="hidden min-w-0 flex-1 flex-nowrap items-center justify-evenly gap-2 md:flex lg:gap-3 xl:gap-4">
        {orderedNavItems.map((item) => (
          <li key={item.titleKey} className="shrink-0">
            <a
              href={item.href}
              className="whitespace-nowrap text-xs font-semibold text-[var(--main-text-muted-color)] transition-colors hover:text-[var(--success-light)] sm:text-sm"
            >
              {t(item.titleKey)}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden shrink-0 items-center gap-2 pl-1 md:flex">
        <LanguageSwitcher />
        <Button variant="explore" className="hidden md:inline-flex">
          {t("explorePlatform")}
        </Button>
        <Button variant="start" className="h-10 px-6">
          {t("register")}
        </Button>
      </div>
      {/* Mobile menu button */}
      <div className="absolute end-2 top-1/2 flex -translate-y-1/2 items-center gap-1 md:hidden">
        <LanguageSwitcher />
        <Button
          type="button"
          variant="language"
          size="icon"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="border-transparent px-0 hover:border-[var(--success)]"
        >
          {isMenuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute top-[calc(100%+0.5rem)] left-0 right-0 overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[var(--cart-item-background)] p-3 shadow-[0_12px_24px_rgba(0,0,0,0.2)] md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {orderedNavItems.map((item, index) => (
                <motion.li
                  key={item.titleKey}
                  initial={{ opacity: 0, x: locale === "ar" ? 16 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--main-text-muted-color)] transition-colors hover:bg-[var(--success)]/10 hover:text-[var(--success-light)]"
                  >
                    {t(item.titleKey)}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[var(--border-color)] pt-3">
              <Button variant="explore" className="h-10 px-3 text-xs">
                {t("explorePlatform")}
              </Button>
              <Button variant="start" className="h-10 px-3 text-xs">
                {t("register")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
