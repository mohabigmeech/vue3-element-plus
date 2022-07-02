<template>
  <el-dialog
    customClass="b4c-modal"
    :title="title"
    width="80%"
    :before-close="beforeClose"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    beforeClose: {
      type: Function,
    },
  });
</script>

<style lang="scss">
  .b4c-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
</style>
