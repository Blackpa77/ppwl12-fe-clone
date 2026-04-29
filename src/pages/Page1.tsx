import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import SpotifyFooter from "../components/SpotifyFooter";

export default function Page1() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleCollapse = () => setIsCollapsed(!isCollapsed);
  const handleCreatePlaylist = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
        onCreatePlaylist={handleCreatePlaylist}
      />

      {/* main area: scroll di sini, footer ikut di dalam scroll */}
      <main className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">What do you want to play?</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition">
              <p className="font-bold">Trending songs</p>
            </div>
            <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition">
              <p className="font-bold">Popular artists</p>
            </div>
          </div>
        </div>

        {/* Footer di bawah konten, ikut scroll */}
        <SpotifyFooter />
      </main>

      {/* Modal Popup untuk Create Playlist */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#282828] rounded-xl p-6 w-96 max-w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Create new playlist</h2>
            <input
              type="text"
              placeholder="Playlist name"
              className="w-full bg-[#3e3e3e] text-white px-4 py-2 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-[#b3b3b3] hover:text-white"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-500 text-black font-bold rounded-full hover:scale-105 transition">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
