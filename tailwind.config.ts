import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("../public/lendingImages/project-4-min.jpg")',
      },
      colors: {
        dark: '#1b1b1b',
        light: '#fff',
        catchitBlue: '#64C9C7',
        catchitYellow: '#F9DA4A',
        accent: '#7B00D3',
        accentDark: '#ffdb4d',
        gray: '#747474',
      },

      fontFamily: {
        mr: ['var(--font-mr)'],
        in: ['var(--font-in)'],
      },
      screens: {
        sxl: '1180px',
        // @media (min-width: 1180px) {...}
        xs: '480px',
        // @media (min-width: 480px) {...}
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('@tailwindcss/typography')],
};
export default config;
