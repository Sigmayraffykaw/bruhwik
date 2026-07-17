"use client";

import { useMemo, useState } from "react";
import { Home, Search, Library, Plus, Heart, ChevronLeft, ChevronRight, Play, Pause, SkipBack, SkipForward, Repeat2, Shuffle, Volume2, Maximize2, ListMusic, Menu, X } from "lucide-react";

const quick = [
  ["Liked Songs","linear-gradient(135deg,#450af5,#c4efd9)"],
  ["Daily Mix 1","linear-gradient(135deg,#1f4037,#99f2c8)"],
  ["On Repeat","linear-gradient(135deg,#5f2c82,#49a09d)"],
  ["Chill Hits","linear-gradient(135deg,#0f2027,#2c5364)"],
  ["Discover Weekly","linear-gradient(135deg,#ff9966,#ff5e62)"],
  ["Release Radar","linear-gradient(135deg,#232526,#414345)"]
];
const cards = [
  ["Daily Mix 1","Astra Vale, Kairo, Mila Rose and more","linear-gradient(135deg,#1db954,#164a2d)"],
  ["Night Drive","Synthwave and neon pop for late hours","linear-gradient(135deg,#5b2cff,#0e0e2c)"],
  ["Soft Focus","Warm electronic music for deep focus","linear-gradient(135deg,#f7971e,#ffd200)"],
  ["Hyperpop Now","The biggest hyperpop tracks right now","linear-gradient(135deg,#ff2d95,#7a2cff)"],
  ["Bedroom Pop","Dreamy, personal and low-key pop","linear-gradient(135deg,#8ec5fc,#e0c3fc)"],
  ["Fresh Finds","Independent tracks picked for you","linear-gradient(135deg,#00c6ff,#0072ff)"]
];
const tracks = [
  ["Neon Hearts","Astra Vale","Night Bloom","3:42","#6d4aff"],
  ["Out of Orbit","Kairo","Zero Gravity","2:58","#ff4d8d"],
  ["Silverline","Mila Rose","Silverline","3:21","#47c7ff"],
  ["No Signal","Northstar","Static Dreams","4:03","#23d18b"],
  ["Gravity","Juno Skye","Motion","3:35","#ff9e3d"]
];

export default function HomePage(){
  const [playing,setPlaying]=useState(false);
  const [query,setQuery]=useState("");
  const [menu,setMenu]=useState(false);
  const filtered=useMemo(()=>tracks.filter(t=>t.slice(0,3).join(" ").toLowerCase().includes(query.toLowerCase())),[query]);
  return <main className="spotify-app">
    <aside className={menu?"sidebar open":"sidebar"}>
      <button className="close" onClick={()=>setMenu(false)}><X/></button>
      <div className="side-card nav-card">
        <div className="brand"><span>●</span> BruhWiks</div>
        <a className="active"><Home/>Home</a><a><Search/>Search</a>
      </div>
      <div className="side-card library-card">
        <div className="library-head"><span><Library/>Your Library</span><button><Plus/></button></div>
        <div className="chips"><button>Playlists</button><button>Artists</button></div>
        <div className="library-search"><Search size={17}/><span>Recents</span></div>
        {["Liked Songs","Discover Weekly","Release Radar","Night Drive","Chill Hits","Daily Mix 1"].map((x,i)=><div className="lib-item" key={x}><div className="lib-cover" style={{background:quick[i%quick.length][1]}}>{i===0?<Heart size={18}/>:null}</div><div><b>{x}</b><small>{i===0?"Playlist • 42 songs":"Playlist • BruhWiks"}</small></div></div>)}
      </div>
    </aside>
    <section className="main-panel">
      <header className="topbar"><button className="menu" onClick={()=>setMenu(true)}><Menu/></button><div className="arrows"><button><ChevronLeft/></button><button><ChevronRight/></button></div><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="What do you want to play?"/></label><div className="profile">J</div></header>
      <div className="hero-gradient"><h1>Good evening</h1><div className="quick-grid">{quick.map(([name,bg])=><button key={name}><span style={{background:bg}}></span><b>{name}</b><i><Play fill="currentColor"/></i></button>)}</div></div>
      <div className="content-wrap">
        <div className="section-title"><h2>Made for Jade</h2><button>Show all</button></div>
        <div className="card-grid">{cards.map(([name,desc,bg])=><article key={name}><div className="card-art" style={{background:bg}}><button onClick={()=>setPlaying(true)}><Play fill="currentColor"/></button></div><h3>{name}</h3><p>{desc}</p></article>)}</div>
        <div className="section-title"><h2>Jump back in</h2><button>Show all</button></div>
        <div className="track-list">{filtered.map((t,i)=><div className="track" key={t[0]}><span className="num">{i+1}</span><div className="mini-art" style={{background:t[4]}}></div><div className="track-main"><b>{t[0]}</b><small>{t[1]}</small></div><span className="album">{t[2]}</span><span>{t[3]}</span></div>)}</div>
      </div>
    </section>
    <footer className="player"><div className="now"><div className="now-art"></div><div><b>Neon Hearts</b><small>Astra Vale</small></div><Heart size={18}/></div><div className="controls"><div><Shuffle/><SkipBack/><button onClick={()=>setPlaying(!playing)}>{playing?<Pause fill="currentColor"/>:<Play fill="currentColor"/>}</button><SkipForward/><Repeat2/></div><section><span>1:12</span><i><em></em></i><span>3:42</span></section></div><div className="extras"><ListMusic/><Volume2/><i><em></em></i><Maximize2/></div></footer>
  </main>
}
