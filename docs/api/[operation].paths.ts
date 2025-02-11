import { getPathsByVerbs } from "../../.vitepress/openapi";

export default {
  async paths() {
    const paths = await getPathsByVerbs();

    return paths.map((path) => {
      return {
        params: {
          operation: path?.operationId,
        },
      };
    });
  }
};
