module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        formColor: "#032D23",
        yellow: {
          dark: "#AAA713",
        },
        toast: {
          successColor: "#36C48D",
          successBackground: "#F1FAF7",
          successText: "#508073",

          errorBackground: "#FCF1F0",
          errorColor: "#CE8185",
          errorText: "#A94748",
        },
      },
    },
    fill: (theme) => ({
      success: theme("colors.toast.successColor"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
