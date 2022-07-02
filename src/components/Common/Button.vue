<template>
  <el-button :="attrList">
    <slot></slot>
  </el-button>
</template>

<script setup>
  import { computed } from "@vue/reactivity";

  const props = defineProps({
    primary: Boolean,
    secondary: Boolean,
  });
  const attrList = computed(() => {
    if (props.primary)
      return {
        type: "primary",
        color: "#626aef",
      };
    if (props.secondary)
      return {
        type: "primary",
        color: "#000",
      };
    else
      return {
        type: "primary",
        color: "#626aef",
      };
  });
</script>
