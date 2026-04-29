import { useState } from "react";

const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM21 20h-5V4.58l5 2.887V20zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
    <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
    <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.861c-.272.064-.455.17-.586.3-.206.206-.4.526-.563.905-.226.525-.39 1.163-.5 1.876h4.02a7.624 7.624 0 0 0-.5-1.876c-.164-.379-.358-.699-.564-.905-.13-.13-.313-.236-.586-.3A2.173 2.173 0 0 0 8 1c-.377 0-.629.053-.743.088a2.03 2.03 0 0 0-.515.051zm-2.2.443A6.992 6.992 0 0 0 2.122 5.22h2.516c.14-.958.368-1.835.685-2.587.13-.31.28-.6.454-.866a5.027 5.027 0 0 1-.234-.185zm5.918 0-.233.185c.173.266.323.556.454.866.317.752.544 1.629.685 2.587h2.516a6.993 6.993 0 0 0-3.422-3.638zM1.636 6.22A7.015 7.015 0 0 0 1 8c0 .628.083 1.236.237 1.816l.045-.016H4.08a16.163 16.163 0 0 1 0-3.58H1.636zm.486 4.78A6.992 6.992 0 0 0 5.54 14.64a5.123 5.123 0 0 1-.454-.866c-.317-.752-.545-1.629-.685-2.587H1.885v-.187h.237zm4.212 0c.11.713.274 1.35.5 1.876.163.379.357.699.563.905.256.256.607.388 1.086.388.48 0 .83-.132 1.086-.388.206-.206.4-.526.564-.905.225-.526.39-1.163.5-1.876h-4.3zm6.048 0c-.14.958-.368 1.835-.685 2.587-.13.31-.28.6-.454.866a6.993 6.993 0 0 0 3.422-3.638h-.001l-2.282.185zm2.982-1.78l-.046.016H12.52a16.163 16.163 0 0 0 0-3.58h2.844A7.014 7.014 0 0 1 15.6 8c0 .628-.083 1.236-.237 1.22zM5.08 8c0 .593.03 1.173.088 1.735h5.664A14.4 14.4 0 0 0 10.92 8c0-.593-.03-1.173-.088-1.735H5.168A14.4 14.4 0 0 0 5.08 8z"/>
  </svg>
);

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onCreatePlaylist: () => void;
}

export function Sidebar({ isCollapsed, onToggleCollapse, onCreatePlaylist }: SidebarProps) {
  return (
    <aside className={`bg-black flex-shrink-0 transition-all duration-300 ${isCollapsed ? "w-16" : "w-[300px]"}`}>
      <div className="h-full flex flex-col gap-2 p-2">
        <div className="bg-[#121212] rounded-lg flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3">
            {!isCollapsed && (
              <button className="flex items-center gap-3 text-[#b3b3b3] hover:text-white transition-colors">
                <LibraryIcon />
                <span className="font-bold">Your Library</span>
              </button>
            )}
            {isCollapsed && (
              <div className="mx-auto">
                <LibraryIcon />
              </div>
            )}
            <button
              onClick={onToggleCollapse}
              className="w-8 h-8 rounded-full hover:bg-[#1a1a1a] flex items-center justify-center text-[#b3b3b3] hover:text-white transition-colors ml-auto"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                <path d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8z" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto sidebar-scroll px-2 pb-2">
            {!isCollapsed ? (
              <>
                <div className="bg-[#242424] rounded-lg p-4 mb-4">
                  <h3 className="font-bold text-white mb-1">Create your first playlist</h3>
                  <p className="text-sm text-[#b3b3b3] mb-4">It's easy, we'll help you</p>
                  <button
                    onClick={onCreatePlaylist}
                    className="bg-white text-black font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform"
                  >
                    Create playlist
                  </button>
                </div>

                <div className="bg-[#242424] rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-white mb-1">Let's find some podcasts to follow</h3>
                  <p className="text-sm text-[#b3b3b3] mb-4">We'll keep you updated on new episodes</p>
                  <button className="bg-white text-black font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform">
                    Browse podcasts
                  </button>
                </div>

                <nav className="flex flex-wrap gap-x-3 gap-y-2 px-2 text-[11px] text-[#b3b3b3] mb-6">
                  <span className="hover:underline cursor-pointer">Legal</span>
                  <span className="hover:underline cursor-pointer">Safety & Privacy Center</span>
                  <span className="hover:underline cursor-pointer">Privacy Policy</span>
                  <span className="hover:underline cursor-pointer">Cookies</span>
                  <span className="hover:underline cursor-pointer">About Ads</span>
                  <span className="hover:underline cursor-pointer">Accessibility</span>
                  <span className="hover:underline cursor-pointer">Notice at Collection</span>
                </nav>

                <div className="flex items-center gap-2 px-2 text-[11px] text-[#b3b3b3] hover:underline mb-2 cursor-pointer">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                  </svg>
                  Your Privacy Choices
                </div>

                <span className="px-2 text-[11px] text-[#b3b3b3] hover:underline cursor-pointer">Cookies</span>

                <button className="mt-6 mx-2 flex items-center gap-2 border border-[#7c7c7c] rounded-full px-4 py-2 text-sm text-white font-bold hover:scale-105 hover:border-white transition-all">
                  <GlobeIcon />
                  English
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 mt-4">
                <button
                  onClick={onCreatePlaylist}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                  title="Create playlist"
                >
                  <PlusIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}