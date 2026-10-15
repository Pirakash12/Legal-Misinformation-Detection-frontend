"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, BriefcaseBusiness, House, ShoppingCart, Scale, ShieldCheck, FileText, History } from "lucide-react";

const domains = [
  { icon: BriefcaseBusiness, title: "Employment Law", text: "Workplace rights, termination, salaries and labour regulations." },
  { icon: House, title: "Property & Rental Law", text: "Land, property ownership and rental agreements." },
  { icon: ShoppingCart, title: "Consumer Rights", text: "Consumer protection, product safety and service complaints." },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef3fb] pt-[122px]">
      {/* Blurred photographic backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-[-28px] bg-[url('/images/justice-background.jpg')] bg-cover bg-center opacity-[.58] blur-[10px] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/68 to-[#dce7fb]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/20" />
      </div>

      <section className="relative z-10 mx-auto grid min-h-[560px] max-w-[1540px] grid-cols-1 items-center gap-8 px-7 pb-5 pt-12 md:px-12 lg:grid-cols-[1.03fr_.97fr] lg:px-20">
        <motion.div initial={{ opacity: 0, x: -38 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, ease: "easeOut" }} className="relative z-20">
          <div className="mb-7 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[.30em] text-[#263a67]">
            <span className="h-[3px] w-11 rounded-full bg-[#0b3da8]" /> TRUTH <span>•</span> JUSTICE <span>•</span> AWARENESS
          </div>

          <h1 className="max-w-[760px] text-[52px] font-semibold leading-[1.02] tracking-[-.05em] text-[#080f2c] md:text-[68px] xl:text-[78px]">
            Legal Misinformation<br /><span className="text-[#0b3da8]">Detection System</span>
          </h1>
          <p className="mt-5 max-w-[590px] text-[22px] leading-[1.45] tracking-[-.02em] text-[#43516e] md:text-[25px]">
            Verify Sri Lankan legal claims with<br className="hidden md:block" /> evidence, not assumptions.
          </p>
          <div className="mt-7 h-[3px] w-12 rounded-full bg-[#0b3da8]" />

          <div className="mt-8 flex flex-wrap gap-5">
            <Link href="/verify" className="flex min-w-[275px] items-center justify-center gap-5 rounded-[16px] bg-gradient-to-r from-[#0b3da8] to-[#0d49c7] px-8 py-[19px] text-[16px] font-medium text-white shadow-[0_16px_35px_rgba(11,61,168,.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(11,61,168,.3)]">
              Verify a Claim <ArrowRight size={21} />
            </Link>
            <Link href="/history" className="flex min-w-[250px] items-center justify-center gap-4 rounded-[16px] border border-white/75 bg-white/58 px-8 py-[19px] text-[16px] font-medium text-[#0b3da8] shadow-[0_12px_35px_rgba(28,55,105,.10)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/72">
              <History size={21} /> View History
            </Link>
          </div>
        </motion.div>

        {/* Layered legal-tech image */}
        <motion.div initial={{ opacity: 0, scale: .92, x: 45 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: .12, ease: "easeOut" }} className="relative hidden h-[560px] lg:block">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[1%] top-[4%] h-[500px] w-[82%] rounded-[48px] border border-white/50 bg-white/16 shadow-[0_28px_60px_rgba(15,55,125,.15)] backdrop-blur-sm" />
          <div className="absolute right-[5%] top-[8%] h-[500px] w-[82%] rounded-[45px] border border-white/70 bg-white/24 shadow-[0_22px_55px_rgba(15,55,125,.13)] backdrop-blur-sm" />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[10%] top-[2%] h-[500px] w-[82%] overflow-hidden rounded-[44px] border-2 border-white/75 bg-white/35 p-[9px] shadow-[0_28px_70px_rgba(8,49,130,.22)] backdrop-blur-xl">
            <img src="/images/legal-tech-scales.jpg" alt="Legal verification and scales of justice" className="h-full w-full rounded-[35px] object-cover object-center" />
            <div className="absolute inset-[9px] rounded-[35px] bg-gradient-to-tr from-[#062b75]/12 via-transparent to-[#50cfff]/8" />
          </motion.div>

          <motion.div animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[2%] top-[14%] flex h-[102px] w-[102px] items-center justify-center rounded-[24px] border border-white/80 bg-white/65 text-[#0b3da8] shadow-[0_18px_42px_rgba(24,64,130,.16)] backdrop-blur-2xl"><Scale size={47} strokeWidth={1.5} /></motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[4%] left-[0%] flex h-[102px] w-[102px] items-center justify-center rounded-[24px] border border-white/80 bg-white/65 text-[#0b3da8] shadow-[0_18px_42px_rgba(24,64,130,.16)] backdrop-blur-2xl"><ShieldCheck size={45} strokeWidth={1.5} /></motion.div>
          <motion.div animate={{ x: [0, 8, 0], y: [0, -4, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-[49%] flex h-[102px] w-[102px] items-center justify-center rounded-[24px] border border-white/80 bg-white/65 text-[#0b3da8] shadow-[0_18px_42px_rgba(24,64,130,.16)] backdrop-blur-2xl"><FileText size={43} strokeWidth={1.5} /></motion.div>
        </motion.div>
      </section>

      {/* Domain glass cards */}
      <section className="relative z-20 mx-auto max-w-[1540px] px-5 pb-9 md:px-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {domains.map(({ icon: Icon, title, text }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 + i * .10 }} whileHover={{ y: -7 }} className="group relative min-h-[170px] overflow-hidden rounded-[26px] border border-white/70 bg-white/55 p-6 shadow-[0_18px_50px_rgba(27,57,111,.10)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/55 to-white/18" />
              <div className="relative flex h-full items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] border border-[#0b3da8]/10 bg-white/72 text-[#0b3da8] shadow-sm"><Icon size={27} /></span>
                <div className="pr-12"><h2 className="text-[17px] font-semibold text-[#0b1535]">{title}</h2><p className="mt-2 max-w-[300px] text-[14px] leading-6 text-[#52617e]">{text}</p></div>
                <span className="absolute bottom-0 right-0 flex h-13 w-13 items-center justify-center rounded-full bg-white/82 text-[#0b3da8] shadow-md transition group-hover:translate-x-1"><ArrowRight size={22} /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="relative z-20 mx-auto flex max-w-[1540px] items-center justify-end gap-4 px-12 pb-8 text-white">
        <span className="mr-1 text-[12px] font-medium tracking-wide">01 / 03</span>
        <button aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-xl"><ArrowLeft size={17} /></button>
        <button aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3da8] shadow-lg"><ArrowRight size={17} /></button>
      </div>
    </main>
  );
}
