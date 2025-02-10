import { useSidebar } from "vitepress-openapi";

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

export const getSidebarItems = async (linkPrefix: string) => {
  const sidebar = useSidebar({
    spec: await getSpec(),
    linkPrefix: linkPrefix,
  });

  return sidebar.itemsByPaths({
    depth: 1,
    linkPrefix: linkPrefix,
  });
};
