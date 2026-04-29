import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import SectionRow from "../components/SectionRow";
import SpotifyFooter from "../components/SpotifyFooter";
import {
  trendingSongs,
  popularArtists,
  popularAlbums,
  popularRadio,
  featuredCharts,
} from "../lib/spotify-data";

export default function Page1() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-black overflow-hidden pt-[64px]">
      <div className="hidden md:block"> 
        <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        onCreatePlaylist={() => console.log("Create playlist")}
      /></div>

      <main className="flex-1 overflow-y-auto bg-[#121212]">
        <div className="px-6 py-6 pr-8">
          <SectionRow title="Trending songs" items={trendingSongs} />
          <SectionRow title="Popular artists" items={popularArtists} isArtist />
          <SectionRow title="Popular albums and singles" items={popularAlbums} />
          <SectionRow title="Popular radio" items={popularRadio} isRadio />
          <SectionRow title="Featured Charts" items={featuredCharts} isChart />
        </div>
        <SpotifyFooter />
      </main>
    </div>
  );
}