"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function SlutionShifaa() {
  const t = useTranslations("HomePage");
  const modules = [
    {
      label: t("solution.modules.connected.label"),
      title: t("solution.modules.connected.title"),
      description: t("solution.modules.connected.description"),
    },
    {
      label: t("solution.modules.clear.label"),
      title: t("solution.modules.clear.title"),
      description: t("solution.modules.clear.description"),
    },
    {
      label: t("solution.modules.proactive.label"),
      title: t("solution.modules.proactive.title"),
      description: t("solution.modules.proactive.description"),
    },
    {
      label: t("solution.modules.secure.label"),
      title: t("solution.modules.secure.title"),
      description: t("solution.modules.secure.description"),
    },
  ];

  return (
    <section className="w-full border-t border-[var(--border-color)] bg-[#151a22] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <span className="inline-flex rounded-full border border-[var(--border-color)] bg-[var(--cart-item-background)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--main-text-muted-color)]">
            {t("solution.eyebrow")}
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] text-[var(--main-text-color)] sm:text-6xl lg:text-7xl">
            {t("solution.headingStrong")} <br />
            <span className="font-serif font-normal italic text-[var(--success-light)]">
              {t("solution.headingAccent")}
            </span>{" "}
            {t("solution.headingEnd")}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--main-text-muted-color)] sm:text-base">
            {t("solution.description")}
          </p>
        </motion.div>

        <div className="mt-14 grid overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[var(--cart-item-background)] sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <motion.article
              key={module.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "rgba(15, 169, 104, 0.07)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="min-h-60 border-b border-[var(--border-color)] p-7 transition-colors last:border-b-0 sm:border-e sm:odd:border-b lg:min-h-64 lg:border-b-0 lg:last:border-e-0"
            >
              <span className="font-mono text-xs font-bold tracking-[0.16em] text-[var(--success-light)]">
                {module.label}
              </span>
              <h3 className="mt-12 text-lg font-bold text-[var(--main-text-color)]">
                {module.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--main-text-muted-color)]">
                {module.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SlutionShifaa;
