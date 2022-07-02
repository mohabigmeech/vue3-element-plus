<template>
  <router-link :to="{ name: index }">
    <el-menu-item :index="index" :class="classButton">
      <el-icon>
        <component v-if="!iconIsEmpty" :is="icon"></component>
      </el-icon>
      <span><slot></slot></span>
    </el-menu-item>
  </router-link>
</template>

<script setup>
  import { computed } from "vue";
  import { isEmptyObject } from "@/plugins/helpers";

  const props = defineProps({
    index: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      default: {},
    },
    primary: {
      type: Boolean,
      default: false,
    },
  });

  const iconIsEmpty = computed(() => isEmptyObject(props.icon));
  const classButton = computed(() => {
    return {
      "--primary": props.primary,
    };
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/main.scss";
  .el-menu-item {
    &.--primary {
      border-radius: 0 5px 5px 0;
      &.is-active {
        color: color("white");
        background: color("primary");
      }
    }
  }
</style>
