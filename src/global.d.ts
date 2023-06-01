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
