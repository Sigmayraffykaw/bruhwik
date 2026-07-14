import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "BruhWik — Customize Spotify Your Way", description: "Themes, extensions, visual effects, and powerful Spotify customization in one place.", metadataBase: new URL("https://bruhwik.com"), openGraph: { title: "BruhWik", description: "Customize Spotify Your Way.", url: "https://bruhwik.com", siteName: "BruhWik", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={inter.variable}>{children}</body></html>; }
