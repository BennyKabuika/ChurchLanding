"use client";

import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { colors } from "@/app/color";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-black text-white relative overflow-hidden">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 pt-32 pb-10 flex flex-col items-center text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-6xl font-bold mt-20 mb-4 font-instrument"
        >
          CHURCH+
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-gray-400 text-md mb-8 text-lg"
        >
          Changez l&apos;avenir de votre église.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="rounded-lg bg-white text-black px-8 py-4 text-lg font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer mb-6 font-instrument"
          onClick={() => router.push("/waitlist")}
        >
          Accéder en avant-première
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex items-center space-x-3 text-gray-400 mb-16"
        >
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
        </motion.div>
      </motion.div>
      <div className="mockup-wrapper flex justify-center items-end relative">
        {/* Mockup gauche - caché sur mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 30 }}
          animate={{ opacity: 1, x: -50, y: -280 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="mockup-absolute mockup-left hidden md:block"
        >
          <Image
            src="/images/mockupplanning2.png"
            alt="Mockup Planning"
            width={150} // taille réduite tablette
            height={280}
            className="object-contain rounded-md md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[430px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-80 bg-gradient-to-t from-black to-transparent rounded-md" />
        </motion.div>

        {/* Mockup centre - toujours visible, taille adaptée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: -120 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="mockup-center"
        >
          <Image
            src="/images/mockupchurch.png"
            alt="Mockup Church"
            width={200}
            height={320}
            className="object-contain rounded-md w-[180px] h-[320px] md:w-[200px] md:h-[350px] lg:w-[350px] lg:h-[550px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-80 bg-gradient-to-t from-black to-transparent rounded-md" />
        </motion.div>

        {/* Mockup droite - caché sur mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 50, y: -280 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="mockup-absolute mockup-right hidden md:block"
        >
          <Image
            src="/images/mockupimpact2.png"
            alt="Mockup Impact"
            width={150}
            height={280}
            className="object-contain rounded-md md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[430px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-80 bg-gradient-to-t from-black to-transparent rounded-md" />
        </motion.div>
      </div>
    </header>
  );
}
