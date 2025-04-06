// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'), // Allows backdrop filters like blur
    require('tailwind-scrollbar'),  // Optional: scroll styling
  ],
};
