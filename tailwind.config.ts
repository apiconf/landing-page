import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "MonumentExtended-extrabold": ["MonumentExtended-extrabold", "sans-serif"]
      },
      boxShadow: {
        timerBtn:
          "0px 0px 8px 0px rgba(47, 28, 129, 0.10), 0px 4px 24px 0px rgba(47, 28, 129, 0.35)",
        bannerBtn:
          "0px 0px 8px 0px rgba(47, 28, 129, 0.10), 0px 4px 32px 0px rgba(47, 28, 129, 0.15)",
        heroCard:
          "0px 0px 16px 0px rgba(47, 28, 129, 0.08), 0px 0px 2px 0px rgba(47, 28, 129, 0.12)",
        aboutCard: 
          "0px 0px 16px 0px rgba(47, 28, 129, 0.08), 0px 0px 2px 0px rgba(47, 28, 129, 0.12)"
      },
      textColor: {
        "primary-black": "#1F1F1F",
        "white": "#FFF",
        gray: "#666",
        "purple": "#4334D3",
      },
      backgroundColor: {
        "white": "#FFF",
      },
      backgroundImage: {
        "lg-banner": "url('/src/assets/lg-banner.png')",
        "sm-banner": "url('/src/assets/sm-banner.png')",
        "lg-aboutSectionBg": "url('/src/assets/lg-about-section-bg.svg')",
        "sm-aboutSectionBg": "url('/src/assets/sm-about-section-bg.svg')"
      },
      borderRadius: {
        "6xl": "32px",
      },
    },
    colors: {
      "custom-blue": "#4334D3"
    },
    fontFamily: {
      sans: ["Cabinet-Grotesk"],
    },
  },
  plugins: [],
} satisfies Config;
