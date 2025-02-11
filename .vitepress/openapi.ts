import { useOpenapi } from "vitepress-openapi/client";
import { usePaths, useSidebar } from "vitepress-openapi";

let cached: any;

export const getSpec = async () => {
  if (cached) {
    return cached;
  }

  const res = await fetch("https://api.cs2kz.org/docs/openapi.json");
  const spec = await res.json();

  cached = spec;
  return spec;
};

export const getOpenapi = async () => {
  const spec = await getSpec();

  return useOpenapi({
    spec: spec,
    config: {
      path: {
        showBaseURL: true,
      },
    },
  });
};

export const getSidebarItems = async (linkPrefix: string) => {
  const spec = await getSpec();

  const sidebar = useSidebar({
    spec: spec,
    linkPrefix: linkPrefix,
  });

  return sidebar.itemsByPaths({
    depth: 1,
    linkPrefix: linkPrefix,
  });
};

export const getPathsByVerbs = async () => {
  const spec = await getSpec();

  const paths = usePaths({
    spec: spec,
  });

  return paths.getPathsByVerbs();
};
