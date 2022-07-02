<template>
  <main>
    <Home />
  </main>
</template>

<script setup>
  import Home from "@/components/Home/Home.vue";
</script>

<style lang="scss" scoped>
  main {
    @media (min-width: 1024px) {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
