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
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      <h1>Page 1</h1>
    </div>
  )
}