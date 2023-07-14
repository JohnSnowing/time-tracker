import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans"; 
import "@fontsource/open-sans/400.css"; 
import "@fontsource/open-sans/400-italic.css";


//theme overall configuration
export const theme = extendTheme({
    colors: {
        brand: {
            100: "#20c997",
        },
        textColor: {
            h1: "#171923",
            p: "#4A5568",
            label: "#2D3748"
        }
    },
    fonts: {
        body: `'Open Sans', sans-serif`,
    },
    styles: {
        global: () => ({
            body: {
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                with:"100%",
            },
            button: {
                backgroundColor: "#20c997",
                color: "#FFFFFF",
            },
            label: {
                color: "textColor.label",
                fontSize: "14px"
            },
            a: {
                color: "brand.100"
            }
        }),
    },
});