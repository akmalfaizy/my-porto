/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b", // kasih '#' biar valid
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // biar bisa pakai line-clamp-3
  ],
};
