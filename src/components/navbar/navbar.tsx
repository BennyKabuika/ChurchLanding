"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {  X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-[32px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/logochurch.png"
            alt="Church+ Logo"
            width={150}
            height={150}
          />
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Desktop button */}
        <button
          className="hidden md:block rounded-lg bg-white text-black px-6 py-4 text-base font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer font-instrument"
          onClick={() => router.push("/waitlist")}
        >
          Accéder en avant-première
        </button>
        {/* Hamburger for mobile/tablet */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-white cursor-pointer relative z-50 ml-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
        {/* Mobile dropdown menu */}
        <div className="relative">
          <div
            className={`absolute right-0 mt-8 w-56 rounded-xl shadow-lg bg-white border border-gray-200 transition-transform duration-200 origin-top-right ${
              open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
            }`}
            style={{ zIndex: 60 }}
          >
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <div className="flex flex-col items-stretch gap-2 p-4">
              <button
                className="text-black text-lg font-semibold text-left px-3 py-2 rounded hover:bg-gray-100 transition cursor-pointer font-instrument"
                onClick={() => {
                  setOpen(false);
                  router.push("/");
                }}
              >
                Accueil
              </button>
              <button
                className="rounded-lg bg-black text-white px-4 py-2 text-base font-semibold shadow-md hover:bg-gray-900 transition cursor-pointer font-instrument"
                onClick={() => {
                  setOpen(false);
                  router.push("/waitlist");
                }}
              >
                Avant-première
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
