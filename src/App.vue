<template>
  <el-container class="layout" direction="vertical">
    <TheHeader class="layout__header" ref="header" />
    <TheAside class="layout__aside" ref="aside" :style="styleAside" />
    <el-main class="layout__main" :style="styleMain">
      <RouterView />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted } from "vue";
  import { RouterView } from "vue-router";
  import TheHeader from "@/components/TheHeader.vue";
  import TheAside from "@/components/TheAside.vue";

  const header = ref(null);
  const aside = ref(null);

  const headerHeight = ref(0);
  const asideWidth = ref(0);

  onMounted(() => {
    headerHeight.value = header.value.$el.clientHeight;
    asideWidth.value = aside.value.$el.clientWidth;
  });

  const styleAside = computed(() => {
    return {
      top: `${headerHeight.value}px`,
      height: `calc(100% - ${headerHeight.value}px)`,
    };
  });

  const styleMain = computed(() => {
    return {
      "margin-top": `${headerHeight.value}px`,
      "margin-left": `${asideWidth.value}px`,
    };
  });
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";
  .layout {
    &__header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    &__aside {
      position: fixed;
      left: 0;
    }
  }
</style>
