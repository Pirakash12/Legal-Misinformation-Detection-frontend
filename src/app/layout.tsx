import type {Metadata} from "next";import "./globals.css";import Navbar from "@/components/Navbar";
export const metadata:Metadata={title:"AI-Powered Legal Misinformation Detection System",description:"Evidence-grounded verification of Sri Lankan legal claims"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/><main className="min-h-screen">{children}</main></body></html>}
