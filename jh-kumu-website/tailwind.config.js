/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // blue-500
        secondary: "#6b7280", // gray-500
        accent: "#f59e0b", // amber-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(container|grid|flex|p|m|px|py|mx|my|mt|mb|ml|mr|gap|space|bg|text|border|rounded|shadow|w|h|items|justify|hidden|col|row|lg|md|sm)(-.*)?$/,
    },
  ],
}
