// ArtworkCard.jsx
export function ArtworkCard({ image, author }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt="Artwork" className="w-32 h-32 rounded-xl object-cover mb-1" />
      <span className="text-xs text-gray-400">{author}</span>
    </div>
  );
}

