
"use client";
import {useState} from "react";
import Link from "next/link";
import {Search as Icon,Play,SlidersHorizontal} from "lucide-react";
import {MusicShell} from "../components/MusicShell";
import s from "../components/music.module.css";
const songs=["Neon Hearts","Out of Orbit","Silverline","No Signal","Gravity","City Lights","Soft Static"];
const genres=["Pop","Hip-Hop","R&B","Electronic","Indie","Rock","Focus","Sleep","Party","Gaming","Jazz","K-Pop"];
export default function SearchPage(){const[q,setQ]=useState("");const found=songs.filter(x=>x.toLowerCase().includes(q.toLowerCase()));return <MusicShell><header className={s.intro}><span>DISCOVER</span><h1>Find your next obsession.</h1><p>Search the entire BruhWiks universe or explore by mood, moment and sound.</p></header><label className={s.bigSearch}><Icon/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="What do you want to hear?"/><button><SlidersHorizontal/></button></label>{q?<section className={s.section}><Head/><div className={s.songList}>{found.map((x,i)=><div className={s.song} key={x}><span>{i+1}</span><i className={s[["purple","pink","blue","green","orange"][i%5]]}/><div><b>{x}</b><small>Astra Vale · Night Bloom</small></div><em>3:{20+i}</em><button><Play fill="currentColor"/></button></div>)}</div></section>:<section className={s.section}><Head/><div className={s.genres}>{genres.map((g,i)=><Link href={`/search?genre=${g}`} className={s[`genre${i%6}`]} key={g}><b>{g}</b><span>{g.slice(0,2)}</span></Link>)}</div></section>}</MusicShell>}
function Head(){return <div className={s.head}><div><span>BROWSE ALL</span><h2>Explore every mood</h2></div></div>}
