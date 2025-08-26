import type { Plugin } from "postcss";

const tailwind: Plugin = require("@tailwindcss/postcss");
const autoprefixer: Plugin = require("autoprefixer");

export default {
  plugins: [tailwind, autoprefixer],
};
