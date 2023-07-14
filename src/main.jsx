import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { theme } from "./themeConfig/config.js";
import { UserContextProvider } from "./context/userContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <UserContextProvider>
                <App />
                <ToastContainer />
            </UserContextProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
