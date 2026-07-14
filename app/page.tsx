"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BadgeCheck, Boxes, Check, ChevronDown, CirclePlay,
  Download, Eye, Github, Heart, Layers3, Menu, Monitor, Moon, Palette,
  Search, ShieldCheck, Sparkles, Star, Terminal, WandSparkles, X, Zap,
  Apple, Gamepad2, SlidersHorizontal, Code2, Users, Radio, UploadCloud
} from "lucide-react";

const themes = [
  {name:"Nebula Bloom", creator:"nova.exe", category:"Trending", likes:"18.4K", installs:"64K", accent:"#b96cff", gradient:"linear-gradient(135deg,#17132f 0%,#7c3aed 48%,#ec4899 100%)"},
  {name:"AMOLED Ultra", creator:"mika", category:"Minimal", likes:"12.9K", installs:"51K", accent:"#35f27d", gradient:"linear-gradient(135deg,#000 0%,#111 58%,#168347 100%)"},
  {name:"Cyberwave 2077", creator:"zzero", category:"Cyberpunk", likes:"9.7K", installs:"38K", accent:"#00e5ff", gradient:"linear-gradient(135deg,#071632 0%,#0066ff 45%,#ff008c 100%)"},
  {name:"Sakura Dream", creator:"kyomi", category:"Anime", likes:"8.2K", installs:"31K", accent:"#ff7bbd", gradient:"linear-gradient(135deg,#351333 0%,#fb5ca8 54%,#ffe1ec 100%)"},
  {name:"Nord Minimal", creator:"arthur", category:"Minimal", likes:"7.6K", installs:"29K", accent:"#88c0d0", gradient:"linear-gradient(135deg,#121820 0%,#334155 58%,#8fbcc0 100%)"},
  {name:"RGB Overdrive", creator:"flux", category:"Gaming", likes:"6.1K", installs:"22K", accent:"#8b5cf6", gradient:"linear-gradient(135deg,#0e071c 0%,#6d28d9 38%,#00e5ff 72%,#ff167d 100%)"},
];

const extensions = [
  {icon:Radio, title:"Wave Visualizer", text:"Reactive audio visualizations that feel native."},
  {icon:SlidersHorizontal, title:"Smart Controls", text:"Deeper playback controls without clutter."},
  {icon:Gamepad2, title:"Discord Presence", text:"Rich activity with artwork, time and status."},
  {icon:Code2, title:"Creator SDK", text:"Build, test and publish extensions faster."},
];

const faqs = [
  ["Is BruhWiks affiliated with Spotify?", "No. BruhWiks is an independent community customization project and is not affiliated with or endorsed by Spotify AB."],
  ["Do the download buttons install the app?", "Not yet. The current buttons download platform setup notes while the signed desktop client is being prepared."],
  ["Can creators upload themes?", "Creator profiles, uploads, versioning and moderation are planned for the next major release."],
  ["Will BruhWiks stay free?", "The core browsing and community experience is planned to remain free."],
];

