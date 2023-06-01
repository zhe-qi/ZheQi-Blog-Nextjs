import { type NextPage } from 'next'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import Image from 'next/image'

const Home: NextPage = () => {
  const { locale } = useRouter()

  const hello = api.example.hello.useQuery({ locale: locale! })

  const getAll = api.example.getAll.useQuery()

  const text = hello.data?.greeting
  const data = getAll.data

  return (
    <>
      <div className="mx-auto mt-20 flex h-[2000px] max-w-4xl flex-col border-x dark:text-red-200">
        <div className="mt-20 text-center text-2xl">
          {locale === 'zh' ? '你好' : 'Hello'}
        </div>
        <p className="mt-10 text-center">
          {locale === 'zh' ? `服务端数据：${text!}` : `server data: ${text!}`}
        </p>

        <div className="mx-auto mt-10 text-center">
          <p className="mb-2">
            {locale === 'zh' ? `数据库数据：` : `sql data: `}
          </p>
          {data?.map((item) => {
            return (
              <section className="prose" key={item.id}>
                <p>id：{item.id}</p>
                <p>
                  {locale === 'zh' ? `创建时间：` : `createdAt: `}
                  {dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                </p>
                <p>
                  {locale === 'zh' ? `更新时间：` : `updatedAt: `}
                  {dayjs(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
                </p>
              </section>
            )
          })}
        </div>
        <div className="mx-auto mt-10">
          <Image
            src="https://i.postimg.cc/vHyK48wV/nahida.jpg"
            alt={'我的图片被你吃了吗'}
            width={150}
            height={150}
          />
        </div>
        <p className="mt-10 text-center">
          {' '}
          {locale === 'zh'
            ? `有时候可能会有水合错误，他*的`
            : `have time have water * error, f**k he`}
        </p>
      </div>
    </>
  )
}

export default Home
