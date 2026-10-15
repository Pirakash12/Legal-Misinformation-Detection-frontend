"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Languages,
  Scale,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type InputType = "text" | "image";

const verifyTranslations = {
  en: {
    badge: "Claim verification",
    title: "Verify a Legal Claim",
    description: "Enter a legal claim or upload an image. Relevant Sri Lankan legal sources are retrieved and compared before the result is presented.",
    textTab: "Text Claim",
    imageTab: "Image Upload",
    question: "What legal claim would you like to verify?",
    example: "Example: An employer in Sri Lanka can terminate an employee without notice at any time.",
    uploadLabel: "Upload an image containing a legal claim",
    dropMessage: "Drop an image here or click to browse",
    fileFormat: "JPEG or PNG · Maximum 5 MB",
    notice: "Evidence-grounded result, not professional legal advice.",
    analyseButton: "Analyse Claim",
    evidenceTitle: "Evidence before assumptions.",
    evidenceDescription: "Results connect the submitted claim to relevant authoritative Sri Lankan legal material.",
    supportedLanguages: "Supported languages",
    supportedLanguagesDescription: "English, Sinhala and Tamil. Language is detected during processing.",
    extractedClaim: "Claim extracted from uploaded image",
  },
  ta: {
    badge: "கூற்று சரிபார்ப்பு",
    title: "சட்டக் கூற்றைச் சரிபார்க்கவும்",
    description: "ஒரு சட்டக் கூற்றை உள்ளிடவும் அல்லது படத்தைப் பதிவேற்றவும். முடிவு வழங்கப்படுவதற்கு முன் தொடர்புடைய இலங்கை சட்ட மூலங்கள் பெறப்பட்டு ஒப்பிடப்படும்.",
    textTab: "உரை கூற்று",
    imageTab: "படம் பதிவேற்றம்",
    question: "எந்த சட்டக் கூற்றைச் சரிபார்க்க விரும்புகிறீர்கள்?",
    example: "உதாரணம்: இலங்கையில் ஒரு முதலாளி எந்த அறிவிப்பும் இன்றி எந்த நேரத்திலும் பணியாளரை பணிநீக்கம் செய்யலாம்.",
    uploadLabel: "சட்டக் கூற்று உள்ள படத்தைப் பதிவேற்றவும்",
    dropMessage: "படத்தை இங்கே விடவும் அல்லது தேர்வு செய்ய கிளிக் செய்யவும்",
    fileFormat: "JPEG அல்லது PNG · அதிகபட்சம் 5 MB",
    notice: "சட்ட ஆதாரங்களை அடிப்படையாகக் கொண்ட முடிவு; இது தொழில்முறை சட்ட ஆலோசனை அல்ல.",
    analyseButton: "கூற்றைப் பகுப்பாய்வு செய்",
    evidenceTitle: "ஊகங்களுக்கு முன் ஆதாரம்.",
    evidenceDescription: "சமர்ப்பிக்கப்பட்ட கூற்றை தொடர்புடைய அதிகாரப்பூர்வ இலங்கை சட்ட ஆதாரங்களுடன் முடிவுகள் இணைக்கின்றன.",
    supportedLanguages: "ஆதரிக்கப்படும் மொழிகள்",
    supportedLanguagesDescription: "ஆங்கிலம், சிங்களம் மற்றும் தமிழ். செயலாக்கத்தின் போது மொழி கண்டறியப்படும்.",
    extractedClaim: "பதிவேற்றப்பட்ட படத்திலிருந்து பெறப்பட்ட கூற்று",
  },
  si: {
    badge: "ප්‍රකාශ සත්‍යාපනය",
    title: "නීතිමය ප්‍රකාශයක් පරීක්ෂා කරන්න",
    description: "නීතිමය ප්‍රකාශයක් ඇතුළත් කරන්න හෝ රූපයක් උඩුගත කරන්න. ප්‍රතිඵලය ඉදිරිපත් කිරීමට පෙර අදාළ ශ්‍රී ලංකා නීතිමය මූලාශ්‍ර ලබාගෙන සසඳනු ලැබේ.",
    textTab: "පෙළ ප්‍රකාශය",
    imageTab: "රූප උඩුගත කිරීම",
    question: "ඔබට පරීක්ෂා කිරීමට අවශ්‍ය නීතිමය ප්‍රකාශය කුමක්ද?",
    example: "උදාහරණය: ශ්‍රී ලංකාවේ සේවායෝජකයෙකුට දැනුම්දීමකින් තොරව සේවකයෙකු ඉවත් කළ හැක.",
    uploadLabel: "නීතිමය ප්‍රකාශයක් අඩංගු රූපයක් උඩුගත කරන්න",
    dropMessage: "රූපය මෙහි දමන්න හෝ තේරීමට ක්ලික් කරන්න",
    fileFormat: "JPEG හෝ PNG · උපරිම 5 MB",
    notice: "සාක්ෂි මත පදනම් වූ ප්‍රතිඵලයක්; වෘත්තීය නීති උපදෙස් නොවේ.",
    analyseButton: "ප්‍රකාශය විශ්ලේෂණය කරන්න",
    evidenceTitle: "අනුමානවලට පෙර සාක්ෂි.",
    evidenceDescription: "ප්‍රතිඵල මගින් ඉදිරිපත් කළ ප්‍රකාශය අදාළ නිල ශ්‍රී ලංකා නීතිමය ද්‍රව්‍ය සමඟ සම්බන්ධ කරයි.",
    supportedLanguages: "සහාය දක්වන භාෂා",
    supportedLanguagesDescription: "ඉංග්‍රීසි, සිංහල සහ දෙමළ. සැකසීමේදී භාෂාව හඳුනාගනී.",
    extractedClaim: "උඩුගත කළ රූපයෙන් ලබාගත් ප්‍රකාශය",
  },
} as const;

