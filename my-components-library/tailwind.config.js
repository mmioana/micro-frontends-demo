/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        'text-primary': "var(--text-color-primary)",
        'text-secondary': "var(--text-color-secondary)",
      }
    },
  },
  plugins: [],
}

