---
title: API - Explorer
layout: page
sidebar: false
---

<script setup lang="ts">
import { computed, watch } from "vue";
import { useData, useRouter } from "vitepress";

import { ApiReference, useSidebar } from "@scalar/api-reference";

const data = useData();
const router = useRouter();

const thisPage = "/api/explorer";

const toggleScalarDark = (dark) => {
  if (dark) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
};

watch(
  () => data.isDark.value,
  (isDark) => toggleScalarDark(isDark),
);

router.onAfterRouteChange = (to) => {
  const el = document.getElementById("scalar-style-api-reference");
  if (!el) {
    return;
  }

  // Disable Scalar styles when navigating away
  el.disabled = (to !== thisPage);
};

const config = computed(() => {
  return {
    hideClientButton: true,
    hideDarkModeToggle: true,
    forceDarkModeState: data.isDark.value ? "dark" : "light",
    spec: {
      url: "https://api.cs2kz.org/docs/openapi.json",
    },
  };
});
</script>

<ClientOnly>
  <ApiReference
    :configuration="config"
  />
</ClientOnly>

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
