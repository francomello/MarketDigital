/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'md-blue-dark': '#2b78b0',
        'md-blue-light': '#7ab3d8',
        'md-blue-pastel': '#c1dbe6',
        'md-dark': '#07070c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
}
