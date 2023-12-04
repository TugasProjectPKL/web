<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const product = useProduct();
const router = useRouter();
onMounted(() => {
  product.getListProductChart();
});
</script>

<template>
  <!-- Start Header/Navigation -->
  <MainNavbar />
  <!-- End Header/Navigation -->

  <!-- Start Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Cart</h1>
          </div>
        </div>
        <div class="col-lg-7"></div>
      </div>
    </div>
  </div>
  <!-- End Hero Section -->

  <div class="untree_co-section before-footer-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <div class="site-blocks-table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-total">Total</th>
                  <th class="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <ItemProductChart
                  v-if="product.dataProductCart.length > 0"
                  v-for="item in product.dataProductCart"
                  :product-image="item.tb_product.product_image ?? ''"
                  :product-name="item.tb_product.product_name"
                  :product-price="item.tb_product.product_price"
                  :product-quantity="item.quantity"
                  @add="
                    () => {
                      product.updateQuantity(item.id, item.quantity, true);
                    }
                  "
                  @min="
                    () => {
                      product.updateQuantity(item.id, item.quantity, false);
                    }
                  "
                  @insert="
                    (value:number) => {
                      console.log('s',value)
                      product.insertQuantity(item.id, value);
                    }
                  "
                />
                <tr v-if="product.dataProductCart.length < 1">
                  <td></td>
                  <td></td>
                  <td>Belum ada produk</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="row mb-5"></div>
          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
        <div class="col-md-6 pl-5">
          <div class="row justify-content-end">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-12 text-right border-bottom mb-5">
                  <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <span class="text-black">Subtotal</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">Rp.{{ product.getTotal }}</strong>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-6">
                  <span class="text-black">Total</span>
                </div>
                <div class="col-md-6 text-right">
                  <strong class="text-black">Rp.{{ product.getTotal }}</strong>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-black btn-lg py-3 btn-block"
                    @click="
                      () => {
                        router.push('/checkout/checkout');
                      }
                    "
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Start Footer Section -->
  <MainFooter />
  <!-- End Footer Section -->
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