export default function VerifyPage() {
  const { language } = useLanguage();
  const pageText = verifyTranslations[language];
  const searchParams = useSearchParams();
  const router = useRouter();

  const [inputType, setInputType] = useState<InputType>("text");
  const [claimText, setClaimText] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  useEffect(() => {
    if (searchParams.get("mode") === "image") {
      setInputType("image");
    }
  }, [searchParams]);

  const inputTabs = [
    { type: "text" as InputType, Icon: FileText, label: pageText.textTab },
    { type: "image" as InputType, Icon: ImageIcon, label: pageText.imageTab },
  ];

  const handleAnalyseClaim = () => {
    const hasTextClaim = inputType === "text" && claimText.trim().length > 0;
    const hasImageClaim = inputType === "image" && selectedFileName.length > 0;

    if (!hasTextClaim && !hasImageClaim) {
      return;
    }

    const claimForProcessing = claimText.trim() || pageText.extractedClaim;
    sessionStorage.setItem("claim", claimForProcessing);
    router.push("/processing");
  };

  return (
    <div className="legal-bg min-h-[calc(100vh-78px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-[1180px] px-5 py-14 lg:px-8"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#123a8f]/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[#123a8f] shadow-sm">
                <Sparkles size={13} />
                {pageText.badge}
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-.035em] text-[#0b1739] md:text-5xl">
                {pageText.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#74809a]">
                {pageText.description}
              </p>
            </div>

            <div className="glass overflow-hidden rounded-[28px] p-5 md:p-8">
              <div className="grid grid-cols-2 rounded-2xl bg-[#eef3ff]/80 p-1.5">
                {inputTabs.map(({ type, Icon, label }) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInputType(type)}
                    className={`relative flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
                      inputType === type
                        ? "text-[#123a8f]"
                        : "text-[#7a859d] hover:text-[#123a8f]"
                    }`}
                  >
                    {inputType === type && (
                      <motion.span
                        layoutId="verify-tab"
                        className="absolute inset-0 rounded-xl bg-white shadow-sm"
                      />
                    )}
                    <Icon size={17} className="relative" />
                    <span className="relative">{label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {inputType === "text" ? (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    className="mt-7"
                  >
                    <label className="text-sm font-semibold text-[#172342]">
                      {pageText.question}
                    </label>
                    <textarea
                      value={claimText}
                      maxLength={2000}
                      onChange={(event) => setClaimText(event.target.value)}
                      placeholder={pageText.example}
                      className="mt-3 min-h-52 w-full resize-none rounded-2xl border border-[#123a8f]/10 bg-white/75 p-5 text-sm leading-7 text-[#172342] shadow-inner outline-none transition placeholder:text-[#a5aec0] focus:border-[#123a8f]/35 focus:ring-4 focus:ring-[#123a8f]/6"
                    />
                    <div className="mt-3 flex justify-between text-xs text-[#8b96ac]">
                      <span>English • සිංහල • தமிழ்</span>
                      <span>{claimText.length}/2000</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    className="mt-7"
                  >
                    <label className="text-sm font-semibold text-[#172342]">
                      {pageText.uploadLabel}
                    </label>
                    <label className="group mt-3 flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#123a8f]/25 bg-gradient-to-br from-[#f8faff] to-white p-8 text-center transition hover:border-[#123a8f]/50">
                      <motion.span
                        whileHover={{ scale: 1.08, y: -3 }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123a8f] text-white"
                      >
                        <Upload size={27} />
                      </motion.span>
                      <p className="mt-5 font-semibold text-[#172342]">
                        {selectedFileName || pageText.dropMessage}
                      </p>
                      <p className="mt-2 text-xs text-[#8b96ac]">{pageText.fileFormat}</p>
                      <input
                        type="file"
                        accept="image/png,image/jpeg"
                        className="hidden"
                        onChange={(event) => setSelectedFileName(event.target.files?.[0]?.name || "")}
                      />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-7 flex flex-col justify-between gap-4 border-t border-[#123a8f]/8 pt-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 text-xs leading-5 text-[#74809a]">
                  <ShieldCheck size={18} className="shrink-0 text-[#123a8f]" />
                  {pageText.notice}
                </div>
                <button
                  type="button"
                  onClick={handleAnalyseClaim}
                  className="royal-button flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
                >
                  {pageText.analyseButton}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:pt-28">
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="glass relative overflow-hidden rounded-[26px] p-7"
            >
              <Scale size={44} strokeWidth={1} className="relative text-[#123a8f]" />
              <h2 className="relative mt-8 text-xl font-semibold text-[#0b1739]">
                {pageText.evidenceTitle}
              </h2>
              <p className="relative mt-3 text-sm leading-6 text-[#74809a]">
                {pageText.evidenceDescription}
              </p>
            </motion.div>

            <div className="glass rounded-[26px] p-6">
              <Languages size={22} className="text-[#123a8f]" />
              <p className="mt-4 text-sm font-semibold text-[#172342]">
                {pageText.supportedLanguages}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#7a859d]">
                {pageText.supportedLanguagesDescription}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
