import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "../node_modules/@fontsource/open-sans";
import "../node_modules/@fontsource/raleway";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

const theme = extendTheme({ config, fonts });
export default theme;
