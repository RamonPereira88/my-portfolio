import { extendTheme, ChakraTheme } from "@chakra-ui/react";

// Partial is a way to make all the other mandatory properties of the interface optional
const customTheme: Partial<ChakraTheme> = {
  config: {
     initialColorMode: 'light',
  },
  fonts: {
     heading: 'Saira',
     body: 'Saira'
  }
}

export const theme = extendTheme(customTheme)