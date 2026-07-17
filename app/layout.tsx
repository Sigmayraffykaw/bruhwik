import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BruhWiks Pulse — Hear Music in Colour",
  description: "An original immersive music experience built around mood, discovery and listening together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
