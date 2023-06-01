import { type NextPage } from 'next'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  const { locale, asPath } = useRouter()

  return (
    <>
      <div className="mt-20 h-[2000px] dark:text-red-200">
        {locale === 'zh' ? '你好' : 'Hello'}
      </div>
    </>
  )
}

export default Home
