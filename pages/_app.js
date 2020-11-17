import '../styles/globals.css';
import Head from 'next/head';
import NavBar from '../components/NavBar/';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="app-container">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;