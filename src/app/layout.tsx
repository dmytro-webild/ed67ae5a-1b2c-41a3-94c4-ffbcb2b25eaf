import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisan AI - Your Field's Most Trusted Agricultural Partner",
  description: "Real-time AI-powered farming solutions in Hindi & regional languages. Get crop advice, market prices, weather alerts, government schemes & livestock care from ICAR & NABARD data. Download now.",
  keywords: "Kisan AI, agriculture advisory, farming solutions, crop advice, market prices, government schemes, weather alerts, livestock care, Indian farmers, agricultural app, Hindi farming",
  metadataBase: new URL("https://kisanai.com"),
  alternates: {
    canonical: "https://kisanai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kisan AI - Your Field's Most Trusted Agricultural Partner",
    description: "Join 150K+ Indian farmers using Kisan AI for real-time crop guidance, market intelligence, and government scheme support. Increase yield by 25-40%.",
    type: "website",
    siteName: "Kisan AI",
    url: "https://kisanai.com",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/woman-harvesting-vegetables_23-2148568617.jpg",
        alt: "Kisan AI - Agricultural advisory platform for Indian farmers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisan AI - Agricultural Advisory Platform",
    description: "Real-time farming solutions in your language. Crop advice, market prices, weather, schemes & livestock care.",
    images: ["http://img.b2bpic.net/free-photo/woman-harvesting-vegetables_23-2148568617.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${sourceSans3.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}