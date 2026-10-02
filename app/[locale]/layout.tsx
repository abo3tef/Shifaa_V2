import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const seoContent = {
  en: {
    title: "SHIFAA | Intelligent Patient Journey Platform",
    description:
      "SHIFAA connects patients, doctors, caregivers, hospitals, telemedicine, medical records, monitoring, and AI-assisted healthcare in one secure patient journey platform.",
    keywords: [
      "SHIFAA",
      "patient journey platform",
      "digital healthcare",
      "electronic medical records",
      "telemedicine",
      "health monitoring",
      "AI healthcare",
      "medication adherence",
    ],
    locale: "en_US",
    alternateLocale: "ar_EG",
  },
  ar: {
    title: "شفاء | منصة إدارة رحلة المريض الذكية",
    description:
      "شفاء منصة رعاية صحية رقمية تجمع المرضى والأطباء ومقدمي الرعاية والمستشفيات والسجلات الطبية والطب عن بُعد والمتابعة الذكية في رحلة علاجية متكاملة وآمنة.",
    keywords: [
      "شفاء",
      "رحلة المريض",
      "الرعاية الصحية الرقمية",
      "السجلات الطبية الإلكترونية",
      "الطب عن بعد",
      "مراقبة الحالة الصحية",
      "الذكاء الاصطناعي في الرعاية الصحية",
      "متابعة الأدوية",
    ],
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
} as const;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? seoContent.ar : seoContent.en;

  return {
    title: {
      default: content.title,
      template: `%s | SHIFAA`,
    },
    description: content.description,
    keywords: [...content.keywords],
    applicationName: "SHIFAA",
    category: "healthcare",
    classification: "Digital healthcare and patient journey management",
    creator: "SHIFAA Project Team",
    publisher: "SHIFAA",
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      siteName: "SHIFAA",
      title: content.title,
      description: content.description,
      locale: content.locale,
      alternateLocale: [content.alternateLocale],
    },
    twitter: {
      card: "summary",
      title: content.title,
      description: content.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--bg-color)] text-[var(--main-text-color)]">
        <SmoothScroll />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
