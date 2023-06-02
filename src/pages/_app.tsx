import '~/styles/globals.css'
import '~/styles/szgotop.css'

import { type AppType } from 'next/app'
import { api } from '~/utils/api'
import { ThemeProvider } from 'next-themes'
import Layout from '~/components/Layout'

import 'iconify-icon'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
