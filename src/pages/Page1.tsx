import Sidebar from "../components/Sidebar";
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
  return (
    <div className="flex h-screen bg-black overflow-hidden pt-[64px]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-[#121212]">
        <div className="px-6 py-6">
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
