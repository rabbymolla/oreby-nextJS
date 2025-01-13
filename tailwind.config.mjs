/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      dark_color: "var(--dark_color)",
      white_color: "var(--white_color)",
      cultured_color: "var(--cultured_color)",
      silver_color: "var(--silver_color)",
      lucky_color: "var(--lucky_color)",
      button_color: "var(--button_color)",
      red_color: "var(--red_color)",
      opcity_color: "var(--opacity_bg)",
      transparent: "transparent",
    },
    fontFamily: {
      DmSans: ["var--font-dm-sans)"],
    },
    extend: {
      screens: {
        xs: "350px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
