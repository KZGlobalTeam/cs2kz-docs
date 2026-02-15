import { nextTick, watch } from "vue";
import type { Router, Route } from "vitepress";

type EnableCallback = (route: Route) => boolean;

export const useZoom = (router: Router, enableCb: EnableCallback) => {
  // Not available in SSR
  if (import.meta.env.SSR) {
    return;
  }

  let zoom: ReturnType<Awaited<typeof import("medium-zoom")["default"]>>;

  const enable = async () => {
    zoom ??= (await import("medium-zoom")).default({
      background: "transparent",
    });

    zoom.detach();

    const enable = enableCb(router.route);
    if (enable) {
      zoom.attach("img");
    }
  };

  watch(
    () => router.route.path,
    () => nextTick(enable),
  );

  return {
    stop: () => zoom.detach(),
    start: () => zoom.attach("img"),
  };
};
