"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, Bell, ChevronLeft, ChevronRight, Disc3, Headphones, Heart,
  Home, Library, ListMusic, Menu, Mic2, MoreHorizontal, Pause, Play,
  Plus, Radio, Repeat2, Search, Shuffle, SkipBack, SkipForward, Sparkles,
  Users, Volume2, Wand2, X, Zap
} from "lucide-react";

const worlds = [
  { name: "Neon Rain", tag: "late-night alt pop", hue: "violet", glyph: "✦" },
  { name: "Zero Gravity", tag: "floating electronic", hue: "cyan", glyph: "◌" },
  { name: "Velvet Heat", tag: "slow-burn R&B", hue: "coral", glyph: "◐" },
  { name: "Digital Bloom", tag: "hyperpop & future bass", hue: "lime", glyph: "✺" },
];

const releases = [
  { title: "Night Bloom", artist: "Astra Vale", meta: "Album · 2026", tone: "one" },
  { title: "Chrome Hearts", artist: "Kairo", meta: "EP · 6 tracks", tone: "two" },
  { title: "Soft Collision", artist: "Mila Rose", meta: "Single · New", tone: "three" },
  { title: "Static Dreams", artist: "Northstar", meta: "Album · 2026", tone: "four" },
  { title: "Ultraviolet", artist: "Lumi", meta: "Album · 2025", tone: "five" },
];

const tracks = [
  { title: "Neon Hearts", artist: "Astra Vale", album: "Night Bloom", time: "3:42", tone: "one" },
  { title: "Out of Orbit", artist: "Kairo", album: "Chrome Hearts", time: "2:58", tone: "two" },
  { title: "Silverline", artist: "Mila Rose", album: "Soft Collision", time: "3:21", tone: "three" },
  { title: "No Signal", artist: "Northstar", album: "Static Dreams", time: "4:03", tone: "four" },
];

