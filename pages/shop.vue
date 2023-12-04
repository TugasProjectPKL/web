<script setup lang="ts">
import { onMounted } from "vue";

const product = useProduct();

onMounted(() => {
  product.getListProductShop();
});
</script>
<template>
  <NuxtLayout name="dashboard">
    <!-- Start Header/Navigation -->
    <MainNavbar />
    <!-- End Header/Navigation -->

    <!-- Start Hero Section -->
    <div class="hero">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <div class="intro-excerpt">
              <h1>Shop</h1>
            </div>
          </div>
          <div class="col-lg-7"></div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->

    <div class="untree_co-section product-section before-footer-section">
      <div class="container">
        <div class="row">
          <ItemProductHome
            v-for="item in product.dataProductShop"
            :image="item.product_image ?? ''"
            :name="item.product_name ?? ''"
            :price="item.product_price ?? 0"
            @add="
              () => {
                product.insertProductToCart(item.id);
              }
            "
          />
        </div>
      </div>
    </div>
    <!-- Start Footer Section -->
    <MainFooter>
      <div class="sofa-img">
        <img src="@/assets/images/people.png" alt="Image" class="img-fluid" />
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="subscription-form">
            <h3 class="d-flex align-items-center">
              <span class="me-1"
                ><img
                  src="@/assets/images/envelope-outline.svg"
                  alt="Image"
                  class="img-fluid" /></span
              ><span>Subscribe to Newsletter</span>
            </h3>

            <form action="#" class="row g-3">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div class="col-auto">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div class="col-auto">
                <button class="btn btn-primary">
                  <font-awesome-icon icon="fa-regular fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainFooter>
    <!-- End Footer Section -->
  </NuxtLayout>
</template>

<style>
@import url("@/assets/css/bootstrap.min.css");

/* Pastikan import style yang diperlukan */
@import url("~/assets/css/style.css");
@import url("~/assets/css/tiny-slider.css");
</style>
