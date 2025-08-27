const { heroui } = require('@heroui/theme');

module.exports = {
  plugins: [heroui()],
  content: [
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],
};