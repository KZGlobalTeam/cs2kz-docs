import DefaultTheme from "vitepress/theme";

import { type EnhanceAppContext, type Theme } from "vitepress";

import "./style.css";

import { useZoom } from "./composables/useZoom";

export default <Theme>{
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    useZoom(
      ctx.router,
      (route) => route.data.frontmatter.zoomEnabled === true
    );
  },
};
