import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { theme } from "./themeConfig/config.js";
import { UserContextProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
