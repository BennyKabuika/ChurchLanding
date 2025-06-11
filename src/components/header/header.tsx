"use client";

import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { colors } from "@/app/color";

export default function Header() {
  return (
    <header className="bg-black text-white relative overflow-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10 flex flex-col items-center text-center relative z-10">
        {/* Titre principal */}
        <h1 className="text-6xl font-bold mt-20 mb-4 font-instrument">CHURCH+</h1>

        {/* Sous-titre */}
        <p className="text-gray-400 text-md mb-8 text-lg">
          Changez l&apos;avenir de votre église.
        </p>

        {/* Bouton */}
        <button className="rounded-lg bg-white text-black px-8 py-4 text-lg font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer mb-6 font-instrument">
          Accéder en avant-première
        </button>

        {/* Ligne info disponibilité */}
        <div className="flex items-center space-x-3 text-gray-400 mb-16">
          <div className="bg-transparent flex items-center justify-center w-7 h-7">
            <ExclamationCircleIcon className="w-5 h-5 text-gray-200" />
          </div>

          <span style={{ color: colors.Primary2 }}>Disponible bientôt sur</span>

          <div
            className="rounded-full border border-gray-800 px-3 py-3 flex items-center space-x-4 text-sm"
            style={{ background: colors.Primary }}
          >
            <Image
              src="/images/googleplay.png"
              alt="Google Play Store"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-gray-600">|</span>
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mockups */}
      <div className="mockup-wrapper">
        {/* Mockup Planning gauche */}
        <div className="mockup-absolute mockup-left">
          <Image
            src="/images/mockupplanning2.png"
            alt="Mockup Planning"
            width={200}
            height={400}
            className="object-contain rounded-md"
          />
          <div className="mockup-gradient" />
        </div>

        {/* Mockup Church centre */}
        <div className="mockup-center">
          <Image
            src="/images/mockupchurch.png"
            alt="Mockup Church"
            width={300}
            height={500}
            className="object-contain rounded-md"
          />
          <div className="mockup-gradient" />
        </div>

        {/* Mockup Impact droite */}
        <div className="mockup-absolute mockup-right">
          <Image
            src="/images/mockupimpact2.png"
            alt="Mockup Impact"
            width={200}
            height={400}
            className="object-contain rounded-md"
          />
          <div className="mockup-gradient" />
        </div>
      </div>
    </header>
  );
}
