"use client";

import Image from "next/image";
import { ChurchData } from "@/app/functions";
import { MessageCircle, HeartHandshake, PhoneCall, Calendar, Users } from "lucide-react";
import { JSX } from "react";

const iconsMap: { [key: string]: JSX.Element } = {
  "discuss-alt": <MessageCircle className="w-6 h-6 text-white" />,
  "handshake-alt": <HeartHandshake className="w-6 h-6 text-white" />,
  "phone-alt": <PhoneCall className="w-6 h-6 text-white" />,
  "calendar-alt": <Calendar className="w-6 h-6 text-white" />,
  "community-alt": <Users className="w-6 h-6 text-white" />,
};

export default function ChurchSection() {
  const church = ChurchData[0];

  return (
    <section className="bg-black text-white py-24 px-4 md:px-8">
     
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-instrument">
        Church+ rassemble plusieurs applications puissantes
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        
        <div
          className="relative rounded-4xl overflow-hidden w-full md:w-[496px] h-[650px] flex items-center justify-center ml-auto mr-auto"
          style={{
            background: `linear-gradient(360deg, ${church.background[0]} 0%, ${church.background[1]} 100%)`,
          }}
        >
          <Image
            src={church.logoChurch}
            alt="Church+ App Logo"
            width={250}
            height={350}
            className="object-contain z-10 translate-y-20" 
          />
          
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div
              className="absolute inset-x-0 top-0 h-26"
              style={{ background: `linear-gradient(to bottom, ${church.background[1]} 0%, transparent 5%)` }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{ background: `linear-gradient(to top, ${church.background[1]} 0%, transparent 100%)` }}
            />
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mr-auto ml-auto">
          {church.app.map((app) => (
            <div
              key={app.id}
              className="flex gap-4 items-start bg-black rounded-xl p-2 border border-gray-900 text-left"
            >
              <div className="p-2 flex items-center justify-center">
                {iconsMap[app.icon]}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-10">{app.name}</h3>
                <p className="text-gray-400 text-md">{app.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
