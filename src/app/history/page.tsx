"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
const rows = [
  [
    "An employer can terminate an employee without notice at any time.",
    "Employment Law",
    "FALSE",
    "87%",
    "15 Oct 2026",
  ],
  [
    "A landlord may increase rent without any agreement or notice.",
    "Property & Rental Law",
    "MISLEADING",
    "79%",
    "13 Oct 2026",
  ],
  [
    "A customer has no remedy for a defective product after purchase.",
    "Consumer Rights",
    "FALSE",
    "91%",
    "11 Oct 2026",
  ],
];
export default function History() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl px-6 py-14"
    >
      <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">
        Previous analyses
      </p>
      <h1 className="mt-2 text-4xl font-bold">Verification History</h1>
      <p className="mt-3 text-slate-500">
        Reopen previous claim analyses and evidence. Mock records are shown
        until the backend is connected.
      </p>
      <div className="card mt-8 rounded-[26px] p-5">
        <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-slate-50 px-4 py-3">
          <Search size={18} className="text-slate-400" />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search previous claims..."
          />
        </div>
        <div className="mt-5 space-y-3">
          {rows.map((r, i) => (
            <Link
              href="/result/demo"
              key={i}
              className="grid gap-3 rounded-2xl border border-slate-100 p-5 transition hover:border-blue-200 hover:bg-blue-50/30 md:grid-cols-[1fr_170px_120px_80px_120px_24px] md:items-center"
            >
              <p className="font-semibold">{r[0]}</p>
              <span className="text-sm text-slate-500">{r[1]}</span>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${r[2] === "FALSE" ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-700"}`}
              >
                {r[2]}
              </span>
              <b className="text-sm">{r[3]}</b>
              <span className="text-sm text-slate-400">{r[4]}</span>
              <ChevronRight size={18} className="text-slate-400" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