export default function HomePage() {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [activeWorld, setActiveWorld] = useState(0);

  const filtered = useMemo(() => tracks.filter((track) =>
    `${track.title} ${track.artist} ${track.album}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <main className="shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grain" />

      <aside className={`rail ${menu ? "show" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark"><Disc3 /></div>
          <div><strong>BruhWiks</strong><span>music, reimagined</span></div>
          <button className="rail-close" onClick={() => setMenu(false)}><X /></button>
        </div>

        <nav className="main-nav">
          <button className="active"><Home />Home</button>
          <button><Sparkles />Discover</button>
          <button><Radio />Live</button>
          <button><Library />Collection</button>
        </nav>

        <div className="nav-label">YOUR SPACE</div>
        <nav className="mini-nav">
          <button><Heart />Favourites</button>
          <button><ListMusic />Playlists</button>
          <button><Mic2 />Artists</button>
          <button><Users />Rooms</button>
        </nav>

        <button className="create-mix"><Plus /><span><b>Create a mix</b><small>Blend tracks, moods and friends</small></span></button>

        <div className="profile-card">
          <div className="avatar">J</div>
          <div><b>Jade</b><small>Pulse member</small></div>
          <MoreHorizontal />
        </div>
      </aside>

      <section className="stage">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenu(true)}><Menu /></button>
          <div className="history"><button><ChevronLeft /></button><button><ChevronRight /></button></div>
          <label className="search-box"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the BruhWiks universe" /></label>
          <div className="top-actions"><button><Bell /></button><div className="top-avatar">J</div></div>
        </header>

        <div className="content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><Zap />BRUHWIKS EXCLUSIVE</div>
              <h1>Hear music<br/><em>in colour.</em></h1>
              <p>A living music space shaped by your taste, your mood and the people listening with you.</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play fill="currentColor" />}Play Night Bloom</button>
                <button className="secondary"><Heart />Save release</button>
              </div>
              <div className="hero-meta"><span>ASTRA VALE</span><i />12 TRACKS<i />IMMERSIVE AUDIO</div>
            </div>
            <div className="hero-art">
              <div className="orbit orbit-1"/><div className="orbit orbit-2"/><div className="planet"><div className="planet-core">AV</div></div>
              <div className="float-card fc-one"><Sparkles/><span><b>98% match</b><small>Built for your taste</small></span></div>
              <div className="float-card fc-two"><Headphones/><span><b>4.2M listeners</b><small>Trending worldwide</small></span></div>
            </div>
          </section>

          <section className="section-block">
            <div className="section-head"><div><span className="kicker">CHOOSE A FEELING</span><h2>Enter a sound world</h2></div><button>View all <ArrowRight /></button></div>
            <div className="world-grid">
              {worlds.map((world, index) => <button key={world.name} className={`world-card ${world.hue} ${activeWorld === index ? "selected" : ""}`} onClick={() => setActiveWorld(index)}>
                <span className="world-glyph">{world.glyph}</span><div><b>{world.name}</b><small>{world.tag}</small></div><ArrowRight />
              </button>)}
            </div>
          </section>

          <section className="section-block">
            <div className="section-head"><div><span className="kicker">CURATED FOR JADE</span><h2>Fresh from your orbit</h2></div><button>See everything <ArrowRight /></button></div>
            <div className="release-grid">
              {releases.map((item) => <article className="release-card" key={item.title}>
                <div className={`cover ${item.tone}`}><div className="cover-glow"/><span>{item.title.slice(0,2).toUpperCase()}</span><button onClick={() => setPlaying(true)}><Play fill="currentColor" /></button></div>
                <h3>{item.title}</h3><p>{item.artist}</p><small>{item.meta}</small>
              </article>)}
            </div>
          </section>

          <section className="split-grid">
            <div className="track-panel">
              <div className="section-head compact"><div><span className="kicker">MOVING FAST</span><h2>Pulse chart</h2></div><button><MoreHorizontal /></button></div>
              <div className="track-list">
                {(query ? filtered : tracks).map((track, index) => <button className="track-row" key={track.title} onClick={() => setPlaying(true)}>
                  <span className="track-index">0{index + 1}</span><div className={`track-cover ${track.tone}`}><Play fill="currentColor" /></div>
                  <div className="track-copy"><b>{track.title}</b><small>{track.artist}</small></div><span className="album-name">{track.album}</span><Heart/><time>{track.time}</time><MoreHorizontal/>
                </button>)}
              </div>
            </div>

            <aside className="room-card">
              <div className="room-visual"><span className="wave w1"/><span className="wave w2"/><span className="wave w3"/><span className="wave w4"/><div className="room-badge"><Users/>128 live</div></div>
              <span className="kicker">LISTEN TOGETHER</span><h2>Midnight Room</h2><p>A live mix of dark pop, R&B and electronic picked by everyone inside.</p>
              <div className="listeners"><span>J</span><span>A</span><span>K</span><span>M</span><small>+124</small></div>
              <button className="join-room"><Radio />Join the room</button>
            </aside>
          </section>
        </div>
      </section>

      <footer className="player">
        <div className="now-playing"><div className="mini-cover one">NB</div><div><b>Neon Hearts</b><small>Astra Vale · Night Bloom</small></div><button className={liked ? "liked" : ""} onClick={() => setLiked(!liked)}><Heart fill={liked ? "currentColor" : "none"}/></button></div>
        <div className="player-center"><div className="controls"><button><Shuffle/></button><button><SkipBack/></button><button className="main-play" onClick={() => setPlaying(!playing)}>{playing ? <Pause fill="currentColor"/> : <Play fill="currentColor"/>}</button><button><SkipForward/></button><button><Repeat2/></button></div><div className="progress"><span>1:18</span><div><i /></div><span>3:42</span></div></div>
        <div className="player-right"><button><Wand2/></button><button><ListMusic/></button><Volume2/><div className="volume"><i/></div></div>
      </footer>
    </main>
  );
}
