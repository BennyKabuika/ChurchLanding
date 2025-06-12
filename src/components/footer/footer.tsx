"use client";
import { Mail } from "lucide-react";
import { colors } from "@/app/color";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-20 pb-8 px-4 md:px-8">
      {/* Léger gradient blanc tout en haut */}
      <div
        className="absolute top-0 left-0 right-0 h-32 flex items-start justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-2/3 h-32 rounded-full blur-2xl opacity-10 bg-white mx-auto" />
      </div>
      <div className="relative flex flex-col items-center z-10">
        <Image
          src="/images/logochurch.png"
          alt="Church+ Logo"
          width={150}
          height={150}
          className="mb-12"
        />
        <p className="text-gray-300 text-center mb-12 text-lg">
          Transforme ton église avec Church+
        </p>
        <a
          href="mailto:contact@mkdynamics.be"
          className="text-md hover:bg-gray-700 text-white px-8 py-5 rounded-xl font-semibold transition-colors mb-12 flex items-center gap-2"
            style={{ background: colors.Primary3 }}
        >
          <Mail className="w-6 h-6 mr-2" />
          contact@mkdynamics.be
        </a>
        {/* Ligne séparatrice */}
        <div className="w-full h-px bg-gray-700 my-8" />
        <div className="w-full flex flex-row items-center justify-between text-md ml-auto">
          <a
            href="https://mkdynamics.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            MKDynamics
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}