---
title: API
aside: false
outline: false
---

<script setup lang="ts">
import { useRoute } from "vitepress";

const route = useRoute();
const operation = route.data.params.operation;
</script>

<OAOperation
  hide-branding
  :operationId="operation"
/>
