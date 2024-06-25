import {
  Button,
  Card,
  color,
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
  useColorMode,
} from "@chakra-ui/react";
import "../node_modules/@fontsource/open-sans";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Open Sans', sans-serif`,
};
const breakpoints = {
  base: "0px",
  sm: "580px",
  md: "840px",
  lg: "1200px",
  xl: "1550px",
  "2xl": "1800px",
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
    SearchInput: {
      bg: mode("red.100", "red.800")(props),
    },
  }),
};
const theme = extendTheme({ config, fonts, styles, breakpoints });
export default theme;
