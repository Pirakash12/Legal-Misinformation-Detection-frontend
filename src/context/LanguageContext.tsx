"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ta" | "si";

const translations = {
  en: {
    languageName:"English", dashboard:"Dashboard", verifyClaim:"Verify Claim", history:"History", admin:"Admin", systemName:"Legal Misinformation Detection System",
    mottoTruth:"Truth", mottoJustice:"Justice", mottoAwareness:"Awareness", heroLine1:"Legal Misinformation", heroLine2:"Detection System", heroLead:"Verify Sri Lankan legal claims with evidence, not assumptions.", heroText:"Submit text or an image and receive a clear verdict supported by authoritative Sri Lankan legal sources.", verifyAClaim:"Verify a Claim", viewHistory:"View History",
    verificationFlow:"Verification flow", claimToEvidence:"From claim to legal evidence", legalClaim:"Legal Claim", evidenceSearch:"Evidence Search", verification:"Verification", verdict:"Verdict", knowledgeBase:"Sri Lankan Legal Knowledge Base", knowledgeSources:"Acts · Gazettes · Judgments · Official guidance",
    employmentLaw:"Employment Law", employmentText:"Workplace rights, termination, salaries and labour regulations.", propertyLaw:"Property & Rental Law", propertyText:"Land, property ownership and rental agreements.", consumerRights:"Consumer Rights", consumerText:"Consumer protection, product safety and service complaints.",
    systemScope:"System scope", scopeTitle:"Clear, traceable verification.", evidenceGrounded:"Evidence grounded", evidenceGroundedText:"Verdicts supported by retrieved legal evidence.", threeLanguages:"Three languages", threeLanguagesText:"English, Sinhala and Tamil claim input.", textOcr:"Text + OCR", textOcrText:"Verify typed claims or claims captured in images."
  },
  ta: {
    languageName:"தமிழ்", dashboard:"முகப்பு", verifyClaim:"கூற்றைச் சரிபார்க்க", history:"வரலாறு", admin:"நிர்வாகம்", systemName:"சட்டத் தவறான தகவல் கண்டறிதல் அமைப்பு",
    mottoTruth:"உண்மை", mottoJustice:"நீதி", mottoAwareness:"விழிப்புணர்வு", heroLine1:"சட்டத் தவறான தகவல்", heroLine2:"கண்டறிதல் அமைப்பு", heroLead:"ஊகங்களின் அடிப்படையில் அல்லாமல், ஆதாரங்களுடன் இலங்கை சட்டக் கூற்றுகளைச் சரிபார்க்கவும்.", heroText:"உரை அல்லது படத்தைச் சமர்ப்பித்து, அதிகாரப்பூர்வ இலங்கை சட்ட மூலங்களால் ஆதரிக்கப்படும் தெளிவான தீர்ப்பைப் பெறுங்கள்.", verifyAClaim:"கூற்றைச் சரிபார்க்க", viewHistory:"வரலாற்றைப் பார்க்க",
    verificationFlow:"சரிபார்ப்பு செயல்முறை", claimToEvidence:"சட்டக் கூற்றிலிருந்து சட்ட ஆதாரம் வரை", legalClaim:"சட்டக் கூற்று", evidenceSearch:"ஆதாரத் தேடல்", verification:"சரிபார்ப்பு", verdict:"தீர்ப்பு", knowledgeBase:"இலங்கை சட்ட அறிவுத் தளம்", knowledgeSources:"சட்டங்கள் · வர்த்தமானிகள் · தீர்ப்புகள் · அதிகாரப்பூர்வ வழிகாட்டல்கள்",
    employmentLaw:"தொழிலாளர் சட்டம்", employmentText:"பணியிட உரிமைகள், பணிநீக்கம், சம்பளம் மற்றும் தொழிலாளர் விதிமுறைகள்.", propertyLaw:"சொத்து மற்றும் வாடகைச் சட்டம்", propertyText:"நிலம், சொத்து உரிமை மற்றும் வாடகை ஒப்பந்தங்கள்.", consumerRights:"நுகர்வோர் உரிமைகள்", consumerText:"நுகர்வோர் பாதுகாப்பு, தயாரிப்பு பாதுகாப்பு மற்றும் சேவை முறைப்பாடுகள்.",
    systemScope:"அமைப்பின் வரம்பு", scopeTitle:"தெளிவான, ஆதாரத்தைக் கண்டறியக்கூடிய சரிபார்ப்பு.", evidenceGrounded:"ஆதார அடிப்படையிலானது", evidenceGroundedText:"பெறப்பட்ட சட்ட ஆதாரங்களால் தீர்ப்புகள் ஆதரிக்கப்படுகின்றன.", threeLanguages:"மூன்று மொழிகள்", threeLanguagesText:"ஆங்கிலம், சிங்களம் மற்றும் தமிழ் மொழிகளில் சட்டக் கூற்றுகளை உள்ளிடலாம்.", textOcr:"உரை + OCR", textOcrText:"தட்டச்சு செய்த கூற்றுகள் அல்லது படங்களில் உள்ள கூற்றுகளைச் சரிபார்க்கவும்."
  },
  si: {
    languageName:"සිංහල", dashboard:"මුල් පිටුව", verifyClaim:"ප්‍රකාශය පරීක්ෂා කරන්න", history:"ඉතිහාසය", admin:"පරිපාලනය", systemName:"නීතිමය වැරදි තොරතුරු හඳුනාගැනීමේ පද්ධතිය",
    mottoTruth:"සත්‍යය", mottoJustice:"යුක්තිය", mottoAwareness:"දැනුවත්භාවය", heroLine1:"නීතිමය වැරදි තොරතුරු", heroLine2:"හඳුනාගැනීමේ පද්ධතිය", heroLead:"අනුමාන මත නොව, සාක්ෂි මත ශ්‍රී ලංකා නීතිමය ප්‍රකාශ සත්‍යාපනය කරන්න.", heroText:"පෙළක් හෝ රූපයක් ඉදිරිපත් කර නිල ශ්‍රී ලංකා නීතිමය මූලාශ්‍රවලින් සහාය ලැබෙන පැහැදිලි තීන්දුවක් ලබාගන්න.", verifyAClaim:"ප්‍රකාශයක් පරීක්ෂා කරන්න", viewHistory:"ඉතිහාසය බලන්න",
    verificationFlow:"සත්‍යාපන ක්‍රියාවලිය", claimToEvidence:"නීතිමය ප්‍රකාශයෙන් සාක්ෂි දක්වා", legalClaim:"නීතිමය ප්‍රකාශය", evidenceSearch:"සාක්ෂි සෙවීම", verification:"සත්‍යාපනය", verdict:"තීන්දුව", knowledgeBase:"ශ්‍රී ලංකා නීති දැනුම් පදනම", knowledgeSources:"පනත් · ගැසට් · නඩු තීන්දු · නිල මාර්ගෝපදේශ",
    employmentLaw:"රැකියා නීතිය", employmentText:"සේවා ස්ථාන අයිතිවාසිකම්, සේවයෙන් ඉවත් කිරීම, වැටුප් සහ කම්කරු රෙගුලාසි.", propertyLaw:"දේපළ සහ කුලී නීතිය", propertyText:"ඉඩම්, දේපළ හිමිකම සහ කුලී ගිවිසුම්.", consumerRights:"පාරිභෝගික අයිතිවාසිකම්", consumerText:"පාරිභෝගික ආරක්ෂාව, නිෂ්පාදන ආරක්ෂාව සහ සේවා පැමිණිලි.",
    systemScope:"පද්ධති විෂය පථය", scopeTitle:"පැහැදිලි සහ මූලාශ්‍ර සොයාගත හැකි සත්‍යාපනය.", evidenceGrounded:"සාක්ෂි මත පදනම් වූ", evidenceGroundedText:"ලබාගත් නීතිමය සාක්ෂි මගින් තීන්දු සඳහා සහාය ලබාදේ.", threeLanguages:"භාෂා තුනක්", threeLanguagesText:"ඉංග්‍රීසි, සිංහල සහ දෙමළ භාෂාවලින් ප්‍රකාශ ඇතුළත් කළ හැක.", textOcr:"පෙළ + OCR", textOcrText:"ටයිප් කළ ප්‍රකාශ හෝ රූපවල ඇති ප්‍රකාශ පරීක්ෂා කරන්න."
  }
} as const;

export type TranslationKey = keyof typeof translations.en;
type LanguageContextValue={language:Language;setLanguage:(language:Language)=>void;t:(key:TranslationKey)=>string};
const LanguageContext=createContext<LanguageContextValue|null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){const[language,setLanguageState]=useState<Language>("en");useEffect(()=>{const saved=window.localStorage.getItem("legal-ui-language") as Language|null;if(saved==="en"||saved==="ta"||saved==="si"){setLanguageState(saved);document.documentElement.lang=saved;}},[]);const setLanguage=(next:Language)=>{setLanguageState(next);window.localStorage.setItem("legal-ui-language",next);document.documentElement.lang=next;};const t=(key:TranslationKey)=>translations[language][key];return <LanguageContext.Provider value={{language,setLanguage,t}}>{children}</LanguageContext.Provider>}
export function useLanguage(){const context=useContext(LanguageContext);if(!context)throw new Error("useLanguage must be used inside LanguageProvider");return context;}
