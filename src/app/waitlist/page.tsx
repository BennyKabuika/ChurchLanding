"use client";
import { useState, useRef, useEffect } from "react";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { colors } from "../color";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

// Compteur 1er octobre 2025
function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const target = new Date("2025-10-01T00:00:00Z").getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-3xl font-mono mt-8">
      <div>
        <span>{String(timeLeft.days).padStart(2, "0")}</span>
        <span className="text-xs block text-gray-400">jours</span>
      </div>
      <span>:</span>
      <div>
        <span>{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-xs block text-gray-400">heures</span>
      </div>
      <span>:</span>
      <div>
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-xs block text-gray-400">min</span>
      </div>
      <span>:</span>
      <div>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span className="text-xs block text-gray-400">sec</span>
      </div>
    </div>
  );
}

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const eglise = formData.get("eglise");
    const email = formData.get("email");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ eglise, email }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError("Erreur lors de l'envoi. Réessayez.");
      }
    } catch {
      setError("Erreur lors de l'envoi. Réessayez.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-24 px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 mt-20 font-instrument">
          Soyez les premiers à utiliser Church+ avant son lancement.
        </h1>
        <p className="text-gray-400 text-center mb-8 max-w-xl">
          <span className="block font-bold text-lg text-gray-200 mb-2">DISPONIBLE BIENTOT !</span>
          Inscrivez-vous pour recevoir un accès à la version bêta en avant-première !
        </p>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="pb-20  pt-20 flex flex-col gap-6 shadow-lg"
        >
          <div>
            <label htmlFor="eglise" className="block text-sm font-semibold mb-2">
              Eglise
            </label>
            <input
              type="text"
              id="eglise"
              name="eglise"
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:border-white"
              placeholder="Nom de votre église"
              style={{background : colors.Primary3}}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:border-white"
              placeholder="Votre email"
              style={{background : colors.Primary3}}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-lg px-6 py-2 mt-2 hover:bg-gray-200 transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
          {sent && <p className="text-green-400 text-center mt-2">Merci, votre inscription a bien été envoyée !</p>}
          {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        </form>
        
        <Countdown />
      </section>
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Rejoignez le mouvement&nbsp;!<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Church+ en action
              </span>
            </h1>
          </>
        }
      >
        <video
          src={`/videos/churchvideo.mp4`}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          autoPlay
          loop
          muted
          
        />
      </ContainerScroll>
    </div>
      <FAQ />
      <Footer />
    </>
  );
}
