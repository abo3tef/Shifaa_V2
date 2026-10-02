"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";
import { buttonVariants } from "../../../../components/ui/button";
import { cn } from "../../../../lib/utils";
import { FADE_IN_UP } from "../../../../constants/animations";
import { HeroDashboardPreview } from "./hero-dashboard-preview";

function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative isolate flex min-h-[calc(100svh-9rem)] w-full items-center justify-center overflow-hidden px-4 pb-5 pt-20 sm:px-8 lg:pt-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-32 -start-40 size-100 rounded-full bg-[var(--success)]/50 blur-[150px]" />
      <div className="pointer-events-none absolute -top-32 -end-40 size-100 rounded-full bg-[var(--success)]/50 blur-[150px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--cart-item-background)] px-3 py-1.5 text-xs font-semibold text-[var(--main-text-muted-color)] shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
        >
          <span className="size-1.5 rounded-full bg-[var(--success)]" />
          {t("eyebrow")}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-normal text-[var(--main-text-color)] sm:text-5xl lg:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-4 max-w-2xl text-sm leading-6 text-[var(--main-text-muted-color)] sm:text-base"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_IN_UP}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "start", size: "lg" }))}
          >
            {t("register")}
          </Link>
          <Link
            href="/features"
            className={cn(buttonVariants({ variant: "explore", size: "lg" }))}
          >
            {t("explorePlatform")}
          </Link>
        </motion.div>

        <HeroDashboardPreview />
      </div>
    </section>
  );
}

export default Hero;
