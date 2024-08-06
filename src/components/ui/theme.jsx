// theme.jsx

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
    primary: {
        100: "#000",
        200: "#48DCAF",
    }
};

const components = {
    Text: {
        color: 'primary.100',
    },
    Button: {
        baseStyle: {
            fontSize: '10',
            fontWeight: 'medium',
            // border: '1px',
            borderRadius: "30",
            bg: 'primary.100',
            color: 'white',
            outline: 'none',
            _hover: {
                border: '1px',
                bg: 'transparent',
                color: 'primary.100'
            }

        },
    },
    Link: {
        baseStyle: {
            fontWeight: 'medium',
            _hover: {
                color: "blue",
                textDecoration: 'none',
                scale: 1.1
            }
        }
    }

};

const styles = {
    global: {
        body: {
            m: 0,
            p: 0,
            color: 'black',
            fontFamily: 'Inter',
            fontWeight: 'regular',
            width: '100%',
            maxW: '100vw',
            overflowX: 'hidden',
            bg: 'white',
            backgroundImage: '/images/bg3.jpg',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            bgRepeat: "no-repeat",
            css: {
                '@supports (-webkit-overflow-scrolling: none)': {
                    backgroundAttachment: 'scroll',
                },
            }
        },
        '*': {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
        // div: {
        //     maxWidth: '100%',
        //     margin: 0,
        //     padding: 0,
        // }
    }
};

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    config, colors, components, styles
})


export default theme;