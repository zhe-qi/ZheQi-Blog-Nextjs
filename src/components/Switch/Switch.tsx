import styles from './Switch.module.css'
import { useRef, type MouseEvent } from 'react'
import { useTheme } from 'next-themes'

const Switch = () => {
  const { setTheme, theme } = useTheme()

  const inputRef = useRef<HTMLInputElement>(null)

  const changeTheme = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation()
    if (inputRef.current?.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className="h-44 w-80 scale-[0.35]">
      <input
        type="checkbox"
        ref={inputRef}
        onClick={changeTheme}
        id={styles.sun_switch}
        defaultChecked={theme === 'dark'}
      />
      <label className="shadow-inner" htmlFor={styles.sun_switch}>
        <div
          className={`${styles.switch!} cursor-pointer  shadow-inner dark:bg-black`}
        >
          <div
            className={`${styles.light3!} dark:translate-x-[30px] dark:bg-[#222]`}
          />
          <div
            className={`${styles.light2!} dark:translate-x-[115px] dark:bg-[#333]`}
          />
          <div
            className={`${styles.light1!} dark:translate-x-[195px]  dark:bg-[#555]`}
          />
          <div className={styles.clouds_back}>
            <div className={styles.cloud7} />
            <div className={styles.cloud6} />
            <div className={styles.cloud5} />
            <div className={styles.cloud4} />
            <div className={styles.cloud3} />
            <div className={styles.cloud2} />
            <div className={styles.cloud1} />
          </div>
          <div className={styles.clouds_front}>
            <div className={styles.cloud7} />
            <div className={styles.cloud6} />
            <div className={styles.cloud5} />
            <div className={styles.cloud4} />
            <div className={styles.cloud3} />
            <div className={styles.cloud2} />
            <div className={styles.cloud1} />
          </div>
          <div className={styles.stars}>
            <div
              className={`${styles.star1!} hidden dark:block ${styles.star!}`}
            />
            <div
              className={`${styles.star2!} hidden dark:block ${styles.star!}`}
            />
            <div
              className={`${styles.star3!} hidden dark:block ${styles.star!}`}
            />
            <div
              className={`${styles.star4!} hidden dark:block ${styles.star!}`}
            />
            <div
              className={`${styles.star5!} hidden dark:block ${styles.star!}`}
            />
          </div>
          <div
            className={`${styles.circle!} dark:translate-x-[195px] dark:bg-[#ccc]`}
          >
            <div className={styles.moon_circle1} />
            <div className={styles.moon_circle2} />
            <div className={styles.moon_circle3} />
          </div>
        </div>
      </label>
    </div>
  )
}

export default Switch
