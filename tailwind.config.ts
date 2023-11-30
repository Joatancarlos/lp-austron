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
        'womanImg': '-230px',
      },
      backgroundImage: {
        'blob1': "url(/images/blob2.svg)",
      },
      backgroundSize: {
        '55rem': '55rem',
      },
      backgroundPosition: {
        'right-top': '-155px -10%',
      },
      animation: {
        'rocket': 'rocket 1s ease-in-out infinite alternate',
      },
      keyframes: {
        rocket: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        }
      },
      spacing: {
        'rightRocket': '-90px',
        'topRocket': '-20px',
      }
    },
  },
  plugins: [],
}
export default config
