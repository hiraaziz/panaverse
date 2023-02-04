import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '320px',
    md: '481px',
    lg: '768px',
    xl: '1024px',
    '2xl': '1440px',
    '3xl': '2560px',
}
export const theme = extendTheme({breakpoints})