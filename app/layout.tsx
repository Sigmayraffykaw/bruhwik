import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
export const metadata:Metadata={title:"BruhWiks — Customize Spotify Without Limits",description:"Themes, extensions and custom apps for desktop Spotify.",metadataBase:new URL("https://bruhwiks.com"),openGraph:{title:"BruhWiks",description:"Customize Spotify Without Limits.",url:"https://bruhwiks.com",siteName:"BruhWiks",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable}>{children}</body></html>}
