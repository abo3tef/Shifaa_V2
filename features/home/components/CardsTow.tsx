"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cards } from "../types/cards";
function CardsTow() {
  const t = useTranslations("HomePage");

  return (
    <section className="w-full bg-[var(--bg-color)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-[var(--border-color)] bg-[var(--cart-item-background)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--main-text-muted-color)]">
            {t("problem.eyebrow")}
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-[var(--main-text-color)] sm:text-5xl lg:text-6xl">
            {t("problem.headingStrong")}{" "}
            <span className="font-serif font-normal italic text-[var(--main-text-muted-color)]">
              {t("problem.headingAccent")}
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 28, rotate: card.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: card.rotation }}
              whileHover={{ y: -14, rotate: 0, scale: 1.025 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`min-h-52 rounded-[22px] ${card.color} p-6 text-start text-[#111827] shadow-[0_14px_26px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_42px_rgba(0,0,0,0.24)]`}
            >
              <span className="font-mono text-xs tracking-[0.18em] text-[#5f6672]">
                {card.number}
              </span>
              <h3 className="mt-9 text-lg font-extrabold leading-tight">
                {t(card.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#3e4a5d]">
                {t(card.descriptionKey)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsTow;
