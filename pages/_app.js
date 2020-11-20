import '../styles/globals.css';
import Head from 'next/head';
import NavBar from '../components/shared/NavBar/';
import Footer from '../components/shared/Footer/';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Noto+Serif+JP:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <div className='app-container'>
        <NavBar />
        <div className='content-area'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
