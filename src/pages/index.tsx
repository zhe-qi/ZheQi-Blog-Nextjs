import { type NextPage } from 'next'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { locale } = useRouter()

  const hello = api.example.hello.useQuery({ locale: locale! })

  const text = hello.data?.greeting

  return (
    <>
      <div className="mt-20 flex h-[2000px] flex-col dark:text-red-200">
        <div className="mt-20 text-center text-2xl">
          {locale === 'zh' ? '你好' : 'Hello'}
        </div>
        <div className="mt-2 text-center">服务端数据：{text}</div>
      </div>
    </>
  )
}

export default Home
