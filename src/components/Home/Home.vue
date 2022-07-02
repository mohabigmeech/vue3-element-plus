<template>
  <div class="home">
    <h1>Get data from Component</h1>
    <p>The count = {{ state.count }}</p>
    <el-button @click="increment">Ajouter au compteur</el-button>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  const state = reactive({
    count: 0,
  });
  function increment() {
    state.count++;
  }
</script>
