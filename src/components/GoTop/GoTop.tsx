import { useEffect, useState } from 'react'

const GoTop = () => {
  const [top, setTop] = useState(-500)

  const changeTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 监听滚动条
      window.addEventListener('scroll', () => {
        const height =
          document.documentElement.clientHeight < 625
            ? -Math.round(document.documentElement.clientHeight / 10)
            : -Math.round(document.documentElement.clientHeight / 40)

        if (document.documentElement.scrollTop > 100 && top !== height) {
          setTop(height)
        } else if (document.documentElement.scrollTop <= 100 && top !== -500) {
          setTop(-500)
        }
      })
    }
  })

  return (
    <div
      className="back-to-top cd-top faa-float animated cd-is-visible ml-5 hidden transition-all md:block"
      onClick={changeTop}
      style={{
        top: `${top}vh`
      }}
    />
  )
}

export default GoTop
