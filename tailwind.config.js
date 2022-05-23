const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), backfaceVisibility],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3C8599",
          secondary: "#212121",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
