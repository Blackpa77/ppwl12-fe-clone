import MusicCard from "./MusicCard";

interface SectionRowProps {
  title: string;
  items: Array<{
    id: string;
    title?: string;
    name?: string;
    artist?: string;
    description?: string;
    cover?: string;
    image?: string;
    type?: string;
    explicit?: boolean;
  }>;
  isArtist?: boolean;
}

export default function SectionRow({ title, items, isArtist = false }: SectionRowProps) {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">{title}</h2>
        <button className="text-sm font-bold text-[#a7a7a7] hover:underline">Show all</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {items.slice(0, 6).map((item) => (
          <MusicCard
            key={item.id}
            title={item.title || item.name || ""}
            subtitle={isArtist ? (item.type || "Artist") : (item.artist || item.description || "")}
            image={item.cover || item.image || ""}
            isRound={isArtist}
            explicit={item.explicit}
          />
        ))}
      </div>
    </section>
  );
}
