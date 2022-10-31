import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>TodoApp</title>
        <meta name="description" content="todo app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
