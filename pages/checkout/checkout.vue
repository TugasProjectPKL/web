<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const route = useRoute();
const product = useProduct();
const transaction = useTransaction();

onMounted(() => {
  product.getListProductChart();
});
</script>

<template>
  <MainNavbar />
  <!-- Start Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Checkout</h1>
          </div>
        </div>
        <div class="col-lg-7"></div>
      </div>
    </div>
  </div>
  <!-- End Hero Section -->

  <div class="untree_co-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0">
          <h2 class="h3 mb-3 text-black">Detail Penerima</h2>
          <div class="p-3 p-lg-5 border bg-white">
            <div class="form-group">
              <label for="c_country" class="text-black"
                >Negara <span class="text-danger">*</span></label
              >
              <select
                v-model="transaction.country"
                id="c_country"
                class="form-control"
              >
                <option value="1">Pilih Negara</option>
                <option value="2">bangladesh</option>
                <option value="3">Algeria</option>
                <option value="4">Afghanistan</option>
                <option value="5">Ghana</option>
                <option value="6">Albania</option>
                <option value="7">Bahrain</option>
                <option value="8">Colombia</option>
                <option value="9">Dominican Republic</option>
              </select>
            </div>
            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_fname" class="text-black"
                  >Nama Depan <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_fname"
                  name="c_fname"
                  v-model="transaction.firstName"
                />
              </div>
              <div class="col-md-6">
                <label for="c_lname" class="text-black"
                  >Nama Belakang <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_lname"
                  name="c_lname"
                  v-model="transaction.lastName"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_companyname" class="text-black"
                  >Nama Perusahaan
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="c_companyname"
                  name="c_companyname"
                  v-model="transaction.company"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black"
                  >Alamat <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_address"
                  name="c_address"
                  placeholder="Tuliskan Alamat Anda"
                  v-model="transaction.address"
                />
              </div>
            </div>

            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Nama Komplek, Nama Jalan, Nomor rumah"
                v-model="transaction.state"
              />
            </div>

            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_state_country" class="text-black"
                  >State / Country <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_state_country"
                  name="c_state_country"
                />
              </div>
              <div class="col-md-6">
                <label for="c_postal_zip" class="text-black"
                  >Kode POS <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_postal_zip"
                  name="c_postal_zip"
                  v-model="transaction.postalCode"
                />
              </div>
            </div>

            <div class="form-group row mb-5">
              <div class="col-md-6">
                <label for="c_email_address" class="text-black"
                  >Email <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_email_address"
                  name="c_email_address"
                  v-model="transaction.email"
                />
              </div>
              <div class="col-md-6">
                <label for="c_phone" class="text-black"
                  >Phone <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_phone"
                  name="c_phone"
                  placeholder="Nomor HP"
                  v-model="transaction.phone"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="c_order_notes" class="text-black"
                >Catatan untuk penjual</label
              >
              <textarea
                name="c_order_notes"
                id="c_order_notes"
                cols="30"
                rows="5"
                class="form-control"
                placeholder="Tulis Catatan anda disini..."
                v-model="transaction.note"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row mb-5">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Detail Order</h2>
              <div class="p-3 p-lg-5 border bg-white">
                <table class="table site-block-order-table mb-5">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in product.dataProductCart">
                      <td>
                        {{ item.tb_product.product_name }}
                        <strong class="mx-2">x</strong> {{ item.quantity }}
                      </td>
                      <td>Rp.{{ item.tb_product.product_price }}</td>
                    </tr>
                    <tr>
                      <td class="text-black font-weight-bold">
                        <strong>Subtotal</strong>
                      </td>
                      <td class="text-black">Rp.{{ product.getTotal }}</td>
                    </tr>
                    <tr>
                      <td class="text-black font-weight-bold">
                        <strong>Total</strong>
                      </td>
                      <td class="text-black font-weight-bold">
                        <strong>Rp.{{ product.getTotal }} </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="border p-3 mb-3">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsebank"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsebank"
                      >Bank Transfer</a
                    >
                  </h3>

                  <div class="collapse" id="collapsebank">
                    <div class="py-2">
                      <p class="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="border p-3 mb-3">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsecheque"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsecheque"
                      >Paylater</a
                    >
                  </h3>

                  <div class="collapse" id="collapsecheque">
                    <div class="py-2">
                      <p class="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="border p-3 mb-5">
                  <h3 class="h6 mb-0">
                    <a
                      class="d-block"
                      data-bs-toggle="collapse"
                      href="#collapsepaypal"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsepaypal"
                      >Bayar ditempat</a
                    >
                  </h3>

                  <div class="collapse" id="collapsepaypal">
                    <div class="py-2">
                      <p class="mb-0">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won’t be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-black btn-lg py-3 btn-block"
                    @click="
                      transaction.createTransaction(product.dataProductCart)
                    "
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>

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
</template>

<style>
@import url("@/assets/css/bootstrap.min.css");

/* Pastikan import style yang diperlukan */
@import url("~/assets/css/style.css");
@import url("~/assets/css/tiny-slider.css");
</style>
