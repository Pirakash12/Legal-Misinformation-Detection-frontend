"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowUpRight,BriefcaseBusiness,House,ShoppingCart,Scale,ShieldCheck,Languages,ScanText,Gavel} from "lucide-react";

const domains=[
 {I:BriefcaseBusiness,title:"Employment Law",text:"Workplace rights, termination, salaries and labour regulations."},
 {I:House,title:"Property & Rental Law",text:"Land, ownership, tenancy and rental agreements."},
 {I:ShoppingCart,title:"Consumer Rights",text:"Consumer protection, product safety and service complaints."}
];

export default function Home(){return <div className="noise min-h-screen overflow-hidden">
 <section className="relative mx-auto max-w-[1500px] px-5 pb-8 pt-5 lg:px-10">
  <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}} className="relative min-h-[650px] overflow-hidden rounded-[30px] border border-[#c89432]/20 bg-[#080705] shadow-2xl">
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,148,50,.22),transparent_24%),linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(7,7,6,.88)_44%,rgba(20,16,9,.74)_100%)]"/>
   <motion.div animate={{rotate:[0,2,0],y:[0,-10,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className="absolute right-[8%] top-[10%] hidden h-[440px] w-[440px] items-center justify-center rounded-full border border-[#c89432]/10 bg-[#c89432]/5 text-[#d7a64a] blur-0 lg:flex"><Scale size={280} strokeWidth={.55}/><div className="absolute inset-14 rounded-full border border-[#c89432]/10"/></motion.div>
   <div className="relative z-10 flex min-h-[650px] max-w-[820px] flex-col justify-center px-7 py-16 md:px-14 lg:px-20">
    <motion.p initial={{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:.15}} className="mb-5 text-xs font-semibold uppercase tracking-[.3em] text-[#d8a844]">Component 4 · Sri Lankan Legal Verification</motion.p>
    <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.7}} className="max-w-[760px] text-5xl font-semibold leading-[1.04] tracking-[-.04em] text-[#f9f8ee] md:text-6xl lg:text-[72px]">Legal <span className="gold-text">Misinformation</span><br/>Detection System</motion.h1>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}} className="mt-7 max-w-[590px] text-lg leading-8 text-[#c9c3b4]">Verify Sri Lankan legal claims with evidence, not assumptions. Submit text or an image and review a clear verdict grounded in authoritative legal sources.</motion.p>
    <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.6}} className="mt-9 flex flex-wrap gap-3"><Link href="/verify" className="gold-button flex items-center gap-3 rounded-xl px-7 py-4 text-sm font-semibold transition">Verify a Claim <ArrowUpRight size={17}/></Link><Link href="/verify?mode=image" className="glass flex items-center gap-3 rounded-xl px-7 py-4 text-sm font-medium text-[#f9f8ee] transition hover:border-[#c89432]/50"><ScanText size={18} className="text-[#d8a844]"/>Upload Image</Link></motion.div>
   </div>
   <div className="absolute bottom-7 right-7 hidden w-[260px] rounded-2xl p-5 lg:block glass"><Gavel className="mb-5 text-[#d8a844]"/><p className="text-lg font-medium text-[#f9f8ee]">Evidence before assumption.</p><div className="my-4 h-px w-12 bg-[#c89432]"/><p className="text-xs leading-5 text-[#aaa493]">Grounded in authentic Sri Lankan legal sources.</p></div>
  </motion.div>
 </section>

 <section className="mx-auto max-w-[1500px] px-5 pb-8 lg:px-10"><div className="grid gap-4 lg:grid-cols-3">{domains.map(({I,title,text},i)=><motion.div key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} whileHover={{y:-7}} className="glass group rounded-[22px] p-6"><div className="mb-8 flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c89432]/30 bg-[#c89432]/10 text-[#edc66d]"><I size={22}/></span><ArrowUpRight size={19} className="text-[#81775e] transition group-hover:text-[#edc66d]"/></div><h2 className="text-lg font-semibold text-[#f9f8ee]">{title}</h2><p className="mt-2 max-w-[350px] text-sm leading-6 text-[#aaa493]">{text}</p></motion.div>)}</div></section>

 <section className="mx-auto max-w-[1500px] px-5 pb-24 pt-8 lg:px-10"><div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]"><div className="card rounded-[28px] p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[.25em] text-[#c89432]">System scope</p><h2 className="mt-3 text-3xl font-semibold text-[#f9f8ee]">Designed for clear, traceable verification.</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[[ShieldCheck,"Evidence grounded","Verdicts supported by retrieved legal evidence."],[Languages,"Three languages","English, Sinhala and Tamil claim input."],[ScanText,"Text + OCR","Verify typed claims or claims captured in images."]].map(([Icon,title,text])=><div key={String(title)} className="rounded-2xl border border-[#c89432]/15 bg-white/[.035] p-5"><Icon className="text-[#d8a844]" size={21}/><h3 className="mt-5 text-sm font-semibold text-[#f9f8ee]">{title as string}</h3><p className="mt-2 text-xs leading-5 text-[#999382]">{text as string}</p></div>)}</div></div><div className="glass flex flex-col justify-between rounded-[28px] p-8"><Scale size={42} strokeWidth={1} className="text-[#d8a844]"/><div><p className="gold-text text-3xl font-semibold">Research Prototype</p><p className="mt-3 text-sm leading-6 text-[#aaa493]">This system provides informational verification and is not a substitute for professional legal advice.</p></div></div></div></section>
 </div>}
