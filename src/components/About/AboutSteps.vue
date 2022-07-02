<template>
  <div class="about-steps">
    <div>this is my time</div>
    <Button @click="$emit('closeModal')">Terminer</Button>
  </div>
</template>

<script setup>
  import Button from "@/components/Common/Button.vue";
</script>
