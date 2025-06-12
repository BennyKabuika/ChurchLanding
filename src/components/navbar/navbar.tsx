"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-3xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo / Texte */}
        <div className="flex items-center">
          <p className="text-2xl font-bold text-white font-instrument">CHURCH+</p>
        </div>

        {/* Bouton */}
        <button className="rounded-lg bg-white text-black px-6 py-4 text-base font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer font-instrument">
          Accéder en avant-première
        </button>
      </div>
    </nav>
  );
}
