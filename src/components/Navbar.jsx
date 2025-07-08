export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Izquierda */}
      <div className="flex items-center gap-4">
        <button className="border-2 px-3 py-1">Usuario</button>
        <button className="border-2 px-3 py-1">+</button>
      </div>

      {/* Centro */}
      <div className="flex-1 flex justify-center items-center gap-6">
        <a href="#" className="hover:border-b-2 hover:border-[rgb(160,136,247)]">Home</a>
        <a href="#" className="hover:border-b-2 hover:border-[rgb(160,136,247)]">Search</a>
        <a href="#" className="hover:border-b-2 hover:border-[rgb(160,136,247)]">Message</a>
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-1 rounded-full border border-black text-black">Log in</button>
        <button className="px-6 py-1 rounded-full bg-[rgb(160,136,247)] text-white">Sign up</button>
      </div>
    </nav>
  );
}
