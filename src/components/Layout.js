import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, title='', description=''}) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout