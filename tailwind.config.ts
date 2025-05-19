import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCA5A5",     // Rojo pastel
        secondary: "#FCDCDC",   // Rosa claro
        muted: "#D1D5DB",       // Gris claro
        background: "#FFFFFF",  // Fondo blanco
        foreground: "#1F2937",  // Texto oscuro
        card: "#ffffff",
        input: "#F9FAFB",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
