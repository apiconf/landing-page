import type { Config } from "tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        hsm: "330px",
        "3xl": "1650px",
      },
      fontFamily: {
        "MonumentExtended-extrabold": [
          "MonumentExtended-extrabold",
          "sans-serif",
        ],
      },
      boxShadow: {
        timerBtn:
          "0px 0px 8px 0px rgba(47, 28, 129, 0.10), 0px 4px 24px 0px rgba(47, 28, 129, 0.35)",
        bannerBtn:
          "0px 0px 8px 0px rgba(47, 28, 129, 0.10), 0px 4px 32px 0px rgba(47, 28, 129, 0.15)",
        heroCard:
          "0px 0px 16px 0px rgba(47, 28, 129, 0.08), 0px 0px 2px 0px rgba(47, 28, 129, 0.12)",
        aboutCard:
          "0px 0px 16px 0px rgba(47, 28, 129, 0.08), 0px 0px 2px 0px rgba(47, 28, 129, 0.12)",
      },
      textColor: {
        "primary-black": "#1F1F1F",
        white: "#FFF",
        dark: "#000000",
        gray: "#666",
        purple: "#4334D3",
      },
      backgroundColor: {
        "dark-purple": "#2F20BF",
        white: "#FFF",
        peach: "#ECC89D",
        sponsor: `linear-gradient(0deg, #90EAF2, #90EAF2),linear- gradient(180deg, rgba(255, 255, 255, 0) 0 %, rgba(255, 255, 255, 0) 33.33%, rgba(255, 255, 255, 0) 66.67%, #FFFFFF 100%)`,
        "new-sponsor": `linear-gradient(0deg, #90EAF2, #90EAF2),linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 33.33%, rgba(255, 255, 255, 0) 66.67%, #FFFFFF 100%)`,
      },
      backgroundImage: {
        "lg-banner": "url('/src/assets/lg-banner.png')",
        spaces: "url('/src/assets/Spaces.png')",
        "sm-banner": "url('/src/assets/sm-banner.png')",
        "lg-aboutSectionBg": "url('/src/assets/lg-about-section-bg.svg')",
        "sm-aboutSectionBg": "url('/src/assets/sm-about-section-bg.svg')",
        sponsor: `linear-gradient(180deg, #90EAF2 66.67%, #FFFFFF 100%)`,
        highlight: `linear-gradient(0deg, #90EAF2, #90EAF2)`,
        confirmation: "url('/src/assets/confirmation-background.png')",
      },
      borderRadius: {
        "6xl": "32px",
      },
    },
    colors: {
      "custom-blue": "#4334D3",
    },
    fontFamily: {
      sans: ["Cabinet-Grotesk"],
    },
  },
  plugins: [],
} satisfies Config;
