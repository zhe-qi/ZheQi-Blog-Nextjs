import Header from './The/Header'
import Head from 'next/head'
import { useEffect } from 'react'
import GoTop from '~/components/GoTop/GoTop'
import party from 'party-js'

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

  useEffect(() => {
    // 如果是移动端，就不要执行下面的代码了
    if (typeof window !== 'undefined' && window.innerWidth < 768) return
    const handleClick = (e: MouseEvent) => {
      party.sparkles(e, {
        count: party.variation.range(10, 30),
        speed: party.variation.range(50, 150)
      })
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadL2d()
    }
  }, [])

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
