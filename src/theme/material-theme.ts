import { createTheme } from "@mui/material/styles";

import { ptBR as corePtBR } from "@mui/material/locale";

declare module "@mui/material/styles" {
  interface Palette {
    default: Palette["primary"];
    white: Palette["primary"];
  }
  interface PaletteOptions {
    default: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }

  interface Duration {
    slow: number;
  }
}

// Define your theme
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#0029BA",
        light: "#E0EEFB",
        dark: "#0029BA",
      },
      secondary: {
        main: "##EB1639",
        light: "#F8ECF7",
      },
      background: {
        default: "#F5F5F5",
        paper: "#FFFFFF",
      },
      success: {
        light: "#CDF0D3",
        main: "#11A338",
      },
      error: {
        light: "#FFD4D4",
        main: "#FF6464",
      },
      warning: {
        light: "#FFFCFA",
        main: "#FFB32C",
      },
      info: {
        light: "#ECF7FF",
        main: "#0E4FC8",
      },
      default: {
        main: "#0F0F0F",
      },
      white: {
        main: "#fff",
      },
      grey: {
        "900": "#1E1E1E",
        "800": "#3B3B3B",
        "700": "#5F5F5F",
        "600": "#757575",
        "500": "#8B8B8B",
        "400": "#A1A1A1",
        "300": "#C8C8C8",
        "200": "#E0E0E0",
        "100": "#F5F5F5",
      },
      action: {
        hover: "#E0EEFB",
      },
    },
    typography: {
      // fontFamily: , // Change the font family
      fontSize: 25.6, // Change the base font size to 1.6rem,
    },
    transitions: {
      duration: {
        slow: 600,
      },
    },
  },
  corePtBR
);

export default theme;
