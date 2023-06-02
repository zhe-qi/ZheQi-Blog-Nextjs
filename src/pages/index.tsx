import { type NextPage } from 'next'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import party from 'party-js'

const Home: NextPage = () => {
  const { locale } = useRouter()

  const hello = api.example.hello.useQuery({ locale: locale! })

  const getAll = api.example.getAll.useQuery()

  const text = hello.data?.greeting
  const data = getAll.data

  const [isWebgpu, setIsWebgpu] = useState(true)

  useEffect(() => {
    !isWebgpu && setIsWebgpu(navigator.gpu !== undefined)
  }, [isWebgpu])

  useEffect(() => {
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

  return (
    <>
      <div className="mx-auto mt-24 flex h-[1500px] max-w-screen-xl flex-col border-x font-sans dark:text-zinc-50">
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
            priority
            src="https://i.postimg.cc/vHyK48wV/nahida.jpg"
            alt="我的图片被你吃了吗"
            width={150}
            height={150}
          />
        </div>
        <p className="mt-10 text-center">
          {locale === 'zh'
            ? `有时候可能会有水合错误，他*的`
            : `have time have water * error, f**k he`}
        </p>
        <div className="mt-10 text-center">
          {locale === 'zh' ? (
            <div>
              项目git地址：
              <Link
                href="https://github.com/zhe-qi/ZheQi-Blog-Nextjs"
                target="_blank"
              >
                https://github.com/zhe-qi/ZheQi-Blog-Nextjs
              </Link>
            </div>
          ) : (
            <div>
              GitHub:
              <Link
                href="https://github.com/zhe-qi/ZheQi-Blog-Nextjs"
                target="_blank"
              >
                https://github.com/zhe-qi/ZheQi-Blog-Nextjs
              </Link>
            </div>
          )}
        </div>
        <div className="mt-10 py-10 text-center">
          <Link className="text-2xl hover:underline" href="/blog">
            跳转博客页 <iconify-icon icon="material-symbols:arrow-right-alt" />
          </Link>
        </div>
      </div>
      {isWebgpu ? (
        <div></div>
      ) : (
        <div className="card glass fixed bottom-[1vh] left-[3px] w-96 dark:text-zinc-50 md:bottom-[3vh] md:left-[2vw]">
          <div className="card-body">
            <h2 className="card-title">能不能升级下浏览器？</h2>
            <p>连webgpu都不支持</p>
            <div className="card-actions justify-end">
              <button className="btn">Chrome 113+</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
