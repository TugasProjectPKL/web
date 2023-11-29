<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
});
defineEmits(["add"]);
</script>
<template>
  <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
    <a class="product-item" @click="$emit('add')">
      <img :src="image ?? ''" class="img-fluid product-thumbnail" alt="tes" />
      <h3 class="product-title">{{ name }}</h3>
      <strong class="product-price">Rp {{ price }}/Dus</strong>

      <span class="icon-cross">
        <img src="@/assets/images/cross.svg" class="img-fluid" alt="tes" />
      </span>
    </a>
  </div>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
