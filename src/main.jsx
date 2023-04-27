import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppProvider from "./redux/store.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
   <AppProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
   </AppProvider>
);
