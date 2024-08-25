import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // these are breakpoint import from mantine ui
      screens: {
        xm: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1400px',
        '2xl': '1536px',
      },
      colors: {},
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
        screens: {
          sm: '100%',
          md: '1200px',
          lg: '1340px',
          '2xl': '1400px',
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
