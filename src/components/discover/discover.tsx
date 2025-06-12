"use client";

import Image from "next/image";
import { Users, Globe, Star, Handshake } from "lucide-react"; 
import { colors } from "@/app/color";

export default function Discover() {
  return (
    <section className="bg-[#454444] text-white py-24 px-4 md:px-8 flex flex-col items-center">

      
      <div className="mb-6">
        <span className="px-4 py-2 rounded-full border border-gray-700 text-white text-sm font-medium" style={{background: colors.Primary3}}>
          Découvrez
        </span>
      </div>

      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-instrument" >
        Découvrez Church+
      </h2>

      
      <p className=" text-center max-w-2xl mb-20">
        Une application révolutionnaire qui transforme la façon dont les églises et les communautés chrétiennes se connectent.
      </p>

      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl px-10 py-6 border border-gray-900 text-left" style={{background: colors.Primary4}}>
            <div className="inline-flex items-center p-4 rounded-2xl mb-4" style={{background: colors.Primary3}}>
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Système de connexion propre à votre église.</h3>
            <p className="text-gray-400 text-md">
              Connectez-vous à votre église pour suivre la vie de votre communauté.
            </p>
          </div>

          <div className="rounded-2xl px-10 py-6 border border-gray-900 text-left" style={{background: colors.Primary4}}>
            <div className="inline-flex items-center p-4 rounded-2xl mb-4" style={{background: colors.Primary3}}>
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Portée mondiale</h3>
            <p className="text-gray-400 text-md">
              Connectez-vous sans effort avec des personnes dans plus de 50 pays.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/mockupsignin.png"
            alt="Mockup Sign In"
            width={450}
            height={600}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl px-10 py-6  border border-gray-900 text-left" style={{background: colors.Primary4}}>
            <div className="inline-flex items-center p-4 rounded-2xl mb-4" style={{background: colors.Primary3}}>
              <Star className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Expérience personnalisée</h3>
            <p className="text-gray-400 text-md">
              Du contenu et des recommandations sur mesure rien que pour vous.
            </p>
          </div>

          <div className=" rounded-2xl px-10 py-6 border border-gray-900 text-left" style={{background: colors.Primary4}}>
            <div className="inline-flex items-center p-4 rounded-2xl mb-4" style={{background: colors.Primary3}}>
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Soutien communautaire</h3>
            <p className="text-gray-400 text-md">
              Rejoignez des communautés florissantes autour de vos intérêts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
