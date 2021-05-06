import Head from "next/head";
import { Footer } from ".";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" lang="en" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <header></header>
      {children}
      <Footer/>
    </>
  );
}
