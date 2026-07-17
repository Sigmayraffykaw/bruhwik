
"use client";
import {useState} from "react";
import Link from "next/link";
import {Grid2X2,List,Search,Play,Plus} from "lucide-react";
import {MusicShell} from "../components/MusicShell";
import s from "../components/music.module.css";
const items=[["Afterglow","Playlist · Jade","pink"],["Night Bloom","Album · Astra Vale","purple"],["Astra Vale","Artist · 4.2M listeners","violet"],["Cloudline","Album · Mila Rose","blue"],["Midnight Drive","Playlist · BruhWiks","green"],["Liked tracks","Playlist · 186 songs","orange"]];
export default function Library(){const[grid,setGrid]=useState(true);return <MusicShell><header className={s.libraryHead}><div><span>YOUR COLLECTION</span><h1>Your Library</h1><p>Everything you saved, followed and created—organized your way.</p></div><button><Plus/>New playlist</button></header><div className={s.filters}><div><button className={s.selected}>All</button><button>Playlists</button><button>Albums</button><button>Artists</button><button>Downloaded</button></div><aside><button><Search/></button><button onClick={()=>setGrid(!grid)}>{grid?<List/>:<Grid2X2/>}</button></aside></div><div className={grid?s.libraryGrid:s.libraryList}>{items.map(([t,d,c],i)=><Link href={i===1?"/album/night-bloom":i===2?"/artist/astra-vale":"/playlist/afterglow"} className={s.libraryItem} key={t}><div className={`${s.art} ${s[c]}`}><span>{t.slice(0,2)}</span><button><Play fill="currentColor"/></button></div><div><b>{t}</b><small>{d}</small></div></Link>)}</div></MusicShell>}
