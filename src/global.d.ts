declare namespace JSX {
  interface IntrinsicElements {
    'iconify-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        icon: string
        width?: string
        height?: string
        rotate?: string
        flip?: string
      },
      HTMLElement
    >
  }
}

interface PaulPioOptions {
  mode: string
  hidden: boolean
  content: {
    welcome: string[]
    custom: {
      selector: string
      text: string
      type?: string
    }[]
  }
  model: string[]
}

// 声明构造函数 Paul_Pio
declare class Paul_Pio {
  constructor(options: PaulPioOptions)
}
