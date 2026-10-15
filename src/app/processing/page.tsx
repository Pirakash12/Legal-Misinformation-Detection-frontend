"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Check,
  Search,
  Languages,
  Scale,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
const stages = [
  [Search, "Understanding claim"],
  [Languages, "Detecting language & legal domain"],
  [Scale, "Searching authoritative legal sources"],
  [BrainCircuit, "Comparing claim with retrieved evidence"],
  [Sparkles, "Generating evidence-grounded verdict"],
];
export default function Processing() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const t = setInterval(
      () =>
        setActive((a) => {
          if (a >= stages.length - 1) {
            clearInterval(t);
            setTimeout(() => router.push("/result/demo"), 700);
            return a;
          }
          return a + 1;
        }),
      1100,
    );
    return () => clearInterval(t);
  }, [router]);
  return (
    <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-3xl items-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card w-full rounded-[32px] p-8 md:p-12"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-blue-50"
          >
            <Scale size={38} className="text-blue-600" />
          </motion.div>
          <h1 className="mt-6 text-3xl font-bold">
            Verifying your legal claim
          </h1>
          <p className="mt-3 text-slate-500">
            Retrieving and evaluating legal evidence. This demonstration uses a
            staged mock process until the backend is connected.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {stages.map(([I, label], i) => (
            <motion.div
              key={String(label)}
              animate={{
                opacity: i <= active ? 1 : 0.4,
                scale: i === active ? 1.01 : 1,
              }}
              className={`flex items-center gap-4 rounded-2xl border p-4 ${i === active ? "border-blue-200 bg-blue-50" : "border-slate-100 bg-white"}`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${i < active ? "bg-emerald-100 text-emerald-600" : i === active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}
              >
                {i < active ? <Check size={19} /> : <I size={19} />}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{label as string}</p>
                {i === active && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1 }}
                    className="mt-2 h-1 rounded-full bg-blue-500"
                  />
                )}
              </div>
              {i < active && (
                <span className="text-xs font-bold text-emerald-600">DONE</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
