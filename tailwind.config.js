/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrayHover: "#80848E3D",
        customBGHeader: "#F6F8FA",
        customColorHeader: "#1F2328",
        customMesBG: "#E6F6ED",
        customMesBorderColor: "rgba(36, 241, 6, 0.46)",
        customMesColor: "#0ad406",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
