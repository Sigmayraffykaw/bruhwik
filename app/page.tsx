"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell, ChevronLeft, ChevronRight, Heart, Home, Library, ListMusic,
  Menu, MoreHorizontal, Pause, Play, Plus, Radio, Repeat2, Search,
  Shuffle, SkipBack, SkipForward, Sparkles, Volume2, X
} from "lucide-react";

const mixes = [
  ["Midnight Drive", "Synthwave, alt-pop and neon energy", "mix-one"],
  ["Main Character", "Big hooks and unstoppable confidence", "mix-two"],
  ["After Hours", "Late-night R&B and slow motion beats", "mix-three"],
  ["Hyper Focus", "Electronic focus without distractions", "mix-four"],
  ["Cloud Nine", "Dream pop, indie and soft electronic", "mix-five"]
];

const tracks = [
  ["Neon Hearts", "Astra Vale", "Night Bloom", "3:42", "tone-one"],
  ["Out of Orbit", "Kairo", "Zero Gravity", "2:58", "tone-two"],
  ["Silverline", "Mila Rose", "Silverline", "3:21", "tone-three"],
  ["No Signal", "Northstar", "Static Dreams", "4:03", "tone-four"],
  ["Gravity", "Juno Skye", "Motion", "3:35", "tone-five"]
];

const artists = [
  ["Astra Vale", "artist-one"], ["Kairo", "artist-two"], ["Mila Rose", "artist-three"],
  ["Northstar", "artist-four"], ["Juno Skye", "artist-five"], ["Lumi", "artist-six"]
];

function Logo() {
  return (
    <div className="logo">
      <span><Sparkles size={18} /></span>
      BruhWiks
    </div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [menu, setMenu] = useState(false);

  const visibleTracks = tracks.filter(function (track) {
    return track.join(" ").toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main className="app-shell">
      <aside className={menu ? "sidebar open" : "sidebar"}>
        <div className="side-top">
          <Logo />
          <button className="close-side" onClick={function(){setMenu(false);}}><X /></button>
        </div>
        <nav>
          <a className="active"><Home />Home</a>
          <a><Search />Explore</a>
          <a><Radio />Stations</a>
        </nav>
        <div className="side-label">YOUR MUSIC</div>
        <nav>
          <a><Library />Library</a>
          <a><Heart />Liked Songs</a>
          <a><ListMusic />Playlists</a>
        </nav>
        <div className="playlist-create">
          <button><Plus /></button>
          <div><b>Create playlist</b><small>Build your next soundtrack</small></div>
        </div>
        <div className="side-footer">
          <span className="avatar">J</span>
          <div><b>Jade</b><small>Premium listener</small></div>
          <MoreHorizontal />
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <button className="mobile-menu" onClick={function(){setMenu(true);}}><Menu /></button>
          <div className="history"><button><ChevronLeft /></button><button><ChevronRight /></button></div>
          <label className="search">
            <Search />
            <input value={query} onChange={function(e){setQuery(e.target.value);}} placeholder="Search songs, artists, albums and playlists" />
          </label>
          <div className="top-actions"><button><Bell /></button><span className="avatar">J</span></div>
        </header>

        <div className="page">
          <motion.section className="hero" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>
            <div className="hero-glow one" />
            <div className="hero-glow two" />
            <div className="hero-copy">
              <span className="eyebrow">BRUHWIKS ORIGINAL</span>
              <h1>Music for every version of you.</h1>
              <p>Millions of songs, hand-picked mixes, live stations and albums in one beautifully simple place.</p>
              <div>
                <button className="primary" onClick={function(){setPlaying(true);}}><Play fill="currentColor" />Play now</button>
                <button className="secondary"><Plus />Add to library</button>
              </div>
            </div>
            <div className="hero-art">
              <div className="disc"><i /><span>BW</span></div>
              <div className="cover"><small>EXCLUSIVE MIX</small><b>AFTER<br />DARK</b><em>BruhWiks Music</em></div>
            </div>
          </motion.section>

          <section className="section-block">
            <div className="section-head"><div><span>MADE FOR YOU</span><h2>Your daily rotation</h2></div><button>See all</button></div>
            <div className="card-grid">
              {mixes.map(function(mix, index){
                return (
                  <motion.article className="music-card" whileHover={{y:-7}} key={mix[0]}>
                    <div className={"cover-art " + mix[2]}>
                      <div className="art-noise" />
                      <b>{String(index + 1).padStart(2,"0")}</b>
                      <button onClick={function(){setPlaying(true);}}><Play fill="currentColor" /></button>
                    </div>
                    <h3>{mix[0]}</h3><p>{mix[1]}</p>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="section-block">
            <div className="section-head"><div><span>TRENDING NOW</span><h2>Top tracks</h2></div><button>View chart</button></div>
            <div className="track-table">
              <div className="track-head"><span>#</span><span>Title</span><span>Album</span><span>Time</span></div>
              {visibleTracks.map(function(track, index){
                return (
                  <div className="track-row" key={track[0]}>
                    <span>{index + 1}</span>
                    <div className="track-title"><i className={track[4]}>{track[0].charAt(0)}</i><div><b>{track[0]}</b><small>{track[1]}</small></div></div>
                    <span>{track[2]}</span><span>{track[3]}</span>
                    <button onClick={function(){setPlaying(true);}}><Play size={16} fill="currentColor" /></button>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="section-block">
            <div className="section-head"><div><span>ARTISTS YOU LOVE</span><h2>Popular artists</h2></div><button>See all</button></div>
            <div className="artist-grid">
              {artists.map(function(artist){
                return (
                  <article key={artist[0]}>
                    <div className={"artist-photo " + artist[1]}><span>{artist[0].split(" ").map(function(word){return word[0];}).join("")}</span></div>
                    <h3>{artist[0]}</h3><p>Artist</p>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      <div className="player">
        <div className="now">
          <div className="mini-cover">N</div>
          <div><b>Neon Hearts</b><small>Astra Vale</small></div>
          <button onClick={function(){setLiked(!liked);}} className={liked ? "liked" : ""}><Heart fill={liked ? "currentColor" : "none"} /></button>
        </div>
        <div className="controls">
          <div><button><Shuffle /></button><button><SkipBack /></button><button className="play-main" onClick={function(){setPlaying(!playing);}}>{playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</button><button><SkipForward /></button><button><Repeat2 /></button></div>
          <div className="progress"><span>1:18</span><i><b className={playing ? "progress-playing" : "progress-paused"} /></i><span>3:42</span></div>
        </div>
        <div className="volume"><ListMusic /><Volume2 /><i><b /></i></div>
      </div>
    </main>
  );
}
