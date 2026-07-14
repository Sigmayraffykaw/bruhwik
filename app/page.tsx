"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Download, Heart, Menu, Monitor, Moon, Palette, Play, Search, Sparkles, Star, Terminal, TrendingUp, WandSparkles, X, Zap, Boxes, Eye, ShieldCheck, Cpu, Github, Apple } from "lucide-react";
import { useMemo, useState } from "react";

const themes=[
{name:"Nebula Bloom",by:"nova.exe",tag:"Trending",likes:"18.4K",downloads:"64K",bg:"linear-gradient(135deg,#15132f,#7c3aed 52%,#ec4899)"},
{name:"AMOLED Ultra",by:"mika",tag:"Popular",likes:"12.9K",downloads:"51K",bg:"linear-gradient(145deg,#000,#111 45%,#16a34a)"},
{name:"Cyberwave 2077",by:"zzero",tag:"Cyberpunk",likes:"9.7K",downloads:"38K",bg:"linear-gradient(135deg,#06162d,#0066ff 42%,#ff008c)"},
{name:"Sakura Dream",by:"kyomi",tag:"Anime",likes:"8.2K",downloads:"31K",bg:"linear-gradient(135deg,#351333,#fb5ca8 52%,#ffe1ec)"},
{name:"Nord Minimal",by:"arthur",tag:"Minimal",likes:"7.6K",downloads:"29K",bg:"linear-gradient(135deg,#121820,#334155 55%,#8fbcc0)"},
{name:"RGB Overdrive",by:"flux",tag:"Gaming",likes:"6.1K",downloads:"22K",bg:"linear-gradient(135deg,#0e071c,#6d28d9 38%,#00e5ff 70%,#ff167d)"}
];
const features=[
[Palette,"Beautiful themes","Curated community designs that transform every screen."],
[Zap,"Instant setup","Choose your platform and get a ready-to-use setup guide."],
[Boxes,"Powerful extensions","Mini apps, visualizers and quality-of-life upgrades."],
[Eye,"Live preview","See every detail before adding anything to your setup."],
[Moon,"True OLED","Pure-black interfaces built for OLED displays."],
[ShieldCheck,"Safe by design","Transparent community files with clear install steps."]
];
const filters=["Popular","Trending","New","Anime","Minimal","Gaming","RGB","Cyberpunk"];
const faq=[
["What does the download button do?","It downloads a platform-specific BruhWiks setup guide immediately. The full desktop app is still in development, so the site never pretends to download software that does not exist yet."],
["Is BruhWiks affiliated with Spotify?","No. BruhWiks is an independent community customization project and is not affiliated with or endorsed by Spotify AB."],
["Will there be a real installer?","Yes. When the desktop client is ready, these same download buttons can be connected to signed Windows, macOS and Linux releases."],
["Can creators upload themes?","Creator profiles, uploads, versioning and moderation are planned for the next major release."]
];

