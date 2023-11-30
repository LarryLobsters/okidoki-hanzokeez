/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  jswSingleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: true,
  trailingComma: 'none'
}

export default config
