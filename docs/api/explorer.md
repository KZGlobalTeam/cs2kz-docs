---
layout: page
sidebar: false
---

<script setup lang="ts">
import { computed } from "vue";
import { useData, useRouter } from "vitepress";

import { ApiReference, useSidebar } from "@scalar/api-reference";

const data = useData();
const router = useRouter();

router.onAfterRouteChange = (to) => {
  let el = document.getElementById("scalar-style-api-reference");
  if (el) {
    el.disabled = (to !== "/api/explorer");
    return;
  }

  el = document.createElement("link");
  el.id = "scalar";
  el.rel = "stylesheet";
  el.href = "node_modules/@scalar/api-reference/style.css";

  document.head.appendChild(el);
};

const config = computed(() => {
  return {
    hideClientButton: true,
    hideDarkModeToggle: true,
    defaultOpenAllTags: true,
    forceDarkModeState: data.isDark.value ? "dark" : "light",
    spec: {
      url: "https://api.cs2kz.org/docs/openapi.json",
    },
  };
});
</script>

<ClientOnly>
  <ApiReference
    :key="data.isDark.value"
    :configuration="config"
  />
</ClientOnly>

<style>
.references-navigation-list {
  top: calc(var(--refs-header-height) + var(--vp-nav-height)) !important;
  height: calc(100dvh - var(--refs-header-height) - var(--vp-nav-height)) !important;
}
</style>
