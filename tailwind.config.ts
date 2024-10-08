import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flip:'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes:{
        flip: {
          'from': { transform:  'rotateX(0deg)', transformOrigin: '50% bottom ', },
          'to':{transform:  'rotateX(180deg)', transformOrigin: '50% bottom ',}
        }
      },
      colors: {
        primary: '#004aad',
        secondary: '#0cc0df',
        tertiary: '#5271ff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Montserrat', 'Georgia'],
        'serif': ['Merriweather', 'Georgia'],
      }
    },
  },
  plugins: [],
};
export default config;
