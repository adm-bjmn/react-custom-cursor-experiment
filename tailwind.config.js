/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "sb-pink": "#E56AA5",
      "sb-blue": "#3CB3C2",
      "sb-navy": "#015492",
      "sb-yellow": "#FBAE42",
      "sb-green": "#27AF8B",
      "sb-cream": "#FED7AB",
      "sb-nearly-black": "#1D1D1B",
      "sb-white": "#fff",
      "sb-grey": "#353843",
    },

    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: "var(--font-mono)",
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },

    container: {
      padding: "32px",
      screens: {
        "2xl": "1496px",
      },
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
