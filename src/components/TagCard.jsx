export function TagCard({ icon, title, description }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white rounded-2xl shadow-sm">
      <img src={icon} alt={title} className="w-8 h-8" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}