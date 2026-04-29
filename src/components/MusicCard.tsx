import { Play } from "lucide-react";

interface MusicCardProps {
  title: string;
  subtitle: string;
  image: string;
  isRound?: boolean;
  gradient?: string;
  label?: string;
  isChart?: boolean;
}

export default function MusicCard({
  title,
  subtitle,
  image,
  isRound = false,
  gradient,
  label,
  isChart = false,
}: MusicCardProps) {
  // Radio card
  if (label === "RADIO") {
    return (
      <div className={`group cursor-pointer min-w-[160px] w-[160px] flex-shrink-0 rounded-xl hover:bg-[#282828] transition-all duration-300 p-2`}>
        <div className="relative">
          <img src={image} alt={title} className="w-full aspect-square object-cover opacity-60" />
          <span className="absolute top-2 left-2 bg-black/50 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest">
            RADIO
          </span>
          <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
            <Play className="w-4 h-4 text-black fill-black ml-0.5" />
          </button>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-white text-sm truncate">{title}</h3>
          <p className="text-white/60 text-xs truncate mt-1">{subtitle}</p>
        </div>
      </div>
    );
  }

  // Chart card
if (isChart) {
  return (
    <div className="group cursor-pointer min-w-[160px] w-[160px] flex-shrink-0 rounded-xl hover:bg-[#282828] transition-all duration-300 p-2">
      {/* Image card */}
      <div className="relative rounded-xl overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        {/* Play button */}
        <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-[#1ed760]">
          <Play className="w-4 h-4 text-black fill-black ml-0.5" />
        </button>
      </div>

      {/* Text di bawah kartu */}
      <p className="text-[#a7a7a7] text-xs leading-snug line-clamp-2">{subtitle}</p>
    </div>
  );
}

  // Default card (song / album / artist)
  return (
    <div className="group relative bg-[#121212] hover:bg-[#282828] rounded-md p-4 transition-all duration-300 cursor-pointer min-w-[160px] w-[160px] flex-shrink-0">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className={`w-full aspect-square object-cover shadow-lg ${isRound ? "rounded-full" : "rounded-md"}`}
        />
        <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105 hover:bg-[#1ed760]">
          <Play className="w-4 h-4 text-black fill-black ml-0.5" />
        </button>
      </div>
      <h3 className="font-bold text-white text-sm truncate mb-1">{title}</h3>
      <p className="text-[#a7a7a7] text-xs truncate flex items-center gap-1">
        {subtitle}
      </p>
    </div>
  );
}
