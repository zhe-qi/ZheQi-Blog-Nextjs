import Switch from '~/components/Switch/Switch'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const { locale, asPath } = useRouter()

  return (
    <div className="navbar fixed top-0 z-50 border-b border-zinc-100 backdrop-blur dark:text-zinc-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-sm mt-3 w-52 border border-[#cccccc33] bg-[#ffffff99] p-2 shadow backdrop-blur backdrop-filter dark:bg-[#000000ee]"
            >
              {new Array(7).fill(0).map((_, index) => {
                return (
                  <li className="rounded py-2 hover:bg-[#cccccc22]" key={index}>
                    <Link href="/">Item {index}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          locale={locale}
          className="btn-ghost btn text-xl normal-case"
        >
          ZheQi-Blog
        </Link>
      </div>
      <div className="navbar-end">
        <div className="relative h-20 w-32">
          <div className="absolute left-[-480px] top-[-47px] ml-96 h-32 w-44">
            <Switch />
          </div>
        </div>
        <button className="btn-ghost btn hidden md:block">
          <div className="indicator">
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
        </button>
      </div>
    </div>
  )
}

export default Header
