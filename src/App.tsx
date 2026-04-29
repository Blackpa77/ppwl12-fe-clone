import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black w-full">
      {/* Main bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Kiri */}
        <div className="flex items-center gap-3 flex-1">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="Spotify"
            className="h-7 w-auto"
          />
          <button className="bg-[#1f1f1f] p-2.5 rounded-full text-white hover:scale-105 transition">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
            </svg>
          </button>
          <div className="hidden sm:flex items-center bg-[#1f1f1f] rounded-full px-4 py-2 gap-2 w-[300px]">
            <svg className="w-4 h-4 fill-white opacity-70 shrink-0" viewBox="0 0 24 24">
              <path d="M10.533 1.279c-5.18 0-9.407 4.274-9.407 9.521s4.226 9.521 9.407 9.521c2.234 0 4.29-.79 5.907-2.104l2.846 2.894a1 1 0 1 0 1.428-1.404l-2.844-2.894a9.571 9.571 0 0 0 2.07-5.013 1 1 0 1 0-1.991-.123 7.569 7.569 0 0 1-7.416 6.124c-4.148 0-7.407-3.279-7.407-7.521s3.259-7.521 7.407-7.521c2.138 0 4.067.895 5.46 2.346a1 1 0 0 0 1.442-1.386A9.468 9.468 0 0 0 10.533 1.28z" />
            </svg>
            <input
              type="text"
              placeholder="What do you want to play?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white text-sm outline-none w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Kanan — desktop */}
        <div className="hidden md:flex items-center gap-5 text-white text-sm font-semibold">
          <a href="#" className="text-gray-300 hover:text-white transition">Premium</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Support</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Download</a>
          <div className="w-px h-5 bg-gray-600" />
          <button className="text-gray-300 hover:text-white transition">Sign up</button>
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition">
            Log in
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? (
            // X icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown menu — mobile only */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-white text-sm font-semibold">
          <a href="#" className="text-gray-300 hover:text-white transition">Premium</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Support</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Download</a>
          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            <button className="text-left text-gray-300 hover:text-white transition">Sign up</button>
            <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition w-full">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;