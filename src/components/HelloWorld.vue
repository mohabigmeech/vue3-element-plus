<template>
  <div class="greetings">
    <h1 class="green">{{ props.msg }}</h1>
    <h3>
      You’ve <span>successfully</span> created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
h3 {
  span {
    color: blue;
  }
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media #{$md-and-up} {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
