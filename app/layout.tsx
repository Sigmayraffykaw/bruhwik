import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "BruhWiks — Customize Spotify Your Way", description: "Themes, extensions, visual effects, and powerful Spotify customization in one place.", metadataBase: new URL("https://bruhwiks.com"), openGraph: { title: "BruhWiks", description: "Customize Spotify Your Way.", url: "https://bruhwiks.com", siteName: "BruhWiks", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={inter.variable}>{children}</body></html>; }
