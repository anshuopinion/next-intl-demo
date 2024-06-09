"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";
export default function Home() {
  const locale = useLocale();
  const pathname = usePathname();

  const router = useRouter();
  const t = useTranslations();

  const changeLanguageHandler = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <main className="p-20">
      <div className="flex gap-4">
        <button
          className="p-2 bg-teal-600 text-white"
          onClick={() => changeLanguageHandler("hi")}
        >
          {t("lang.hindi")}
        </button>
        <button
          className="p-2 bg-teal-600 text-white"
          onClick={() => changeLanguageHandler("en")}
        >
          {t("lang.english")}
        </button>
      </div>
      <h1 className="text-2xl">{t("Home.title")}</h1>
      <p>{t("Home.welcome")}</p>

      <button className="p-4 bg-red-500 text-white">
        {t("Home.subscribe")}
      </button>
    </main>
  );
}
