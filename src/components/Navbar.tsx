"use client";

import Link from "next/link";
import { Scale, Globe2, Menu, X, Bell, ChevronDown, UserCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/verify", label: "Verify Claim" },
  { href: "/history", label: "History" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-8 lg:px-12"
    >
      <div className="mx-auto flex h-[82px] max-w-[1540px] items-center justify-between rounded-[25px] border border-white/65 bg-white/58 px-5 shadow-[0_18px_55px_rgba(28,55,105,.13)] backdrop-blur-2xl md:px-7">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <motion.span whileHover={{ rotate: -5, scale: 1.05 }} className="text-[#0b3da8]">
            <Scale size={42} strokeWidth={1.65} />
          </motion.span>
          <span className="hidden text-[16px] font-semibold leading-[1.18] tracking-[-.02em] text-[#091437] sm:block">
            Legal Misinformation<br />Detection System
          </span>
        </Link>

        <nav className="hidden h-full items-center gap-8 lg:flex">
          {links.map(({ href, label }) => {
            const active = href === "/" ? path === href : path.startsWith(href);
            return (
              <Link key={href} href={href} className={`relative flex h-full items-center px-1 text-[14px] font-medium transition ${active ? "text-[#0b3da8]" : "text-[#111b39] hover:text-[#0b3da8]"}`}>
                {label}
                {active && (
                  <motion.span layoutId="nav-indicator" className="absolute bottom-[15px] left-1/2 h-[2px] w-[52px] -translate-x-1/2 rounded-full bg-[#0b3da8]">
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b3da8]" />
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="flex items-center gap-2 rounded-full border border-white/75 bg-white/55 px-5 py-3 text-[13px] font-medium text-[#142044] shadow-sm backdrop-blur-xl">
            <Globe2 size={18} className="text-[#0b3da8]" /> English <ChevronDown size={15} className="text-[#0b3da8]" />
          </button>
          <button aria-label="Notifications" className="flex h-11 w-11 items-center justify-center rounded-full text-[#0b2d78] transition hover:bg-white/55">
            <Bell size={22} />
          </button>
          <div className="h-9 w-px bg-[#163d91]/12" />
          <button className="flex items-center gap-3 rounded-full pr-1 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white/70 text-[#0b3da8] shadow-sm"><UserCircle2 size={31} /></span>
            <span className="hidden xl:block"><span className="block text-[14px] font-semibold text-[#111b3d]">Vanayalini</span><span className="block text-[12px] text-[#52617e]">Student</span></span>
            <ChevronDown size={16} className="text-[#0b2d78]" />
          </button>
        </div>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-[#0b3da8] lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-3 max-w-[1540px] overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-2xl lg:hidden">
            {links.map(({ href, label }) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-medium text-[#172342] hover:bg-[#0b3da8]/5 hover:text-[#0b3da8]">{label}</Link>)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
