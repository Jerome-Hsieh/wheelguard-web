import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#313131",
        yellow: "#fdd201",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      backgroundImage: {
        pageBG: "url('/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
