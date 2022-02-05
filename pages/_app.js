import Navbar from '../comps/navbar'
import Footer from '../comps/footer'

import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </AuthContextProvider>
  
  )
}

export default MyApp
