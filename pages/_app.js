import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import "../styles/global.css"
import "bulma/css/bulma.css"

export default function App({ Component, pageProps }) {
  return (
    // <ClerkProvider {...pageProps} >
      <div class="has-background-light" style={{height: "100vh"}}>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    // </ClerkProvider>
  )
}
