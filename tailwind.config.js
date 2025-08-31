const { heroui } = require('@heroui/theme');

module.exports = {
  plugins: [heroui()],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
        rouge: ["Rouge Script", "cursive"],
      },
    },
  },
};