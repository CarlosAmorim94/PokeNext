
import Layout from "../components/layout"
import { Globalstyle } from "../styles/global"

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
