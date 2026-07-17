import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"]});
export const metadata:Metadata={title:"BruhWiks Music — Listen Without Limits",description:"A premium music streaming experience for playlists, albums, artists and stations."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.className}>{children}</body></html>}
