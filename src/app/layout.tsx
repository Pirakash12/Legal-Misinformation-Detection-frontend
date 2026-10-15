import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal Misinformation Detection System",
  description: "Evidence-grounded verification of Sri Lankan legal claims",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} legal-bg`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
