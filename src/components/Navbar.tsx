"use client";

import Link from "next/link";
import { Scale, Globe2, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Language, useLanguage } from "@/context/LanguageContext";

const links = [
  { href: "/", key: "dashboard" as const },
  { href: "/verify", key: "verifyClaim" as const },
  { href: "/history", key: "history" as const },
  { href: "/admin", key: "admin" as const },
];

const languageOptions: { code: Language; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ta", label: "தமிழ்", short: "TA" },
  { code: "si", label: "සිංහල", short: "SI" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selectedLanguage = languageOptions.find((item) => item.code === language)!;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-[#123a8f]/10 bg-white/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: -6, scale: 1.05 }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#08245e] to-[#1c4fb6] text-white shadow-lg shadow-[#123a8f]/15"
          >
            <Scale size={24} />
          </motion.span>
          <span className="max-w-[190px] text-[12px] font-semibold leading-[1.25] tracking-wide text-[#0b1739]">
            {t("systemName")}
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map(({ href, key }) => {
            const active = href === "/" ? path === href : path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-xl px-4 py-2.5 text-[13px] font-medium transition ${
                  active
                    ? "text-[#123a8f]"
                    : "text-[#66728c] hover:bg-[#123a8f]/5 hover:text-[#123a8f]"
                }`}
              >
                {t(key)}
                {active && (
                  <motion.span
                    layoutId="nav"
                    className="absolute inset-x-4 -bottom-[18px] h-[2px] rounded-full bg-[#123a8f]"
                  />
                )}
              </Link>
            );
          })}

          <div ref={languageMenuRef} className="relative ml-3">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-expanded={languageOpen}
              aria-label="Change language"
              className="flex min-w-[128px] items-center justify-between gap-2 rounded-xl border border-[#123a8f]/12 bg-white/80 px-4 py-2.5 text-sm font-medium text-[#243458] shadow-sm transition hover:border-[#123a8f]/25 hover:bg-white"
            >
              <span className="flex items-center gap-2">
                <Globe2 size={16} className="text-[#123a8f]" />
                {selectedLanguage.label}
              </span>
              <ChevronDown
                size={15}
                className={`transition-transform ${languageOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-[calc(100%+10px)] w-[190px] overflow-hidden rounded-2xl border border-[#123a8f]/10 bg-white/95 p-2 shadow-[0_18px_50px_rgba(15,48,105,0.16)] backdrop-blur-2xl"
                >
                  {languageOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLanguage(item.code);
                        setLanguageOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                        language === item.code
                          ? "bg-[#123a8f]/8 font-semibold text-[#123a8f]"
                          : "text-[#33415f] hover:bg-[#123a8f]/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-[#8a96ae]">
                        {item.short}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="text-[#123a8f] md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#123a8f]/10 bg-white/95 px-5 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {links.map(({ href, key }) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-3 text-sm text-[#33415f] hover:bg-[#123a8f]/6 hover:text-[#123a8f]"
                >
                  {t(key)}
                </Link>
              ))}
              <div className="mt-2 border-t border-[#123a8f]/10 pt-3">
                <div className="mb-2 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a96ae]">
                  <Globe2 size={14} /> Language
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {languageOptions.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => setLanguage(item.code)}
                      className={`rounded-xl border px-2 py-2.5 text-xs font-medium transition ${
                        language === item.code
                          ? "border-[#123a8f]/20 bg-[#123a8f] text-white"
                          : "border-[#123a8f]/10 bg-white text-[#33415f]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
