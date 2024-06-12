import {
  Button,
  Card,
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
  useColorMode,
} from "@chakra-ui/react";
import "../node_modules/@fontsource/open-sans";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

const theme = extendTheme({ config, fonts });
export default theme;
