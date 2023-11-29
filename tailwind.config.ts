import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '128': '30rem',
      },
      lineHeight: {
        'extra-loose': '4.5rem',
      },
      margin: {
        'negative': '-60px',
        '-2': '-2px',
        'top-negative': '-60px',
        'bottom-negative': '-40px',
      },
      backgroundImage: {
        'blob1': "url(/images/blob1.svg)",
      },
      backgroundSize: {
        '80%': '80%',
      },
    },
  },
  plugins: [],
}
export default config
