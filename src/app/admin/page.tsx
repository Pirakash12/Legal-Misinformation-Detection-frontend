"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Database,
  FileCheck,
  RefreshCw,
  Search,
  Upload,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const adminTranslations = {
  en: {
    eyebrow: "Knowledge management",
    title: "Admin Dashboard",
    description: "Manage legal sources, indexing and system status.",
    addSource: "Add Legal Source",
    statLabels: ["Legal Sources", "Dataset Claims", "System Availability"],
    knowledgeBase: "Legal Knowledge Base",
    reindex: "Re-index",
    searchPlaceholder: "Search sources...",
    sourceType: "Act",
    indexed: "Indexed",
    systemHealth: "System Health",
    services: ["API service", "Vector database", "OCR pipeline", "Retrieval service"],
    operational: "Operational",
    demoNotice: "Demo status values are placeholders. Backend health endpoints can replace these without changing the UI.",
  },
  ta: {
    eyebrow: "அறிவுத் தள மேலாண்மை",
    title: "நிர்வாக கட்டுப்பாட்டகம்",
    description: "சட்ட மூலங்கள், அட்டவணைப்படுத்தல் மற்றும் அமைப்பின் நிலையை நிர்வகிக்கவும்.",
    addSource: "சட்ட மூலத்தைச் சேர்க்க",
    statLabels: ["சட்ட மூலங்கள்", "தரவுத்தொகுப்பு கூற்றுகள்", "அமைப்பு கிடைப்புத்தன்மை"],
    knowledgeBase: "சட்ட அறிவுத் தளம்",
    reindex: "மீண்டும் அட்டவணைப்படுத்து",
    searchPlaceholder: "சட்ட மூலங்களைத் தேடுங்கள்...",
    sourceType: "சட்டம்",
    indexed: "அட்டவணைப்படுத்தப்பட்டது",
    systemHealth: "அமைப்பு நிலை",
    services: ["API சேவை", "வெக்டர் தரவுத்தளம்", "OCR செயல்முறை", "மீட்டெடுப்பு சேவை"],
    operational: "செயல்பாட்டில்",
    demoNotice: "காட்டப்படும் அமைப்பு நிலை மதிப்புகள் மாதிரிகள் மட்டுமே. பின்னணி சேவையின் health endpoints பின்னர் இவற்றை மாற்றலாம்.",
  },
  si: {
    eyebrow: "දැනුම් පදනම් කළමනාකරණය",
    title: "පරිපාලන පුවරුව",
    description: "නීතිමය මූලාශ්‍ර, සුචිගත කිරීම සහ පද්ධති තත්ත්වය කළමනාකරණය කරන්න.",
    addSource: "නීති මූලාශ්‍රයක් එක් කරන්න",
    statLabels: ["නීතිමය මූලාශ්‍ර", "දත්ත කට්ටල ප්‍රකාශ", "පද්ධති ලබාගත හැකියාව"],
    knowledgeBase: "නීති දැනුම් පදනම",
    reindex: "නැවත සුචිගත කරන්න",
    searchPlaceholder: "මූලාශ්‍ර සොයන්න...",
    sourceType: "පනත",
    indexed: "සුචිගතයි",
    systemHealth: "පද්ධති සෞඛ්‍යය",
    services: ["API සේවාව", "වෙක්ටර් දත්ත සමුදාය", "OCR ක්‍රියාවලිය", "ලබාගැනීමේ සේවාව"],
    operational: "ක්‍රියාත්මකයි",
    demoNotice: "පෙන්වන පද්ධති තත්ත්ව අගයන් ආදර්ශ පමණි. පසුපස health endpoints මගින් පසුව ඒවා ප්‍රතිස්ථාපනය කළ හැක.",
  },
} as const;

const legalSourceNames = [
  "Shop and Office Employees Act",
  "Termination of Employment of Workmen Act",
  "Consumer Affairs Authority Act",
  "Rent Act",
];

export default function AdminPage() {
  const { language } = useLanguage();
  const pageText = adminTranslations[language];

  const summaryCards = [
    { Icon: Database, value: "128", label: pageText.statLabels[0] },
    { Icon: FileCheck, value: "900", label: pageText.statLabels[1] },
    { Icon: Activity, value: "99.2%", label: pageText.statLabels[2] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl px-6 py-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">{pageText.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold">{pageText.title}</h1>
          <p className="mt-3 text-slate-500">{pageText.description}</p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
          <Upload size={18} />
          {pageText.addSource}
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {summaryCards.map(({ Icon, value, label }) => (
          <div key={label} className="card rounded-2xl p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon size={22} />
            </div>
            <p className="mt-4 text-3xl font-black">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="card rounded-[26px] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{pageText.knowledgeBase}</h2>
            <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <RefreshCw size={16} />
              {pageText.reindex}
            </button>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-blue-100 bg-slate-50 px-4 py-3">
            <Search size={17} />
            <input className="w-full bg-transparent outline-none" placeholder={pageText.searchPlaceholder} />
          </div>

          <div className="mt-4 space-y-2">
            {legalSourceNames.map((sourceName) => (
              <div key={sourceName} className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
                <div>
                  <b>{sourceName}</b>
                  <p className="mt-1 text-xs text-slate-400">{pageText.sourceType}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <CheckCircle2 size={13} />
                  {pageText.indexed}
                </span>
              </div>
            ))}
          </div>
        </section>

        <aside className="card h-fit rounded-[26px] p-6">
          <h2 className="text-xl font-bold">{pageText.systemHealth}</h2>
          <div className="mt-5 space-y-4 text-sm">
            {pageText.services.map((serviceName) => (
              <div key={serviceName} className="flex items-center justify-between">
                <span className="text-slate-500">{serviceName}</span>
                <span className="flex items-center gap-2 font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {pageText.operational}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-xs leading-5 text-blue-900">
            {pageText.demoNotice}
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
