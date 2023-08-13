/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xss: "200px",
        xs: "360px",
        sm: "480px",
        md: "768px",
        // ipad: '830px',
        lg: "1200px",
        // minixl: '1200px',
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "1920px",
        maxmd: { max: "768px" },
      },
    },
  },
  plugins: [],
};
