import React from "react";
import Layla from "../assets/layla.png";
import FondoLayla from "../assets/fondoLayla.jpg";

export default function CharacterCard() {
  return (
    <div
      className="relative w-full rounded-3xl p-12 flex flex-row items-center overflow-visible bg-cover bg-center"
      style={{ backgroundImage: `url(${FondoLayla})` }}
    >
      {/* Contenido de texto */}
      <div className="flex flex-col z-10 max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-4 px-10 text-center">Layla</h1>
        <p className="text-black mb-6 px-10">
          Layla es una estudiante de la Academia Sumeru, experta en astrología teórica. Aunque suele ser tímida y parecer siempre cansada, posee una sorprendente conexión con las estrellas, lo que le permite crear escudos poderosos mientras combate. Su determinación brilla tanto como el cielo nocturno que tanto estudia 🌙✨.
        </p>
        <a href="#" className="text-white font-semibold px-40 hover:underline">
          Read More
        </a>
      </div>

      {/* Imagen layla*/}
      <img
        src={Layla}
        alt="Layla"
        className="absolute right-0 translate-x-1/4 w-[57.5rem] top-1/2 -translate-y-[55%] h-auto object-cover"
      />
    </div>
  );
}
