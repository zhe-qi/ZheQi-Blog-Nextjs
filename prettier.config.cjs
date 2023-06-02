/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  // 去掉分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象结尾不添加逗号
  trailingComma: 'none',
  // 补全className的时候用双引号
  jsxSingleQuote: false
}

module.exports = config
