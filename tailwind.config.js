/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'card': {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 47.4%, 11.2%)',
        },
        'primary': {
          DEFAULT: 'hsl(222.2, 47.4%, 11.2%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
      },
    },
  },
  plugins: [],
} 