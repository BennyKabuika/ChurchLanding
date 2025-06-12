import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
   metadataBase: new URL("https://www.churchplus.app/"),
    title: "Church+ | L'application pour les églises",
    description:
    "Church+ aide chaque église à accompagner ses membres pour que l’Évangile devienne une réalité vivante dans leur quotidien.",
    generator: "Next.js",
    applicationName: "Church+",
    keywords: [
        "église",
        "application église",
        "application mobile église",
        "application chrétienne",
        "communauté chrétienne",
        "gestion église",
        "application pour paroisse",
        "application pour pasteur",
        "application pour membres d'église",
        "événement église",
        "communication église",
        "application bible",
        "prière en ligne",
        "groupe de prière",
        "évangélisation digitale",
        "application chrétienne francophone",
        "application pour communauté religieuse",
        "application pour groupe chrétien",
        "application pour ministère",
        "application pour jeunes chrétiens",
        "application pour louange",
        "application pour don église",
        "application pour bénévoles église",
        "application pour gestion membres",
        "application pour planning église",
        "application pour annonces église",
        "application pour newsletter église",
        "application pour événements chrétiens",
        "application pour enseignement biblique",
        "application pour discipleship",
        "application pour église connectée"
    ],
    openGraph: {
        title: "Church+ - L'application pour les églises",
        description:
      "Church+ aide chaque église à accompagner ses membres pour que l’Évangile devienne une réalité vivante dans leur quotidien.",
        url: "https://www.churchplus.app/",
        siteName: "www.churchplus.app",
        images: [
            {
                url: "./public/logo.png",
                width: 1200,
                height: 630,
                alt: "Church+ - L'application pour les églises",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Church+ - L'application pour les églises",
        description:
      "Church+ aide chaque église à accompagner ses membres pour que l’Évangile devienne une réalité vivante dans leur quotidien.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Religion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
