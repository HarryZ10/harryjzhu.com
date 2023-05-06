import Theme from "../styles/theme";
import Head from "next/head";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Hello, I'm Harry!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Harry Zhu is a full-stack web developer based in Oakland, CA seeking to build community and cultivate leaders through software."
        />
        <meta itemprop="image" content="images/cover.jpg" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harryjzhu.com/" />
        <meta property="og:title" content="Harry Zhu | Portfolio" />
        <meta
          property="og:description"
          content="Harry Zhu is a full-stack web developer based in Oakland, CA."
        />
        <meta property="og:image" content="images/cover.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harryjzhu.com/" />
        <meta property="twitter:title" content="Harry Zhu | Portfolio" />
        <meta
          property="twitter:description"
          content="Harry Zhu is a full-stack web developer based in Oakland, CA."
        />
        <meta property="twitter:image" content="images/cover.jpg" />
      </Head>

      <Theme>
        <Component id="app" {...pageProps} />
      </Theme>
    </>
  );
}