function downloadGuide(os:string){
  const body=`BruhWiks ${os} Preview\n\nThe signed desktop app is still in development.\n\n1. Keep Spotify Desktop installed.\n2. Browse verified themes at https://bruhwiks.com.\n3. Only install files published through official BruhWiks releases.\n4. Never run unknown scripts from untrusted creators.\n\nThanks for joining early.`;
  const blob=new Blob([body],{type:"text/plain"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url; a.download=`BruhWiks-${os}-Preview.txt`; a.click(); URL.revokeObjectURL(url);
}

function Brand(){return <a href="#top" className="brand"><span><WandSparkles size={18}/></span>BruhWiks<b>.</b></a>}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [query,setQuery]=useState("");
  const [filter,setFilter]=useState("All");
  const [activeTheme,setActiveTheme]=useState(themes[0]);
  const [liked,setLiked]=useState<string[]>([]);
  const [creator,setCreator]=useState({accent:"#35f27d",surface:"#111113",radius:18,glow:38,density:"Comfortable",name:"Midnight Pulse"});
  const filtered=useMemo(()=>themes.filter(t=>(filter==="All"||t.category===filter)&&(t.name+t.creator+t.category).toLowerCase().includes(query.toLowerCase())),[filter,query]);
  const categories=["All","Trending","Minimal","Anime","Gaming","Cyberpunk"];

  return <main id="top">
    <div className="grain"/><div className="orb orb-one"/><div className="orb orb-two"/>
    <nav className="nav shell"><Brand/><div className="nav-links">{["Themes","Extensions","Creator","Creators","Download"].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div><div className="nav-actions"><a href="https://github.com/Sigmayraffykaw/bruhwik" className="ghost"><Github size={16}/>GitHub</a><a href="#download" className="button compact"><Download size={16}/>Download</a></div><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav>
    <AnimatePresence>{menu&&<motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mobile-nav">{["Themes","Extensions","Creator","Creators","Download"].map(x=><a onClick={()=>setMenu(false)} key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</motion.div>}</AnimatePresence>

    <section className="hero shell">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="hero-copy">
        <div className="pill"><span/>BruhWiks Preview is live <ArrowRight size={14}/></div>
        <h1>Your Spotify.<br/><em>Reimagined.</em></h1>
        <p>Discover premium themes, powerful extensions and visual experiences built by a new generation of creators.</p>
        <div className="hero-actions"><a href="#themes" className="button"><Sparkles size={18}/>Explore themes</a><a href="#download" className="button secondary"><Download size={18}/>Get BruhWiks</a></div>
        <div className="proof"><div className="faces"><i>A</i><i>K</i><i>M</i><i>J</i></div><div><strong>12,000+ creators</strong><span>building the next music experience</span></div></div>
      </motion.div>

      <motion.div initial={{opacity:0,scale:.92,rotateY:-8}} animate={{opacity:1,scale:1,rotateY:0}} transition={{duration:.9}} className="hero-product">
        <div className="product-glow" style={{background:activeTheme.accent}}/>
        <div className="desktop-frame">
          <div className="frame-top"><div><i/><i/><i/></div><span>BruhWiks Live Preview</span><BadgeCheck size={14}/></div>
          <div className="frame-body">
            <aside><div className="round-play"><CirclePlay size={21}/></div>{[1,2,3,4,5].map(n=><b key={n} className={n===1?"on":""}/>)}</aside>
            <div className="spotify-screen" style={{background:activeTheme.gradient}}>
              <div className="screen-shade"/><div className="screen-head"><div><small>GOOD EVENING</small><h3>Your universe</h3></div><div className="profile"/></div>
              <div className="album-grid">{["Neon nights","Dream state","No skips","Night drive"].map((x,i)=><div key={x}><div className={`cover cover-${i}`}/><b>{x}</b><small>Made for you</small></div>)}</div>
              <div className="now-playing"><div className="mini-cover"/><div><b>Afterglow</b><small>BruhWiks Sessions</small></div><div className="progress"/><CirclePlay size={18}/></div>
            </div>
          </div>
        </div>
        <motion.div animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}} className="float-card left"><Palette/><div><b>{activeTheme.name}</b><span>Live theme preview</span></div></motion.div>
        <motion.div animate={{y:[0,9,0]}} transition={{duration:4.6,repeat:Infinity}} className="float-card right"><Zap/><div><b>One-click ready</b><span>Built for speed</span></div></motion.div>
      </motion.div>
    </section>

    <div className="ticker">{["CREATOR FIRST","LIVE PREVIEWS","OPEN SOURCE","OLED READY","FAST & LIGHT","COMMUNITY BUILT"].map(x=><span key={x}>{x}<Sparkles size={13}/></span>)}</div>

    <section className="section shell intro"><div className="section-label">THE PLATFORM</div><h2>Everything you need.<br/><em>Nothing you don’t.</em></h2><div className="feature-grid">{[
      [Palette,"Premium themes","Handcrafted designs that transform every screen."],
      [Zap,"Instant setup","Simple platform guides and clear installation paths."],
      [Boxes,"Extensions","Mini apps that unlock more from your listening."],
      [Eye,"Live preview","See every detail before adding anything."],
      [Moon,"True OLED","Pure-black experiences for OLED displays."],
      [ShieldCheck,"Verified releases","Transparent files and safer community publishing."]
    ].map(([Icon,title,text]:any,i)=><motion.article initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} key={title}><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><ArrowRight/></motion.article>)}</div></section>

    <section id="themes" className="market"><div className="section shell"><div className="market-head"><div><div className="section-label">THEME MARKETPLACE</div><h2>Find your new vibe.</h2></div><a href="#download">Get BruhWiks <ArrowRight/></a></div>
      <div className="toolbar"><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search themes or creators..."/></label><div className="filters"><SlidersHorizontal size={16}/>{categories.map(c=><button className={filter===c?"active":""} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div></div>
      <div className="theme-layout"><div className="theme-grid">{filtered.map(t=><motion.article layout whileHover={{y:-7}} onMouseEnter={()=>setActiveTheme(t)} key={t.name} className="theme-card"><div className="theme-shot" style={{background:t.gradient}}><span>{t.category}</span><div className="mini-window"><i/><i/><i/><div/></div><button onClick={()=>setLiked(v=>v.includes(t.name)?v.filter(x=>x!==t.name):[...v,t.name])}><Heart fill={liked.includes(t.name)?"currentColor":"none"}/></button></div><div className="theme-copy"><div><h3>{t.name}</h3><p>by {t.creator}</p></div><div className="theme-meta"><span><Download/>{t.installs}</span><span><Heart/>{t.likes}</span></div><button onClick={()=>downloadGuide("Windows")}>Install preview <ArrowRight/></button></div></motion.article>)}</div>
      <aside className="curator"><span>LIVE CURATOR</span><div className="curator-preview" style={{background:activeTheme.gradient}}><div/><b>{activeTheme.name}</b><small>by {activeTheme.creator}</small></div><h3>Preview before you commit.</h3><p>Hover over any theme to update this panel instantly.</p><div className="swatches">{themes.slice(0,5).map(t=><button title={t.name} onClick={()=>setActiveTheme(t)} key={t.name} style={{background:t.accent}}/>)}</div><button className="button full" onClick={()=>downloadGuide("Windows")}><Download/>Install preview</button></aside></div>
    </div></section>

    <section id="extensions" className="section shell"><div className="split-head"><div><div className="section-label">EXTENSIONS</div><h2>Small tools.<br/><em>Huge upgrades.</em></h2></div><p>Give Spotify new abilities without turning your setup into a mess.</p></div><div className="extension-grid">{extensions.map(({icon:Icon,title,text},i)=><motion.article whileHover={{scale:1.02}} key={title}><div className={`extension-visual visual-${i}`}><Icon/></div><div><h3>{title}</h3><p>{text}</p><span>Coming soon <ArrowRight/></span></div></motion.article>)}</div></section>


    <section id="creator" className="section shell creator-studio">
      <div className="creator-copy"><div className="section-label">LIVE CREATOR</div><h2>Build one theme.<br/><em>Watch it change instantly.</em></h2><p>Every control updates the preview in real time. No saving, refreshing, or rebuilding.</p><div className="creator-controls">
        <label><span>Theme name</span><input value={creator.name} onChange={e=>setCreator({...creator,name:e.target.value})}/></label>
        <div className="color-row"><label><span>Accent</span><input type="color" value={creator.accent} onChange={e=>setCreator({...creator,accent:e.target.value})}/></label><label><span>Surface</span><input type="color" value={creator.surface} onChange={e=>setCreator({...creator,surface:e.target.value})}/></label></div>
        <label><span>Corner radius <b>{creator.radius}px</b></span><input type="range" min="4" max="32" value={creator.radius} onChange={e=>setCreator({...creator,radius:Number(e.target.value)})}/></label>
        <label><span>Glow strength <b>{creator.glow}%</b></span><input type="range" min="0" max="100" value={creator.glow} onChange={e=>setCreator({...creator,glow:Number(e.target.value)})}/></label>
        <div className="density"><span>Layout density</span>{["Compact","Comfortable","Spacious"].map(x=><button key={x} className={creator.density===x?"active":""} onClick={()=>setCreator({...creator,density:x})}>{x}</button>)}</div>
        <button className="button creator-save" onClick={()=>{const blob=new Blob([JSON.stringify(creator,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=`${creator.name.toLowerCase().replace(/\s+/g,"-")}.bruhwiks.json`;a.click();URL.revokeObjectURL(url)}}><Download size={17}/>Export theme</button>
      </div></div>
      <motion.div layout className={`creator-preview ${creator.density.toLowerCase()}`} style={{"--creator-accent":creator.accent,"--creator-surface":creator.surface,"--creator-radius":`${creator.radius}px`,"--creator-glow":`${creator.glow/100}`} as React.CSSProperties}>
        <div className="creator-window"><div className="creator-top"><i/><i/><i/><span>BruhWiks Creator · Live</span><b>Saved</b></div><div className="creator-app"><aside><div className="creator-logo"><CirclePlay/></div>{["Home","Search","Library","Create"].map((x,i)=><div className={i===3?"selected":""} key={x}><span/>{x}</div>)}</aside><div className="creator-main"><header><div><small>LIVE PREVIEW</small><h3>{creator.name||"Untitled theme"}</h3></div><button>Publish</button></header><div className="creator-hero-card"><div><small>Made in BruhWiks</small><h4>Design without limits.</h4><p>Your controls are connected directly to this preview.</p></div><CirclePlay/></div><h5>Recently played</h5><div className="creator-albums">{["Neon Drive","After Dark","Soft Static","No Skips"].map((x,i)=><article key={x}><div className={`creator-art ca${i}`}/><b>{x}</b><small>BruhWiks session</small></article>)}</div><div className="creator-player"><div className="mini-cover"/><div><b>{creator.name||"Untitled theme"}</b><small>Live creator preview</small></div><div className="creator-progress"><i/></div><CirclePlay/></div></div></div></div>
        <div className="live-badge"><span/>Updating in real time</div>
      </motion.div>
    </section>

    <section id="creators" className="creator-section"><div className="section shell creator-inner"><div><div className="section-label">FOR CREATORS</div><h2>Build the theme<br/>everyone remembers.</h2><p>Publish themes, ship updates, grow an audience and build your reputation from one creator dashboard.</p><div className="creator-points">{["Versioned releases","Live preview studio","Analytics and feedback","Community verification"].map(x=><span key={x}><Check/>{x}</span>)}</div><a className="button secondary" href="https://github.com/Sigmayraffykaw/bruhwik"><Github/>View source</a></div><div className="dashboard-card"><div className="dash-top"><span>Creator dashboard</span><div><i/><i/><i/></div></div><div className="dash-stats"><article><small>Total installs</small><b>128,402</b><em>+18.2%</em></article><article><small>Theme rating</small><b>4.9</b><em>Top 1%</em></article></div><div className="chart">{[35,48,44,61,57,72,79,91,84,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="dash-release"><div className="release-icon"><UploadCloud/></div><div><b>Nebula Bloom 2.4</b><span>Published successfully</span></div><BadgeCheck/></div></div></div></section>

    <section className="section shell community"><div><div className="section-label">BUILT TOGETHER</div><h2>The customization<br/>community deserves.</h2><p>Made for people who care about every pixel, animation and sound.</p><div className="community-users"><div className="faces big"><i>A</i><i>K</i><i>M</i><i>J</i><i>S</i></div><strong>Join 12K+ early creators</strong></div></div><div className="stats">{[["250K+","Downloads"],["12K+","Themes"],["1M+","Installs"],["99.9%","Uptime"]].map(([n,l])=><article key={l}><strong>{n}</strong><span>{l}</span></article>)}</div></section>

    <section id="download" className="download-section"><div className="download-glow"/><div className="section shell download-inner"><div className="download-mark"><Monitor/></div><div className="section-label">GET STARTED</div><h2>Your Spotify.<br/><em>Upgraded.</em></h2><p>Choose your platform. Preview setup guides are available now while the signed desktop client is being built.</p><div className="platforms"><button onClick={()=>downloadGuide("Windows")}><span><Monitor/></span><div><b>Windows</b><small>Windows 10+</small></div><Download/></button><button onClick={()=>downloadGuide("macOS")}><span><Apple/></span><div><b>macOS</b><small>macOS 12+</small></div><Download/></button><button onClick={()=>downloadGuide("Linux")}><span><Terminal/></span><div><b>Linux</b><small>Most distros</small></div><Download/></button></div><small className="fine">Preview 0.2 • Setup guides only • Signed app coming soon</small></div></section>

    <section className="section shell faq"><div className="section-label">FAQ</div><h2>Questions, answered.</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</section>

    <footer className="shell"><Brand/><div>{["Themes","Extensions","GitHub","Discord","Privacy"].map(x=><a key={x} href={x==="GitHub"?"https://github.com/Sigmayraffykaw/bruhwik":"#"}>{x}</a>)}</div><p>Independent community project. Not affiliated with Spotify AB.</p></footer>
  </main>
}
