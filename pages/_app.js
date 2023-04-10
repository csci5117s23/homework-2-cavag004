import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import "../styles/global.css"
import "bulma/css/bulma.css"

export default function App({ Component, pageProps }) {
  return (
    <div class="has-background-light" style={{height: "100vh"}}>
      <Navbar/>
      <Tabs/>
      <Component {...pageProps} />
    </div>
  )
}
