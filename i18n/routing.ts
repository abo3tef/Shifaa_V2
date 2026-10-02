import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ar", "en"],

  // Used when no locale matches
  defaultLocale: "ar",

  // Always start new visitors in Arabic instead of using the browser language.
  localeDetection: false,
});
