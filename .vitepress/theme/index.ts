import DefaultTheme from "vitepress/theme";

import { theme } from "vitepress-openapi/client";

import "./style.css";
import "vitepress-openapi/dist/style.css";

import { getOpenapi } from "../openapi";

export default {
  extends: DefaultTheme,
  enhanceApp: async (ctx) => {
    const openApi = await getOpenapi();

    theme.enhanceApp({
      ...ctx,
      openapi: openApi as any, // TODO: Why is this necessary
    });
  },
};
