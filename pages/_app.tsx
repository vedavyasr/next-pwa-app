import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import { useEffect } from 'react';

function MyApp({ Component, pageProps }:AppProps) {
  useEffect(() => {
    console.log('yeyyy')
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

