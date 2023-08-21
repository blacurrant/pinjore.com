import '@/styles/globals.css'
import Navbar from './Navbar'
import Script from 'next/script'
import { StyledEngineProvider } from '@mui/material'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <StyledEngineProvider injectFirst>
         <Component {...pageProps} />
      </StyledEngineProvider>
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </>
         )

}
