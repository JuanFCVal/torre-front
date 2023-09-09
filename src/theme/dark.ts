import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976D2", // Azul oscuro
    },
    secondary: {
      main: "#9C27B0", // Morado oscuro
    },
    error: {
      main: "#F44336", // Rojo oscuro
    },
    background: {
      default: "#121212", // Fondo oscuro principal
      paper: "#1e1e1e", // Fondo de papel oscuro
    },
    text: {
      primary: "#ffffff", // Texto principal en blanco
      secondary: "#A7A7A7", // Texto secundario en gris claro
    },
  },
});