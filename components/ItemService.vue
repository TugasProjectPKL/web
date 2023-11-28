<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>
<template>
  <div class="col-6 col-md-6">
    <div class="feature">
      <div class="icon">
        <slot></slot>
      </div>
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
