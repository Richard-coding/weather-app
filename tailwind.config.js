/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        neutral: {
          900: "hsl(var(--neutral-900) / <alpha-value>)",
          800: "hsl(var(--neutral-800) / <alpha-value>)",
          700: "hsl(var(--neutral-700) / <alpha-value>)",
          600: "hsl(var(--neutral-600) / <alpha-value>)",
          300: "hsl(var(--neutral-300) / <alpha-value>)",
          200: "hsl(var(--neutral-200) / <alpha-value>)",
          0: "hsl(var(--neutral-0) / <alpha-value>)",
        },
        orange: {
          500: "hsl(var(--orange-500) / <alpha-value>)",
        },
        blue: {
          500: "hsl(var(--blue-500-) / <alpha-value>)",
          700: "hsl(var(--blue-700-) / <alpha-value>)",
        },
      },
      fontFamily: {
        bricolage: "Bricolage Grotesque",
        dm: "DM Sans",
      },
      fontSize: {
        base: "var(--font-base)",
        sub: "var(--font-sub)",
      },
      spacing: {
        25: "var(--spacing-025)",
        50: "var(--spacing-050)",
        75: "var(--spacing-075)",
        100: "var(--spacing-100)",
        125: "var(--spacing-125)",
        150: "var(--spacing-150)",
        200: "var(--spacing-200)",
        250: "var(--spacing-250)",
        300: "var(--spacing-300)",
        400: "var(--spacing-400)",
        500: "var(--spacing-500)",
        600: "var(--spacing-600)",
        800: "var(--spacing-800)",
        1000: "var(--spacing-1000)",
        1200: "var(--spacing-1200)",
        1400: "var(--spacing-1400)",
        1600: "var(--spacing-1600)",
        1800: "var(--spacing-1800)",
      },
      borderRadius: {
        4: "var(--radius-4)",
        6: "var(--radius-6)",
        8: "var(--radius-8)",
        10: "var(--radius-10)",
        12: "var(--radius-12)",
        16: "var(--radius-16)",
        20: "var(--radius-20)",
        24: "var(--radius-24)",
        full: "var(--radius-full)",
      },
      backgroundImage: {
        mobile: "url('./assets/images/bg-today-small.svg')",
        desktop: "url('./assets/images/bg-today-large.svg')",
      },
    },
  },
  plugins: [],
};
