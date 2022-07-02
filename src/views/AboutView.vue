<template>
  <main>
    <About />
  </main>
</template>

<script setup>
  import About from "@/components/About/About.vue";
</script>

<style lang="scss">
  main {
    @media (min-width: 1024px) {
      // min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
