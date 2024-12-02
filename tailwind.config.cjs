const theme = require("./src/config/theme.json");

const fontFamily = theme.fonts.fontFamily
  .replace(/\+/g, " ")
  .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;.]+/gi, "");

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",  // or "media" if you are using media query based dark mode
  theme: {
    extend: {
      colors: {
        accent: `var(--color-accent)`,
        gray: colors.neutral,
        categoryLabel: {
          light: theme.colours.categoryLabel.light,
          dark: theme.colours.categoryLabel.dark,
        },
        postUnderline: {
          lightFrom: theme.colours.postUnderline.light.from,
          lightTo: theme.colours.postUnderline.light.to,
          darkFrom: theme.colours.postUnderline.dark.from,
          darkTo: theme.colours.postUnderline.dark.to,
        },
      },
      fontFamily: {
        sans: [fontFamily, ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: theme.fonts.fontSizes.xs,
        sm: theme.fonts.fontSizes.sm,
        base: theme.fonts.fontSizes.base,
        lg: theme.fonts.fontSizes.lg,
        xl: theme.fonts.fontSizes.xl,
        "2xl": theme.fonts.fontSizes["2xl"],
        "3xl": theme.fonts.fontSizes["3xl"],
        "4xl": theme.fonts.fontSizes["4xl"],
        "5xl": theme.fonts.fontSizes["5xl"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: theme("fontSize.base")[0],
            lineHeight: theme("fontSize.base")[1],
            h1: {
              fontSize: theme("fontSize.5xl")[0],
              lineHeight: theme("fontSize.5xl")[1],
            },
            h2: {
              fontSize: theme("fontSize.4xl")[0],
              lineHeight: theme("fontSize.4xl")[1],
            },
            h3: {
              fontSize: theme("fontSize.3xl")[0],
              lineHeight: theme("fontSize.3xl")[1],
            },
            h4: {
              fontSize: theme("fontSize.2xl")[0],
              lineHeight: theme("fontSize.2xl")[1],
            },
            h5: {
              fontSize: theme("fontSize.xl")[0],
              lineHeight: theme("fontSize.xl")[1],
            },
            h6: {
              fontSize: theme("fontSize.lg")[0],
              lineHeight: theme("fontSize.lg")[1],
            },
            p: {
              fontSize: theme("fontSize.base")[0],
              lineHeight: theme("fontSize.base")[1],
            },
          },
        },
      }),
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ':root': {
          '--color-accent': theme.colours.accent,
        },
      });
    },
    require("@tailwindcss/typography")
  ],
};
