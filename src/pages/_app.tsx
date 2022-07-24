import 'commons/styles/reset.css';
import 'commons/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import initMockAPI from 'mocks';

function MyApp({Component, pageProps}: AppProps) {
  // msw
  if (process.env.NODE_ENV === 'development') {
    initMockAPI();
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
