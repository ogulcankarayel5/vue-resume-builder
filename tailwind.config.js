module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      "2xl": "0px 2px 7px -4px rgba(0,0,0,0.75)",
    },

    extend: {
      backgroundImage: {
        section: "url('https://geeko.netlify.app/img/svg/benefits-bg.svg')",
      },
      colors: {
        primary: "#3166FA",
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
        home: "#13287e",
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
