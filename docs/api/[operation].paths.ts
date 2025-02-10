import { usePaths } from "vitepress-openapi";

import { getSpec } from "../../.vitepress/openapi";

export default {
  async paths() {
    const spec = await getSpec();

    return usePaths({ spec })
      .getPathsByVerbs()
      .map((path) => {
        return {
          params: {
            operation: path?.operationId,
          },
        };
      });
  }
};
