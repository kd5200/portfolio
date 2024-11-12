import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Initializing GTM */}
      <GoogleTagManager gtmId="GTM-KMJS572M" />

      {/* Rendering the page component after */}
      <Component {...pageProps} />
    </>
  );
}
