import 'commons/styles/reset.css';
import 'commons/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
  // msw
  if (process.env.NODE_ENV === 'development') {
    const {worker} = require('./mocks/browser');
    worker.start();
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
