<script setup lang="ts">
const feedback = useFeedback();
definePageMeta({
  layout: "dashboard",
});
const route = useRouter();
</script>

<template>
  <!-- Start Header/Navigation -->
  <!-- End Header/Navigation -->
  <MainNavbar />
  <!-- Start Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Customer Service</h1>
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
          <h2 class="h3 mb-3 text-black">Form Komplain</h2>
          <div class="p-3 p-lg-5 border bg-white">
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
                  v-model="feedback.firtName"
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
                  v-model="feedback.lastName"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <label for="c_address" class="text-black"
                  >Nomor Invoice <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="c_address"
                  name="c_address"
                  placeholder="Hanya Angka"
                  v-model="feedback.invoiceNumber"
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
                  v-model="feedback.email"
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
                  v-model="feedback.phone"
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
                v-model="feedback.note"
              ></textarea>
            </div>
            <br />
            <div class="form-group">
              <button
                class="btn btn-black btn-lg py-3 btn-block"
                @click="feedback.insertFeedback"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- </form> -->
    </div>
  </div>

  <!-- Start Footer Section -->
  <footer class="footer-section">
    <div class="container relative">
      <div class="row g-5 mb-5">
        <div class="col-lg-4">
          <div class="mb-4 footer-logo-wrap">
            <a href="#" class="footer-logo"
              >Starindo Multi Industri<span>.</span></a
            >
          </div>
          <p class="mb-4">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>

          <ul class="list-unstyled custom-social">
            <li>
              <a href="#"><span class="fa fa-brands fa-facebook-f"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-twitter"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-instagram"></span></a>
            </li>
            <li>
              <a href="#"><span class="fa fa-brands fa-linkedin"></span></a>
            </li>
          </ul>
        </div>

        <div class="col-lg-8">
          <div class="row links-wrap">
            <div class="col-6 col-sm-6 col-md-3">
              <ul class="list-unstyled">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

            <div class="col-6 col-sm-6 col-md-3">
              <ul class="list-unstyled">
                <li><a href="#">Support</a></li>
                <li><a href="#">Knowledge base</a></li>
                <li><a href="#">Live chat</a></li>
              </ul>
            </div>

            <div class="col-6 col-sm-6 col-md-3">
              <ul class="list-unstyled">
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div class="col-6 col-sm-6 col-md-3">
              <ul class="list-unstyled">
                <li><a href="#">Nordic Chair</a></li>
                <li><a href="#">Kruzo Aero</a></li>
                <li><a href="#">Ergonomic Chair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-top copyright">
        <div class="row pt-4">
          <div class="col-lg-6">
            <p class="mb-2 text-center text-lg-start">
              Copyright &copy; date here All Rights Reserved. &mdash; Designed
              with love by <a href="https://untree.co">Untree.co</a> Distributed
              By <a hreff="https://themewagon.com">ThemeWagon</a>
              <!-- License information: https://untree.co/license/ -->
            </p>
          </div>

          <div class="col-lg-6 text-center text-lg-end">
            <ul class="list-unstyled d-inline-flex ms-auto">
              <li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer Section -->
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
