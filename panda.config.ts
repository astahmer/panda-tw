import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",

  // you can optionally prefix your panda className
  // prefix: "p",

  // you can rename layers if needed
  // layers: {
  //   base: "panda_base",
  //   recipes: "panda_recipes",
  //   reset: "panda_reset",
  //   tokens: "panda_tokens",
  //   utilities: "panda_utilities",
  // },
});
