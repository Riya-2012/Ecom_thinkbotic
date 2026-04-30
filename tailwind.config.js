/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",   // Indigo (main brand)
        accent: "#a3e635",    // Lime (highlights)
        dark: "#0f172a",      // Text dark
        light: "#f8fafc",     // Background
        muted: "#64748b",     // Secondary text
      },
    },
  },
  plugins: [],
};