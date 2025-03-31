import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Include the weights you need
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <Component {...pageProps} />
    </div>
  );
}
