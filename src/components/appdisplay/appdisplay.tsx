"use client";

import Image from "next/image";
import { AppData } from "@/app/functions";
import {
  MessageCircle,
  Handshake,
  PhoneCall,
  Calendar,
  Users,
  FileText,
  User,
  List,
  Share2,
  LayoutList,
  Hand,
  BookOpen,
  Quote,
  Image as ImageIcon,
  Edit,
  Fingerprint,
  Network,
} from "lucide-react";
import { JSX } from "react";


const iconsMap: { [key: string]: JSX.Element } = {
  "discuss-alt": <MessageCircle className="w-6 h-6 text-white" />,
  "handshake-alt": <Handshake className="w-6 h-6 text-white" />,
  "phone-alt": <PhoneCall className="w-6 h-6 text-white" />,
  "calendar-alt": <Calendar className="w-6 h-6 text-white" />,
  "community-alt": <Users className="w-6 h-6 text-white" />,
  "articles-alt": <FileText className="w-6 h-6 text-white" />,
  "group-alt": <User className="w-6 h-6 text-white" />,
  "photo-alt": <ImageIcon className="w-6 h-6 text-white" />,
  "pencil-alt": <Edit className="w-6 h-6 text-white" />,
  "list-alt": <List className="w-6 h-6 text-white" />,
  "share-alt": <Share2 className="w-6 h-6 text-white" />,
  "plan-alt": <LayoutList className="w-6 h-6 text-white" />,
  "agenda-alt": <BookOpen className="w-6 h-6 text-white" />,
  "walk-alt": <Hand className="w-6 h-6 text-white" />,
  "finger-alt": <Fingerprint className="w-6 h-6 text-white" />,
  "organigram-alt": <Network className="w-6 h-6 text-white" />,
  "talk-alt": <Quote className="w-6 h-6 text-white" />,
};

export default function AppDisplay() {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8">
      {AppData.map((app, idx) => {
        
        const isImageRight = idx % 2 === 0;
        return (
          <div
            key={app.id}
            className="max-w-7xl mx-auto mb-24"
          >
            
            <div
              className={`flex flex-col ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              
              <div
                className="relative rounded-4xl overflow-hidden w-full md:w-[496px] h-[650px] flex items-center justify-center ml-auto mr-auto"
                style={{
                  background: `linear-gradient(360deg, ${app.background[0]} 0%, ${app.background[1]} 100%)`,
                }}
              >
                <Image
                  src={`/${app.image}`}
                  alt={app.title}
                  width={250}
                  height={350}
                  className="object-contain z-10 translate-y-20"
                />
                
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div
                    className="absolute inset-x-0 top-0 h-26"
                    style={{
                      background: `linear-gradient(to bottom, ${app.background[1]} 0%, transparent 5%)`,
                    }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background: `linear-gradient(to top, ${app.background[1]} 0%, transparent 100%)`,
                    }}
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-instrument">
                  {app.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {app.category.map((cat) => (
                    <div
                      key={cat.id}
                      className="flex gap-4 items-start bg-black rounded-xl p-2 border border-gray-900 text-left max-w-xs w-full mx-auto"
                    >
                      <div className="p-2 flex items-center justify-center">
                        {iconsMap[cat.icon] || (
                          <span className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-10">{cat.name}</h3>
                        <p className="text-gray-400 text-md">{cat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}