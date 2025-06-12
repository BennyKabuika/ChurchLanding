"use client";
import Image from "next/image";

export default function SectionApp() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8 flex flex-col items-center justify-center">
      {/* Titre principal */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 font-instrument">
        Disponible bientôt
      </h2>
      {/* Sous-titre */}
      <p className="text-gray-400 text-center mb-12 max-w-xl">
        Dès son lancement, Church+ révolutionnera la vie de votre église.
      </p>
      {/* Boutons de store */}
      <div className="flex flex-row gap-6 mb-16">
        {/* Google Play */}
        <a
          href="https://play.google.com/store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center bg-gray-100 rounded-2xl px-10 py-1.5 hover:bg-gray-200 transition-colors min-w-[320px] w-[320px] shadow-lg"
        >
          <Image
            src="/images/googleplay.png"
            alt="Google Play"
            width={36}
            height={36}
            className="mr-3"
          />
          <div className="flex flex-col items-start">
            <span className="text-black text-xs font-medium mb-1">Téléchargez sur Google Play Store</span>
            <span className="text-black text-base font-bold">Google Play</span>
          </div>
        </a>
        {/* App Store */}
        <a
          href="https://www.apple.com/fr/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center bg-gray-100 rounded-2xl px-10 py-1.5 hover:bg-gray-200 transition-colors min-w-[320px] w-[320px] shadow-lg"
        >
          <Image
            src="/images/appstore.png"
            alt="App Store"
            width={36}
            height={36}
            className="mr-3"
          />
          <div className="flex flex-col items-start">
            <span className="text-black text-xs font-medium mb-1">Téléchargez sur l&apos;App Store</span>
            <span className="text-black text-base font-bold">App Store</span>
          </div>
        </a>
      </div>
      {/* Mockups */}
      <div className="flex flex-row items-end gap-6 mt-8">
        <Image
          src="/images/mockupame.png"
          alt="Mockup AME"
          width={320}
          height={220}
          className="rounded-2xl"
        />
        <Image
          src="/images/mockupchurch.png"
          alt="Mockup Church"
          width={420}
          height={220}
          className="rounded-2xl -mb-8 shadow-2xl"
        />
        <Image
          src="/images/mockupevangile.png"
          alt="Mockup Evangile"
          width={320}
          height={220}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}