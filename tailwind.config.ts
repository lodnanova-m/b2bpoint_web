import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lila: "#A84491",
      yellow: "#EBE466",
      blue: "#94C9E1",
      purple: "#463863",
      white: "#FFFFFF",
      green: "#C8DEA3"
    },
    extend: {
      fontFamily: {
        'avenir': ['Avenir Next Cyr', 'sans-serif'],
      },
      fontWeight: {
        'ultralight-italic': "200",
        'regular': "400",
        'medium': "500",
        'bold': "700",
        'bold-italic': "700",
        'medium-italic': "500",
      },
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }
  },
  plugins: [require('tailwindcss-animated')
  ],
};
export default config;
