import Theme from "../styles/theme";
import Head from "next/head";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Harry Zhu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon" href="favicon.png" />

        <meta
          name="description"
          content="A Bay Area Software Developer's Portfolio of Works and Projects (Harry Zhu / Oakland, CA)"
        />
        <meta itemprop="image" content="images/cover.jpg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harryzhu.com/" />
        <meta property="og:title" content="Harry Zhu" />
        <meta
          property="og:description"
          content="A Bay Area Software Developer's Works and Projects (Harry Zhu / Oakland, CA)"
        />
        <meta property="og:image" content="images/cover.jpg" />
      </Head>

      <Theme>
        <Component id="app" {...pageProps} />
      </Theme>
    </>
  );
}
