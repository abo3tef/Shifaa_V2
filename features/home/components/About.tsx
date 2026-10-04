"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiLock, FiShield, FiStar } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { buttonVariants } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";

function About() {
  const t = useTranslations("HomePage");
  const trustPoints = [
    t("about.points.privacy"),
    t("about.points.clarity"),
    t("about.points.continuity"),
    t("about.points.control"),
  ];

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 bg-[var(--bg-color)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-[var(--success)]/25 bg-gradient-to-br from-[#0d6047] via-[#19ae76] to-[#8be1bb] px-6 py-14 text-center shadow-[0_30px_90px_rgba(15,169,104,0.18)] sm:px-10 lg:px-16 lg:py-20"
      >
        <div className="pointer-events-none absolute -end-28 -top-28 size-72 rounded-full bg-white/15 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-36 -start-24 size-80 rounded-full bg-[#04291f]/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
            <span className="size-1.5 rounded-full bg-white" />
            {t("about.eyebrow")}
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {t("about.heading")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {t("about.description")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {trustPoints.map((point, index) => (
              <motion.span
                key={point}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-xs font-semibold text-white/90"
              >
                {point}
              </motion.span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "explore", size: "lg" }),
                "border-white/40 bg-white/10 text-white hover:bg-white hover:text-[#0d6047]",
              )}
            >
              {t("explorePlatform")}
              <FiArrowUpRight size={16} />
            </Link>
            <Link
              href="/for-patients"
              className={cn(
                buttonVariants({ variant: "start", size: "lg" }),
                "bg-white text-[#0d6047] hover:bg-white/85",
              )}
            >
              {t("register")}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-white/75">
            <span className="flex items-center gap-2">
              <FiShield size={16} />
              {t("about.secure")}
            </span>
            <span className="flex items-center gap-2">
              <FiLock size={15} />
              {t("about.private")}
            </span>
            <span className="flex items-center gap-2">
              <FiStar size={15} />
              {t("about.smart")}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
