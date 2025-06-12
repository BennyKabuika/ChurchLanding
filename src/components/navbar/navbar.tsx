"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-[32px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo / Texte */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image
                    src="/images/logochurch.png"
                    alt="Church+ Logo"
                    width={150}
                    height={150}
                  />
        </div>

        {/* Bouton */}
        <button className="rounded-lg bg-white text-black px-6 py-4 text-base font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer font-instrument"
        onClick={() => router.push("/waitlist")}>
          Accéder en avant-première
        </button>
      </div>
    </nav>
  );
}
