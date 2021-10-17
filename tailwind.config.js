module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        formColor: "#032D23",
        yellow: {
          dark: "#AAA713"
        }

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
