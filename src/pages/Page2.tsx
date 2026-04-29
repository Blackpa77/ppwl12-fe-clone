import { useState } from "react";
import SpotifyFooter from "../components/SpotifyFooter";

// Gambar yang diupload
import coverMain from "../assets/youll-be-in-my-heart.png";
import coverWannaTake from "../assets/niki-wanna-take.jpg";
import coverLowkey from "../assets/niki-lowkey.jpg";

const albumTracks = [
  { id: 1, title: "Before – Acoustic Version", artist: "NIKI", duration: "4:38" },
  { id: 2, title: "You'll Be in My Heart", artist: "NIKI", duration: "4:03" },
];

// More by NIKI — pakai gambar yang ada, sisanya placeholder berwarna
const moreByNiki = [
  { id: 1, title: "Nicole",                              year: "2022", img: null,            color: "bg-zinc-700" },
  { id: 2, title: "lowkey",                              year: "2019", img: coverLowkey,      color: "bg-slate-600" },
  { id: 3, title: "Buzz",                                year: "2024", img: null,            color: "bg-stone-700" },
  { id: 4, title: "NIKI Acoustic Sessions: Head In Th...",year: "2018", img: null,            color: "bg-neutral-600" },
  { id: 5, title: "Every Summertime",                    year: "2021", img: null,            color: "bg-amber-900" },
  { id: 6, title: "wanna take this downtown?",           year: "2019", img: coverWannaTake,  color: "bg-red-900" },
  { id: 7, title: "I Like U",                            year: "2017", img: null,            color: "bg-zinc-800" },
  { id: 8, title: "MOONCHILD",                           year: "2020", img: null,            color: "bg-slate-800" },
  { id: 9, title: "Zephyr",                              year: "2018", img: null,            color: "bg-gray-700" },
];

function PlayIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Page2() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-16">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-[240px] min-w-[240px] bg-[#0a0a0a] min-h-[calc(100vh-4rem)] p-4 gap-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">Your Library</span>
            <button className="text-[#a7a7a7] hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-3">
            <p className="font-bold text-sm">Create your first playlist</p>
            <p className="text-[#a7a7a7] text-xs">It's easy, we'll help you</p>
            <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full w-fit hover:scale-105 transition">
              Create playlist
            </button>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-4 flex flex-col gap-3">
            <p className="font-bold text-sm">Let's find some podcasts to follow</p>
            <p className="text-[#a7a7a7] text-xs">We'll keep you updated on new episodes</p>
            <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full w-fit hover:scale-105 transition">
              Browse podcasts
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#2a2a3a] via-[#1a1a1a] to-[#121212] pb-24">
          {/* Album Header */}
          <div className="px-6 pt-8 pb-6 flex flex-col sm:flex-row items-end gap-6">
            <div className="w-[180px] h-[180px] min-w-[180px] shadow-2xl rounded overflow-hidden">
              <img src={coverMain} alt="You'll Be In My Heart" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">Single</span>
              <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">You'll Be In My Heart</h1>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                <span className="font-bold hover:underline cursor-pointer">NIKI</span>
                <span className="text-[#a7a7a7]">•</span>
                <span className="text-[#a7a7a7]">2022</span>
                <span className="text-[#a7a7a7]">•</span>
                <span className="text-[#a7a7a7]">2 songs, 8 min 40 sec</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-6 pb-6 flex items-center gap-6">
            <button
              onClick={() => setPlaying(!playing)}
              className="w-14 h-14 bg-[#1DB954] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#1ed760] transition-all shadow-lg"
            >
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
                  <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <PlayIcon size={22} className="text-black ml-0.5" />
              )}
            </button>
            <button className="text-[#a7a7a7] hover:text-white transition">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
            <button className="text-[#a7a7a7] hover:text-white transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
            <div className="ml-auto flex items-center gap-2 text-[#a7a7a7] text-xs">
              <span>List</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
          </div>

          {/* Track list */}
          <div className="px-6">
            <div className="grid grid-cols-[32px_1fr_auto] gap-4 px-4 pb-3 border-b border-white/10 text-[#a7a7a7] text-sm mb-1">
              <span className="text-center">#</span>
              <span>Title</span>
              <ClockIcon />
            </div>

            {albumTracks.map((track) => (
              <div
                key={track.id}
                className="grid grid-cols-[32px_1fr_auto] gap-4 px-4 py-3 rounded-md hover:bg-white/10 transition cursor-pointer group"
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <span className="flex items-center justify-center text-[#a7a7a7] text-sm">
                  {hoveredTrack === track.id ? <PlayIcon size={14} /> : track.id}
                </span>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-white text-sm font-medium truncate">{track.title}</span>
                  <span className="text-[#a7a7a7] text-xs hover:underline cursor-pointer w-fit">{track.artist}</span>
                </div>
                <span className="flex items-center text-[#a7a7a7] text-sm">{track.duration}</span>
              </div>
            ))}

            <div className="mt-6 mb-8 text-[#a7a7a7] text-xs flex flex-col gap-1">
              <p>September 14, 2022</p>
              <p>© 2022 88rising Records LLC</p>
              <p>℗ 2022 88rising Records LLC</p>
            </div>
          </div>

          {/* More by NIKI */}
          <div className="px-6 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold hover:underline cursor-pointer">More by NIKI</h2>
              <button className="text-xs font-bold text-[#a7a7a7] hover:text-white transition">See discography</button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {moreByNiki.map((item) => (
                <div key={item.id} className="group cursor-pointer min-w-[150px] w-[150px] flex-shrink-0 bg-[#181818] hover:bg-[#282828] rounded-lg p-3 transition-all duration-200">
                  <div className="relative mb-3">
                    <div className={`w-full aspect-square rounded overflow-hidden ${!item.img ? item.color : ""}`}>
                      {item.img && (
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg hover:bg-[#1ed760]">
                      <PlayIcon size={14} className="text-black ml-0.5" />
                    </button>
                  </div>
                  <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                  <p className="text-[#a7a7a7] text-xs mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <SpotifyFooter />
        </main>
      </div>

      {/* Bottom preview bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#af2896] to-[#509bf5] px-6 py-3 flex items-center justify-between z-40">
        <div>
          <p className="text-white text-sm font-bold">Preview of Spotify</p>
          <p className="text-white/80 text-xs">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className="bg-white text-black font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition shrink-0">
          Sign up free
        </button>
      </div>
    </div>
  );
}