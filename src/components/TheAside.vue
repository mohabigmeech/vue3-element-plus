<template>
  <el-aside class="aside" width="200px">
    <div class="aside__top-menu">
      <el-menu :default-active="defaultLink">
        <AsideButton index="run" :icon="VideoPlay" primary>
          Lancer un test
        </AsideButton>
        <AsideButton index="test" :icon="RefreshLeft" primary>
          Charger un test
        </AsideButton>
        <AsideButton index="maintenance" :icon="ForkSpoon" primary>
          Maintenance
        </AsideButton>
        <AsideButton index="settings" :icon="Tools" primary>
          Paramètres
        </AsideButton>
      </el-menu>
    </div>

    <div class="aside__bottom-menu">
      <el-menu :default-active="defaultLink">
        <AsideButton index="options" :icon="Operation">Options</AsideButton>
      </el-menu>
    </div>
  </el-aside>
</template>

<script setup>
  import { computed } from "@vue/reactivity";
  import { useRoute } from "vue-router";
  import AsideButton from "@/components/Aside/AsideButton.vue";
  import {
    VideoPlay,
    RefreshLeft,
    Tools,
    Operation,
    ForkSpoon,
  } from "@element-plus/icons-vue";

  const defaultLink = computed(() => {
    const route = useRoute();
    return route.name;
  });
</script>

<style lang="scss">
  @import "@/assets/scss/main.scss";

  .aside {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    background: color("white");
    box-shadow: get($shadows, "dark");

    &__top-menu {
      display: flex;
      align-items: center;
      flex: 1;
      margin-right: 20px;

      .el-menu {
        flex: 1;
        border-right: none;
      }
    }

    &__bottom-menu {
      padding: 0 20px;

      .el-menu {
        border-top: 1px solid color("border");
        border-right: none;
      }
    }
  }
</style>
