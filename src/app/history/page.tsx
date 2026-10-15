"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const historyTranslations = {
  en: {
    eyebrow: "Previous analyses",
    title: "Verification History",
    description: "Reopen previous claim analyses and evidence. Mock records are shown until the backend is connected.",
    searchPlaceholder: "Search previous claims...",
    claims: [
      ["An employer can terminate an employee without notice at any time.", "Employment Law", "FALSE"],
      ["A landlord may increase rent without any agreement or notice.", "Property & Rental Law", "MISLEADING"],
      ["A customer has no remedy for a defective product after purchase.", "Consumer Rights", "FALSE"],
    ],
  },
  ta: {
    eyebrow: "முந்தைய பகுப்பாய்வுகள்",
    title: "சரிபார்ப்பு வரலாறு",
    description: "முந்தைய சட்டக் கூற்று பகுப்பாய்வுகளையும் ஆதாரங்களையும் மீண்டும் பார்க்கவும். பின்தளம் இணைக்கப்படும் வரை மாதிரி பதிவுகள் காட்டப்படும்.",
    searchPlaceholder: "முந்தைய கூற்றுகளைத் தேடுங்கள்...",
    claims: [
      ["ஒரு முதலாளி எந்த அறிவிப்பும் இன்றி எந்த நேரத்திலும் பணியாளரை பணிநீக்கம் செய்யலாம்.", "தொழிலாளர் சட்டம்", "தவறு"],
      ["எந்த ஒப்பந்தமோ அறிவிப்போ இன்றி வீட்டு உரிமையாளர் வாடகையை அதிகரிக்கலாம்.", "சொத்து மற்றும் வாடகைச் சட்டம்", "தவறாக வழிநடத்துவது"],
      ["குறைபாடுள்ள பொருளை வாங்கிய பிறகு நுகர்வோருக்கு எந்தத் தீர்வும் இல்லை.", "நுகர்வோர் உரிமைகள்", "தவறு"],
    ],
  },
  si: {
    eyebrow: "පෙර විශ්ලේෂණ",
    title: "සත්‍යාපන ඉතිහාසය",
    description: "පෙර ප්‍රකාශ විශ්ලේෂණ සහ සාක්ෂි නැවත බලන්න. පසුපස පද්ධතිය සම්බන්ධ වන තුරු ආදර්ශ වාර්තා පෙන්වයි.",
    searchPlaceholder: "පෙර ප්‍රකාශ සොයන්න...",
    claims: [
      ["සේවායෝජකයෙකුට දැනුම්දීමකින් තොරව ඕනෑම වේලාවක සේවකයෙකු ඉවත් කළ හැක.", "රැකියා නීතිය", "අසත්‍ය"],
      ["කිසිදු ගිවිසුමක් හෝ දැනුම්දීමක් නොමැතිව නිවාස හිමියාට කුලිය වැඩි කළ හැක.", "දේපළ සහ කුලී නීතිය", "නොමඟ යවන"],
      ["දෝෂ සහිත භාණ්ඩයක් මිලදී ගැනීමෙන් පසු පාරිභෝගිකයාට කිසිදු පිළියමක් නැත.", "පාරිභෝගික අයිතිවාසිකම්", "අසත්‍ය"],
    ],
  },
} as const;

const historyMetadata = [
  { confidence: "87%", date: "15 Oct 2026" },
  { confidence: "79%", date: "13 Oct 2026" },
  { confidence: "91%", date: "11 Oct 2026" },
];

export default function HistoryPage() {
  const { language } = useLanguage();
  const pageText = historyTranslations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl px-6 py-14"
    >
      <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">{pageText.eyebrow}</p>
      <h1 className="mt-2 text-4xl font-bold">{pageText.title}</h1>
      <p className="mt-3 text-slate-500">{pageText.description}</p>

      <div className="card mt-8 rounded-[26px] p-5">
        <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-slate-50 px-4 py-3">
          <Search size={18} className="text-slate-400" />
          <input className="w-full bg-transparent outline-none" placeholder={pageText.searchPlaceholder} />
        </div>

        <div className="mt-5 space-y-3">
          {pageText.claims.map((claimRecord, index) => {
            const recordMetadata = historyMetadata[index];
            const isMisleading = index === 1;

            return (
              <Link
                href="/result/demo"
                key={`${claimRecord[0]}-${index}`}
                className="grid gap-3 rounded-2xl border border-slate-100 p-5 transition hover:border-blue-200 hover:bg-blue-50/30 md:grid-cols-[1fr_170px_120px_80px_120px_24px] md:items-center"
              >
                <p className="font-semibold">{claimRecord[0]}</p>
                <span className="text-sm text-slate-500">{claimRecord[1]}</span>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${isMisleading ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"}`}>
                  {claimRecord[2]}
                </span>
                <b className="text-sm">{recordMetadata.confidence}</b>
                <span className="text-sm text-slate-400">{recordMetadata.date}</span>
                <ChevronRight size={18} className="text-slate-400" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
