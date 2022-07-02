<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Next gen of platform
      <a target="_blank" href="https://www.bforcure.com/fr/">BforCure</a> +
      <a target="_blank" href="https://vuejs.org/"> Vue 3 </a>.
    </h3>
  </div>
</template>

<script setup>
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings {
    h1,
    h3 {
      text-align: center;
      @media (min-width: 1024px) {
        text-align: left;
      }
    }
  }
</style>
