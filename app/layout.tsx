import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // The new metadataBase property sets the root URL for your site
  metadataBase: new URL("https://getkoneqt.com"),
  title: "Koneqt Automation | Automatisez vos Propositions Commerciales",
  description:
    "Gagnez des heures et des clients. Koneqt automatise la création de vos devis et propositions commerciales en 60 secondes.",
  openGraph: {
    title: "Koneqt Automation | Gagnez plus de clients.",
    description: "Transformez vos propositions en un processus de 60 secondes.",
    url: "https://getkoneqt.com",
    siteName: "Koneqt Automation",
    // Make sure to add a professional image here for social sharing
    images: [
      {
        url: "/koneqt-social-card.png", // We will need to create this image and put it in the /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koneqt Automation | Gagnez plus de clients.",
    description: "Transformez vos propositions en un processus de 60 secondes.",
     images: ["/koneqt-social-card.png"], // Same image as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}