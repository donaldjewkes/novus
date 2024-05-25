import type { Metadata } from "next";
import { Cormorant_Garamond , IBM_Plex_Mono} from "next/font/google";
import "./globals.css";

const gara = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-gara',
});
const ibm = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ibm',
});

export const metadata: Metadata = {
  title: "Novus",
  description: "Community for the ambitious.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gara.className} ${ibm.variable}`}>{children}</body>
    </html>
  );
}
