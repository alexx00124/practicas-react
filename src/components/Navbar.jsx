import { FaUser } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex space-x-2">
        {/* Botón usuario */}
        <button className="bg-gray-700 text-white p-2 rounded-md">
          <FaUser className="w-5 h-5" />
        </button>

        {/* Botón agregar */}
        <button className="bg-[rgba(190,146,237)] text-white p-2 rounded-md">
          <IoMdAdd className="w-5 h-5" />
        </button>
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
        <button className="px-6 py-1 rounded-full bg-[rgba(190,146,237)] text-white">Sign up</button>
      </div>
    </nav>
  );
}
