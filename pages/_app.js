import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar/";
import Footer from "../components/Footer/";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Noto+Serif+JP:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
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
