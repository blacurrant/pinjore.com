import '@/styles/globals.css'
import Navbar from './Navbar'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Script src="../path/to/flowbite/dist/flowbite.bundle.js"></Script>
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </>
         )

}
