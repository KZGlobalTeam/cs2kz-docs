---
title: API - Explorer
layout: page
sidebar: false
---

<script setup lang="ts">
import { watch, onMounted } from "vue";
import { useData, useRouter } from "vitepress";

const data = useData();
const router = useRouter();

const thisPage = "/api/explorer";
const isBrowser = typeof window !== "undefined";

const scalarReloadReferences = "scalar:reload-references";
const scalarUpdateReferences = "scalar:update-references-config";

const config = {
  hideClientButton: true,
  hideDarkModeToggle: true,
  forceDarkModeState: data.isDark.value ? "dark" : "light",
  spec: {
    url: "https://api.cs2kz.org/docs/openapi.json",
  },
};

const updateConfig = () => {
  const ev = new CustomEvent(scalarUpdateReferences, {
    detail: {
      configuration: config
    },
  });

  document.dispatchEvent(ev);
  document.dispatchEvent(new Event(scalarReloadReferences));
};

const toggleScalarDark = (dark) => {
  if (!isBrowser) {
    return;
  }

  config.forceDarkModeState = dark ? "dark" : "light";
  return updateConfig();
};

onMounted(() => {
  if (!isBrowser) {
    return;
  }

  const container = document.getElementById("api-reference-container");

  const configEl = document.createElement("script");
  configEl.id = "api-reference";
  configEl.type = "application/json";
  configEl.dataset.configuration = JSON.stringify(config);

  const scriptEl = document.createElement("script");
  scriptEl.id = "scalar";
  scriptEl.src = "https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.25.116";
  scriptEl.async = true;

  container.appendChild(configEl);
  container.appendChild(scriptEl);
});

watch(
  () => data.isDark.value,
  (isDark) => toggleScalarDark(isDark),
);

router.onAfterRouteChange = (to) => {
  // Scalar mutates elements, so reload now to revert
  (to !== thisPage) && location.reload();
};
</script>

<div id="api-reference-container"></div>

<style>
.scalar-sidebar-toggle,
.scalar-sidebar-toggle > * {
  display: none !important;
  padding: 0 !important;
}

.references-navigation-list {
  top: calc(var(--refs-header-height) + var(--vp-nav-height)) !important;
  height: calc(100dvh - var(--refs-header-height) - var(--vp-nav-height)) !important;
}
</style>
