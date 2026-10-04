"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

function Banar() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    t("bannerItems.medicalRecords"),
    t("bannerItems.aiInsights"),
    t("bannerItems.remoteCare"),
    t("bannerItems.monitoring"),
    t("bannerItems.patientJourney"),
  ];

  const marqueeItems = [...items, ...items, ...items, ...items];

  const initialX = "0%";
  const targetX = isRtl ? "50%" : "-50%";

  return (
    <section
      aria-label={t("bannerLabel")}
      className="relative w-full overflow-hidden border-y border-[var(--border-color)] bg-[#0a101c] py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={
          isHovered
            ? { x: isRtl ? "25%" : "-25%" } // Move halfway when hovered
            : { x: [initialX, targetX] }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
        className="flex w-max items-center motion-reduce:animate-none"
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="flex shrink-0 items-center gap-14 px-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--main-text-muted-color)] sm:text-xs"
          >
            <span className="whitespace-nowrap">{item}</span>
            <FiStar
              size={13}
              strokeWidth={2.5}
              className="text-[var(--success-light)]"
              aria-hidden="true"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Banar;
