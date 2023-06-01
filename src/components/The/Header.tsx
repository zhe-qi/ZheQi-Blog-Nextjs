import Switch from '~/components/Switch/Switch'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const { locale, asPath } = useRouter()

  return (
    <div className="fixed left-0 top-0 flex h-20 w-screen border-b-[1px] backdrop-blur backdrop-filter">
      <div className="relative ml-20 h-20 w-32 cursor-pointer">
        <div className="absolute left-[-480px] top-[-47px] ml-96 h-32 w-44">
          <Switch />
        </div>
      </div>
      <div className="h-18 flex w-20 items-center justify-center text-zinc-900 dark:text-zinc-50">
        {locale === 'zh' ? (
          <Link href={asPath} locale="en">
            <iconify-icon
              icon="ri:english-input"
              style={{
                fontSize: '40px'
              }}
            ></iconify-icon>
          </Link>
        ) : (
          <Link href={asPath} locale="zh">
            <iconify-icon
              icon="uil:letter-chinese-a"
              style={{
                fontSize: '40px'
              }}
            ></iconify-icon>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
