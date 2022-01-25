
import Layout from "../components/layout"
import { Globalstyle } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globalstyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
