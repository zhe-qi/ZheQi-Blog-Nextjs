import Header from './The/Header'
import Head from 'next/head'
import GoTop from '~/components/GoTop/GoTop'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const loadL2d = async () => {
    const l2d = await import('oh-my-live2d')
    const oml = l2d.loadOhMyLive2D({
      sayHello: false,
      transitionTime: 2000,
      models: {
        scale: 1
      }
    })
  }

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadL2d()
  }

  return (
    <>
      <Head>
        <title>ZheQi Blog</title>
        <meta name="description" content="ZheQi Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GoTop />
      <main>{children}</main>
    </>
  )
}

export default Layout
