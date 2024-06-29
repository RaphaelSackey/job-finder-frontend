/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "1fr 1fr 1fr 2fr",
      },
      colors: {
        customDark: "#141413ff",
        customSeaSalt: "#F9F9F9ff",
        customChampagnePink: "#FFE1CBff",
        customMintGreen: "#D4F6ECff",
        customAntiflashWhite: "#EBEFF3ff",
        customPalePurple: "#FBE2F4ff",
        customAliceBlue: "#DFF2FEff",
        customRenchGray: "#B5B7BBff",
        customWhite: "#FFFFFFff",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppinsBold: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
