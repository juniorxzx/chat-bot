import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_default: "#0B141A",
        header_dark: "#202c33",
        header_light: "#47ad9b",
        header_op_06: "rgba(0,0,0,0.6)",
        white_strong: "#e9edef",
        white_weak: "#818786",

        input_dark: "#2a3942",
      },
      boxShadow: {
        header: "0 1px 3px rgba(10,20,26, .4);",
        input: "0 -1px 3px rgba(10,20,26, .4);",
      },
    },
    backgroundImage: {
      chat: "url('/planodefundo.jpeg)",
    },
  },
  plugins: [],
};
export default config;
