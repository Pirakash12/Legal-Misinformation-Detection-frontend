"use client";
import Link from "next/link";
import {Scale,Globe2,Menu,X,LayoutDashboard} from "lucide-react";
import {motion,AnimatePresence} from "framer-motion";
import {useState} from "react";
import {usePathname} from "next/navigation";

const links=[{href:"/",label:"Dashboard",icon:LayoutDashboard},{href:"/verify",label:"Verify Claim"},{href:"/history",label:"History"},{href:"/admin",label:"Admin"}];

export default function Navbar(){
 const [open,setOpen]=useState(false);const path=usePathname();
 return <motion.header initial={{y:-24,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6}} className="sticky top-0 z-50 border-b border-[#c89432]/20 bg-black/70 backdrop-blur-2xl">
  <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 lg:px-10">
   <Link href="/" className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c89432]/40 bg-[#c89432]/10 text-[#edc66d]"><Scale size={25}/></span><span className="text-[12px] font-semibold leading-[1.25] tracking-wide text-[#f9f8ee]">Legal Misinformation<br/>Detection System</span></Link>
   <nav className="hidden items-center gap-2 md:flex">{links.map(({href,label})=>{const active=href==="/"?path===href:path.startsWith(href);return <Link key={href} href={href} className={`relative rounded-lg px-4 py-2 text-[13px] transition ${active?"text-[#edc66d]":"text-[#c9c3b4] hover:text-white"}`}>{label}{active&&<motion.span layoutId="nav" className="absolute inset-x-4 -bottom-[20px] h-[2px] bg-[#c89432]"/>}</Link>})}<button className="ml-3 flex items-center gap-2 rounded-xl border border-[#c89432]/25 bg-white/5 px-4 py-2.5 text-xs text-[#f9f8ee]"><Globe2 size={15} className="text-[#d8a844]"/>English</button></nav>
   <button aria-label="Menu" onClick={()=>setOpen(!open)} className="text-[#edc66d] md:hidden">{open?<X/>:<Menu/>}</button>
  </div>
  <AnimatePresence>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-[#c89432]/15 bg-black/95 px-5 md:hidden"><div className="flex flex-col gap-1 py-4">{links.map(x=><Link onClick={()=>setOpen(false)} key={x.href} href={x.href} className="rounded-lg px-3 py-3 text-sm text-[#e5dfd1] hover:bg-[#c89432]/10">{x.label}</Link>)}</div></motion.div>}</AnimatePresence>
 </motion.header>
}
