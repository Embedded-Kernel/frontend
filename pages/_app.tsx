import "tailwindcss/tailwind.css";
import '../public/app.css'
import type { AppProps } from "next/app";
import { ContextProvider } from "../components/state-management/ContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
  )
}

export default MyApp;
