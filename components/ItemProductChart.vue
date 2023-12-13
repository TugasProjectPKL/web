<script setup lang="ts">
import { useToast } from "vue-toastification";
const props = defineProps({
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
const emit = defineEmits(["add", "min", "insert", "delete"]);

const toast = useToast();

function remove() {
  emit("delete", {});
}

function insert(value: any) {
  if ((value.target.value as number) == 0) {
    toast.error("Kuantitas tidak boleh dibawah 1");
    return;
  }
  emit("insert", Number.parseInt(value.target.value));
}
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
            @click="$emit('min')"
            class="btn btn-outline-black decrease"
            type="button"
          >
            −
          </button>
        </div>
        <input
          type="number"
          class="form-control text-center quantity-amount"
          :value="productQuantity ?? 0"
          v-on:change="insert"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <div class="input-group-append">
          <button
            @click="$emit('add')"
            class="btn btn-outline-black increase"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </td>
    <td>Rp.{{ (productPrice ?? 0) * (productQuantity ?? 0) }}</td>
    <td><a @click="remove" class="btn btn-black btn-sm">X</a></td>
  </tr>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: none;
}
</style>
