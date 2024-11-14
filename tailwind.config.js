/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a4289', // Add primary color
      },
      boxShadow: {
        'bottom-only': '0 4px 8px rgba(0, 0, 0, 0.25)', // Customize this shadow as needed
      },
    },
  },
  plugins: [],
}

