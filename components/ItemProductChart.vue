<script setup lang="ts">
defineProps({
  productImage: {
    type: String,
  },
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productQuantity: {
    type: Number,
  },
});

defineEmits(["add", "min"]);
</script>
<template>
  <tr>
    <td class="product-thumbnail">
      <img :src="productImage ?? ''" alt="Image" class="img-fluid" />
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{ productName }}</h2>
    </td>
    <td>Rp.{{ productPrice }}</td>
    <td>
      <div
        class="input-group mb-3 d-flex align-items-center quantity-container"
        style="max-width: 120px"
      >
        <div class="input-group-prepend">
          <button
            @click="$emit('add')"
            class="btn btn-outline-black decrease"
            type="button"
          >
            −
          </button>
        </div>
        <input
          type="text"
          class="form-control text-center quantity-amount"
          :value="productQuantity ?? 0"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <div class="input-group-append">
          <button
            @click="$emit('min')"
            class="btn btn-outline-black increase"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </td>
    <td>Rp.{{ (productPrice ?? 0) * (productQuantity ?? 0) }}</td>
    <td><a href="#" class="btn btn-black btn-sm">X</a></td>
  </tr>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
