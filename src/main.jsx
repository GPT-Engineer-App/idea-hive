import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    },
    Button: {
      baseStyle: {
        boxShadow: "none",
        borderRadius: "none",
      },
    },
    Input: {
      baseStyle: {
        boxShadow: "none",
        borderRadius: "none",
      },
    },
    IconButton: {
      baseStyle: {
        boxShadow: "none",
        borderRadius: "none",
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.900",
        color: "whiteAlpha.900",
      },
      "*::placeholder": {
        color: "whiteAlpha.700",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
