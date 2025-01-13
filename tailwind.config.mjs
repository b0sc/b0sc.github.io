/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "325px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#0D0C22",
      stone: "#231F20",
      lime: "#B9FF66",
      green: "#4CAF50",
      blue: {
        100: "#E6F0FF",
        200: "#C0D8FF",
        300: "#99C1FF",
        400: "#4D95FF",
        500: "#0069FF",
        600: "#005FE6",
        700: "#004199",
        800: "#003173",
        900: "#00224D",
      },
      zinc: {
        100: "#F3F3F3",
        200: "#F0F0F0",
        300: "#D9D9D9",
        400: "#D8D8D8",
        500: "#898989",
        600: "#B0B0B0",
        700: "#787878",
        800: "#292A32",
        900: "#191A23",
      },
    },
    boxShadow: {
      card: "0px 5px 0px 0px #191A23",
    },
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
}
