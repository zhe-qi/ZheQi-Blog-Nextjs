import Header from './The/Header'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>ZheQi Blog</title>
        <meta name="description" content="ZheQi Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
