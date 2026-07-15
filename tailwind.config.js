/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1273E3",
        "primary-dark": "#0B5BB8",
        sky: "#1B7CF2",
        accent: "#CC1B36",
        navy: "#042B71",
        background: "#FFFFFF",
        surface: "#FFFFFF",
        muted: "#EEF3FB",
        "muted-2": "#DCE8F7",
        "on-surface": "#1A1C1C",
        "on-surface-variant": "#4A5563",
        outline: "#C9D8EC",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "16px",
        "container-max": "1280px",
        "margin-desktop": "40px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 27, 68, 0.08)",
        "card-lg": "0 20px 50px rgba(0, 27, 68, 0.12)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
