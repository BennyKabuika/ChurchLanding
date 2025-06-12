"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCounter(to: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      setCount(Math.floor(progress * to));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [to, duration, start]);

  return count;
}

function Counter({
  to,
  suffix = "+",
  displayValue = "",
  duration = 2000,
}: {
  to: number;
  suffix?: string;
  displayValue?: string; 
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); 
  const count = useCounter(to, duration, isInView);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-white">
      {displayValue || count}{suffix}
     
    </span>
  );
}

export default function Main() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      
      <div className="mb-10">
        <Image
          src="/images/logo.png"
          alt="Logo Church+"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      
      <h1 className="text-center text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mb-20 text-white font-instrument">
        Connecter les églises. <br />
        Rassembler les communautés. <br />
        Faire grandir la foi.
      </h1>

      
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center text-center divide-y-0 md:divide-x divide-gray-800 border-gray-800">
       
        <div className="flex-1 py-10 px-6">
          <Counter to={40} suffix="millions+" />
          <p className="text-gray-400 mt-3">Nombre d&apos;églises dans le monde.</p>
        </div>

        
        <div className="flex-1 py-10 px-6">
          <Counter to={70} suffix="k+" />
          <p className="text-gray-400 mt-3">
            Chaque jour plus de 70 000 personnes deviennent chrétiennes dans le monde.
          </p>
        </div>

        
        <div className="flex-1 py-10 px-6">
          <Counter to={190} suffix="+" />
          <p className="text-gray-400 mt-3">
            Plus de 190 pays touchés par l&apos;Évangile.
          </p>
        </div>
      </div>
    </main>
  );
}
