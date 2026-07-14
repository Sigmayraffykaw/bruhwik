import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { fontFamily: { sans: ["var(--font-inter)","Inter","sans-serif"] }, boxShadow: { neon: "0 0 40px rgba(29,185,84,.28)" } } }, plugins: [] };
export default config;
