import type { Metadata } from "next";
import "./globals.css";
import {
  Poiret_One,
  Roboto,
  Nunito,
  Teko,
  Oxygen,
  Yeseva_One,
  Zeyada,
} from "next/font/google";
import { MyProvider } from "@/components/contextProvider";
import Particles from "@/components/ui/particles";

const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret-one",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const teko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-teko",
});

const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-oxygen",
});

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva-one",
});

const zeyada = Zeyada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zeyada",
});

export const metadata: Metadata = {
  title: "Sop Manuel",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poiretOne.variable} ${roboto.variable} ${nunito.variable} ${teko.variable} ${oxygen.variable} ${yesevaOne.variable} ${zeyada.variable} bg-gradient-to-br from-black from-10% via-[#101010] via-50% to-black to-100% font-sans`}
      >
        <MyProvider>
          <Particles
            quantity={200}
            className="fixed right-0 left-0 top-0 bottom-0"
          />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
