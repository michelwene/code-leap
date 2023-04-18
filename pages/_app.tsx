import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { Loader } from "@/components/Loader";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    });
  }, [Router]);

  return (
    <>
      {isLoading && <Loader />}
      <Provider store={store}>
        <main className={`${roboto.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
        <ToastContainer theme="light" />
      </Provider>
    </>
  );
}