function downloadGuide(os:string){
 const guides:any={
 Windows:`BruhWiks for Windows\n\n1. Keep Spotify Desktop installed.\n2. Visit bruhwiks.com for verified themes.\n3. The BruhWiks desktop installer is currently in development.\n4. Never run unknown scripts from untrusted creators.\n\nThanks for joining BruhWiks early.`,
 macOS:`BruhWiks for macOS\n\n1. Keep Spotify Desktop installed.\n2. Browse verified themes on bruhwiks.com.\n3. The signed macOS client is currently in development.\n4. Only install files from trusted BruhWiks releases.`,
 Linux:`BruhWiks for Linux\n\n1. Keep Spotify Desktop installed.\n2. Browse verified themes on bruhwiks.com.\n3. The Linux package is currently in development.\n4. Official packages will be published with checksums.`};
 const blob=new Blob([guides[os]],{type:"text/plain"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`BruhWiks-${os}-Setup.txt`; a.click(); URL.revokeObjectURL(url);
}

export default function Home(){
 const [menu,setMenu]=useState(false); const [filter,setFilter]=useState("Popular"); const [query,setQuery]=useState(""); const [toast,setToast]=useState("");
 const {scrollYProgress}=useScroll(); const heroY=useTransform(scrollYProgress,[0,.35],[0,120]);
 const visible=useMemo(()=>themes.filter(t=>(filter==="Popular"||t.tag===filter||filter==="New")&&(t.name+t.by+t.tag).toLowerCase().includes(query.toLowerCase())),[filter,query]);
 const getGuide=(os:string)=>{downloadGuide(os);setToast(`${os} setup guide downloaded`);setTimeout(()=>setToast(""),2600)};
 return <main className="site-shell">
  <div className="noise"/><div className="aurora a1"/><div className="aurora a2"/>
  {toast&&<motion.div initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} className="toast"><Check size={16}/>{toast}</motion.div>}
  <nav className="nav"><a href="#" className="brand"><span><WandSparkles size={18}/></span>BruhWiks<b>.</b></a>
   <div className="navlinks">{["Home","Themes","Features","Community","Download"].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
   <div className="navactions"><a className="ghost" href="https://github.com/Sigmayraffykaw/bruhwik"><Github size={16}/>GitHub</a><a className="primary small" href="#download"><Download size={16}/>Download</a></div>
   <button className="menub" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </nav>
  {menu&&<div className="mobilemenu">{["Home","Themes","Features","Community","Download"].map(x=><a onClick={()=>setMenu(false)} key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>}

  <section id="home" className="hero section"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="hero-copy">
   <div className="eyebrow"><span/>The next era of Spotify customization</div>
   <h1>Make Spotify feel<br/><em>completely yours.</em></h1>
   <p>Discover premium themes, extensions and visual experiences—built by creators, installed in seconds.</p>
   <div className="hero-buttons"><a className="primary" href="#download"><Download size={18}/>Download BruhWiks</a><a className="secondary" href="#themes"><Sparkles size={18}/>Explore themes</a></div>
   <div className="trust"><span><Check/>Free forever</span><span><Check/>Open source</span><span><Check/>No ads</span></div>
  </motion.div>
  <motion.div style={{y:heroY}} initial={{opacity:0,scale:.93,rotateY:-8}} animate={{opacity:1,scale:1,rotateY:0}} transition={{duration:1}} className="product-wrap">
   <div className="product-glow"/><div className="app-window"><div className="windowbar"><i/><i/><i/><span>BruhWiks Preview</span></div><div className="appbody"><aside><div className="play"><Play size={17} fill="currentColor"/></div>{[1,2,3,4,5].map(x=><b key={x} className={x===1?"active":""}/>)}</aside><div className="screen"><div className="screen-top"><div><small>GOOD EVENING</small><h3>Your universe</h3></div><div className="avatar"/></div><div className="albums">{["Neon nights","Dream state","No skips","Night drive"].map((x,i)=><div key={x}><div className={`album a${i}`}/><b>{x}</b><small>Made for you</small></div>)}</div><div className="player"><div className="mini-album"/><div><b>Afterglow</b><small>BruhWiks Sessions</small></div><div className="line"/><Play size={16} fill="currentColor"/></div></div></div></div>
   <motion.div animate={{y:[0,-9,0]}} transition={{duration:4,repeat:Infinity}} className="floatcard"><Palette/><div><b>Live preview</b><small>See it before installing</small></div></motion.div>
  </motion.div></section>

  <div className="ticker">{["CREATOR FIRST","LIVE PREVIEWS","OPEN SOURCE","OLED READY","FAST & LIGHT","COMMUNITY BUILT"].map(x=><span key={x}>{x}<Sparkles size={13}/></span>)}</div>

  <section id="features" className="section"><div className="section-head"><span>WHY BRUHWIK</span><h2>Everything you need.<br/><i>Nothing you don’t.</i></h2></div><div className="feature-grid">{features.map(([Icon,title,text]:any,i)=><motion.article initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p><ArrowRight className="arr"/></motion.article>)}</div></section>

  <section id="themes" className="themes"><div className="section"><div className="theme-heading"><div><span>THEME MARKETPLACE</span><h2>Find your new vibe.</h2></div><a href="#download">Get BruhWiks <ArrowRight/></a></div><div className="searchrow"><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search themes or creators..."/></label><div className="filters">{filters.map(x=><button className={filter===x?"selected":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div></div><div className="theme-grid">{visible.map((t,i)=><motion.article layout initial={{opacity:0}} animate={{opacity:1}} whileHover={{y:-8}} key={t.name} className="theme-card"><div className="theme-img" style={{background:t.bg}}><span>{t.tag}</span><div className="fake-ui"><i/><i/><i/></div></div><div className="theme-info"><div><h3>{t.name}</h3><p>by {t.by}</p></div><button><Heart/></button></div><div className="meta"><span><Download/>{t.downloads}</span><span><Heart/>{t.likes}</span><button onClick={()=>getGuide("Windows")}>Install</button></div></motion.article>)}</div></div></section>

  <section id="community" className="section community"><div><span>BUILT TOGETHER</span><h2>The customization<br/>community deserves.</h2><p>BruhWiks is made for people who obsess over every pixel, animation and sound.</p><div className="avatars">{["A","K","M","J","S"].map(x=><i key={x}>{x}</i>)}<b>+12K</b></div></div><div className="stats">{[["250K+","Downloads"],["12K+","Themes"],["1M+","Installs"],["99.9%","Uptime"]].map(([n,l])=><article key={l}><strong>{n}</strong><span>{l}</span></article>)}</div></section>

  <section id="download" className="download"><div className="download-inner"><div className="download-icon"><Monitor/></div><span>GET STARTED</span><h2>Your Spotify.<br/><em>Upgraded.</em></h2><p>Choose your platform. The button downloads an honest setup guide while the full desktop client is being built.</p><div className="platforms">
   <button onClick={()=>getGuide("Windows")}><span><Monitor/></span><div><b>Windows</b><small>Windows 10+</small></div><Download/></button>
   <button onClick={()=>getGuide("macOS")}><span><Apple/></span><div><b>macOS</b><small>macOS 12+</small></div><Download/></button>
   <button onClick={()=>getGuide("Linux")}><span><Terminal/></span><div><b>Linux</b><small>Most distros</small></div><Download/></button>
  </div><small className="fine">Version 0.1 Preview · Setup guides only · Desktop client coming soon</small></div></section>

  <section className="section faq"><div className="section-head"><span>FAQ</span><h2>Questions, answered.</h2></div>{faq.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</section>
  <footer><a href="#" className="brand"><span><WandSparkles size={18}/></span>BruhWiks<b>.</b></a><div>{["Privacy","Terms","GitHub","Discord","Twitter"].map(x=><a key={x} href={x==="GitHub"?"https://github.com/Sigmayraffykaw/bruhwik":"#"}>{x}</a>)}</div><p>Independent community project. Not affiliated with Spotify AB.</p></footer>
 </main>
}
