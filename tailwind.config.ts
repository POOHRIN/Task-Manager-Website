import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts,tsx,js}"]
  theme: { extend: {} },
  plugins: [],
};

export default config;
