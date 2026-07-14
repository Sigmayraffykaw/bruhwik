import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
export const metadata:Metadata={title:"BruhWiks — Customize Spotify Your Way",description:"Premium Spotify themes, extensions and visual experiences built by creators.",metadataBase:new URL("https://bruhwiks.com"),openGraph:{title:"BruhWiks",description:"Your Spotify. Reimagined.",url:"https://bruhwiks.com",siteName:"BruhWiks",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable}>{children}</body></html>}
