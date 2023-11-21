<script setup lang="ts">
defineProps({
    name:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:String
    }
})
</script>
<template>
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a class="product-item" href="cart.html">
            <img
              :src="image"
              class="img-fluid product-thumbnail"
              alt="image"
              style="width:40%"
            />
            <h3 class="product-title">{{ name  }}</h3>
            <strong class="product-price">Rp. {{ price }}</strong>

            <span class="icon-cross">
              <img src="@/assets/images/cross.svg" class="img-fluid" alt="image" />
            </span>
          </a>
        </div>
</template>