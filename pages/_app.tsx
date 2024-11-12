import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const GA_ID = "G-G6X551NPGG";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* GA4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {page_path: window.location.pathname,});`,
        }}
      />

      {/* Initializing GTM */}
      <GoogleTagManager gtmId="GTM-KMJS572M" />

      {/* Rendering the page component after */}
      <Component {...pageProps} />
    </>
  );
}
