import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import { theme, useOpenapi } from "vitepress-openapi/client";

import "./style.css";
import "vitepress-openapi/dist/style.css";

import { getSpec } from "../openapi";

const defineTheme = (theme: Theme) => theme;

export default defineTheme({
  extends: DefaultTheme,
  enhanceApp: async (ctx) => {
    const spec = await getSpec();

    const openapi = useOpenapi({
      spec: spec,
    });

    theme.enhanceApp({
      ...ctx,
      openapi: openapi as any, // TODO: Why is this necessary
    });
  },
});
