module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Graphik", "sans-serif"]
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px"
    },
    colors: {
      black: "#333333",
      gray: {
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121"
      },
      white: "#ffffff",
      gold: "#856f38"
    },
    extend: {
      spacing: {
        "96": "24rem",
        "128": "32rem"
      }
    }
  },
  variants: {
    visibility: ["responsive", "hover", "focus", "group-hover"]
  }
};
