"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Bell, ChevronLeft, ChevronRight, Heart, Home, Library, ListMusic,
  Menu, MoreHorizontal, Pause, Play, Plus, Radio, Repeat2, Search,
  Shuffle, SkipBack, SkipForward, Sparkles, Volume2, X
} from "lucide-react";

const mixes = [
  { title: "Midnight Drive", subtitle: "Synthwave, alt-pop and neon energy", art: "linear-gradient(135deg,#5926ff,#00d4ff)" },
  { title: "Main Character", subtitle: "Big hooks and unstoppable confidence", art: "linear-gradient(135deg,#ff2d75,#ff9b42)" },
  { title: "After Hours", subtitle: "Late-night R&B and slow motion beats", art: "linear-gradient(135deg,#101522,#7647ff)" },
  { title: "Hyper Focus", subtitle: "Electronic focus without distractions", art: "linear-gradient(135deg,#02b875,#073b4c)" },
  { title: "Cloud Nine", subtitle: "Dream pop, indie and soft electronic", art: "linear-gradient(135deg,#8cc8ff,#f7a8ff)" },
];

const tracks = [
  { title: "Neon Hearts", artist: "Astra Vale", album: "Night Bloom", time: "3:42", color: "#6d4aff" },
  { title: "Out of Orbit", artist: "Kairo", album: "Zero Gravity", time: "2:58", color: "#ff4d8d" },
  { title: "Silverline", artist: "Mila Rose", album: "Silverline", time: "3:21", color: "#47c7ff" },
  { title: "No Signal", artist: "Northstar", album: "Static Dreams", time: "4:03", color: "#23d18b" },
  { title: "Gravity", artist: "Juno Skye", album: "Motion", time: "3:35", color: "#ff9e3d" },
];

const artists = [
  ["Astra Vale", "#775cff"], ["Kairo", "#ff457d"], ["Mila Rose", "#53c9ff"],
  ["Northstar", "#36d49b"], ["Juno Skye", "#ffad4d"], ["Lumi", "#d66dff"]
];

function Logo(){return <div className="logo"><span><Sparkles size={18}/></span>BruhWiks</div>}

export default function HomePage(){
  const [query,setQuery]=useState("");
  const [playing,setPlaying]=useState(false);
  const [liked,setLiked]=useState(false);
  const [menu,setMenu]=useState(false);
  const filtered=useMemo(()=>tracks.filter(t=>(t.title+t.artist+t.album).toLowerCase().includes(query.toLowerCase())),[query]);

  return <main className="app-shell">
    <aside className={`sidebar ${menu?"open":""}`}>
      <div className="side-top"><Logo/><button className="close-side" onClick={()=>setMenu(false)}><X/></button></div>
      <nav>
        <a className="active"><Home/>Home</a><a><Search/>Explore</a><a><Radio/>Stations</a>
      </nav>
      <div className="side-label">YOUR MUSIC</div>
      <nav><a><Library/>Library</a><a><Heart/>Liked Songs</a><a><ListMusic/>Playlists</a></nav>
      <div className="playlist-create"><button><Plus/></button><div><b>Create playlist</b><small>Build your next soundtrack</small></div></div>
      <div className="side-footer"><span className="avatar">J</span><div><b>Jade</b><small>Premium listener</small></div><MoreHorizontal/></div>
    </aside>

    <section className="content">
      <header className="topbar">
        <button className="mobile-menu" onClick={()=>setMenu(true)}><Menu/></button>
        <div className="history"><button><ChevronLeft/></button><button><ChevronRight/></button></div>
        <label className="search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search songs, artists, albums and playlists"/></label>
        <div className="top-actions"><button><Bell/></button><span className="avatar">J</span></div>
      </header>

      <div className="page">
        <motion.section className="hero" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>
          <div className="hero-glow one"/><div className="hero-glow two"/>
          <div className="hero-copy"><span className="eyebrow">BRUHWIKS ORIGINAL</span><h1>Music for every version of you.</h1><p>Millions of songs, hand-picked mixes, live stations and albums in one beautifully simple place.</p><div><button className="primary" onClick={()=>setPlaying(true)}><Play fill="currentColor"/>Play now</button><button className="secondary"><Plus/>Add to library</button></div></div>
          <div className="hero-art"><div className="disc"><i/><span>BW</span></div><div className="cover"><small>EXCLUSIVE MIX</small><b>AFTER<br/>DARK</b><em>BruhWiks Music</em></div></div>
        </motion.section>

        <section className="section-block"><div className="section-head"><div><span>MADE FOR YOU</span><h2>Your daily rotation</h2></div><button>See all</button></div><div className="card-grid">{mixes.map((m,i)=><motion.article className="music-card" whileHover={{y:-7}} key={m.title}><div className="cover-art" style={{background:m.art}}><div className="art-noise"/><b>{String(i+1).padStart(2,"0")}</b><button onClick={()=>setPlaying(true)}><Play fill="currentColor"/></div><h3>{m.title}</h3><p>{m.subtitle}</p></motion.article>)}</div></section>

        <section className="section-block"><div className="section-head"><div><span>TRENDING NOW</span><h2>Top tracks</h2></div><button>View chart</button></div><div className="track-table"><div className="track-head"><span>#</span><span>Title</span><span>Album</span><span>Time</span></div>{filtered.map((t,i)=><div className="track-row" key={t.title}><span>{i+1}</span><div className="track-title"><i style={{background:t.color}}>{t.title.charAt(0)}</i><div><b>{t.title}</b><small>{t.artist}</small></div></div><span>{t.album}</span><span>{t.time}</span><button onClick={()=>setPlaying(true)}><Play size={16} fill="currentColor"/></button></div>)}</div></section>

        <section className="section-block"><div className="section-head"><div><span>ARTISTS YOU LOVE</span><h2>Popular artists</h2></div><button>See all</button></div><div className="artist-grid">{artists.map(([name,color])=><article key={name}><div className="artist-photo" style={{background:`radial-gradient(circle at 35% 25%,#fff8,transparent 16%),linear-gradient(145deg,${color},#111)`}}><span>{name.split(" ").map(x=>x[0]).join("")}</span></div><h3>{name}</h3><p>Artist</p></article>)}</div></section>
      </div>
    </section>

    <div className="player">
      <div className="now"><div className="mini-cover">N</div><div><b>Neon Hearts</b><small>Astra Vale</small></div><button onClick={()=>setLiked(!liked)} className={liked?"liked":""}><Heart fill={liked?"currentColor":"none"}/></button></div>
      <div className="controls"><div><button><Shuffle/></button><button><SkipBack/></button><button className="play-main" onClick={()=>setPlaying(!playing)}>{playing?<Pause fill="currentColor"/>:<Play fill="currentColor"/>}</button><button><SkipForward/></button><button><Repeat2/></button></div><div className="progress"><span>1:18</span><i><b style={{width:playing?"42%":"28%"}}/></i><span>3:42</span></div></div>
      <div className="volume"><ListMusic/><Volume2/><i><b/></i></div>
    </div>
  </main>
}
