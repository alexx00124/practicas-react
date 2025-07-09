// SearchChip.jsx
export function SearchChip({ text, active }) {
  return (
    <div className={`flex items-center px-4 py-2 rounded-full text-sm ${active ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <span className="material-icons text-sm mr-2">search</span>
      {text}
    </div>
  );
}