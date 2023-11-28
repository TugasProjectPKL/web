<script setup lang="ts">
import { type Database } from "../database.types";
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const supabase = useSupabaseClient<Database>();
const { data: products } = await useAsyncData("product", async () => {
  let { data: tb_product, error } = await supabase
    .from("tb_product")
    .select("*")
    .limit(3);
  return tb_product;
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
            <h1>Modern Tape Industri Packaging</h1>
            <p class="mb-4">
              Pita perekat yang kami produksi memiliki kualitas yang bagus,
              tebal, kuat, dan di jamin menempel! Di Starindo, kami percaya pada
              produk berkualitas tinggi namun hemat biaya,dan hanya memilih
              untuk memasang merek kami pada produk yang memenuhi standar
              pengembangan yang ketat.
            </p>
            <p>
              <a href="" class="btn btn-secondary me-2">Shop Now</a
              ><a href="#" class="btn btn-white-outline">Explore</a>
            </p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="hero-img-wrap">
            <img
              src="@/assets/images/bg1.png"
              class="img-fluid"
              style="width: 100%; height: auto; object-fit: cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero Section -->

  <!-- Start Product Section -->
  <div class="product-section">
    <div class="container">
      <div class="row">
        <!-- Start Column 1 -->
        <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
          <p class="mb-4">
            Produk best seller kami memukau pelanggan dengan desain inovatif,
            kualitas premium, dan tampilan yang memikat.
          </p>
          <p><a href="shop.html" class="btn">Explore</a></p>
        </div>
        <!-- End Column 1 -->

        <!-- Start Column 4 -->
        <ItemProductHome
          v-for="item in products"
          :image="item.product_image ?? ''"
          :name="item.product_name ?? ''"
          :price="item.product_price ?? 0"
        />
        <!-- End Column 4 -->
      </div>
    </div>
  </div>
  <!-- End Product Section -->

  <!-- Start Why Choose Us Section -->
  <div class="why-choose-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <h2 class="section-title">Why Choose Us</h2>
          <p>
            Kami menjaga kualitas dan berbagai aspek agar consument puas pada
            product kami.
          </p>

          <div class="row my-5">
            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img
                    src="@/assets/images/truck.svg"
                    alt="Image"
                    class="imf-fluid"
                  />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>Kami memastikan pesanan anda sampai tepat waktu .</p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img
                    src="@/assets/images/bag.svg"
                    alt="Image"
                    class="imf-fluid"
                  />
                </div>
                <h3>Easy to Shop</h3>
                <p>
                  Kami membuat produk kami mudah untuk didapatkan dan bisa
                  dipesan kapanpun dan dimanapun.
                </p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img
                    src="@/assets/images/support.svg"
                    alt="Image"
                    class="imf-fluid"
                  />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Kami menggunakan mesin dan bahan dengan kualitas terbaik untuk
                  menjamin kualitas produk dan kepuasan pelanggan.
                </p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img
                    src="@/assets/images/return.svg"
                    alt="Image"
                    class="imf-fluid"
                  />
                </div>
                <h3>Hassle Free Returns</h3>
                <p>
                  Jika ada hal yang belum jelas baik untuk masalah produk,
                  pembelian, ataupun bisnis, konsultasikan apa yang belum anda
                  pahami kepada kami. Tim kami siap membantu anda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="img-wrap">
            <img
              src="@/assets/images/image1.jpg"
              alt="Image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Why Choose Us Section -->

  <!-- Start We Help Section -->
  <div class="we-help-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="imgs-grid">
            <div class="grid grid-1">
              <img src="@/assets/images/image3.jpg" alt="Untree.co" />
            </div>
            <div class="grid grid-2">
              <img src="@/assets/images/image2.webp" alt="Untree.co" />
            </div>
            <div class="grid grid-3">
              <img src="@/assets/images/image4.jpg" alt="Untree.co" />
            </div>
          </div>
        </div>
        <div class="col-lg-5 ps-lg-5">
          <h2 class="section-title mb-4">
            We Help You to Product Quality duct tape
          </h2>
          <p>
            Dengan pengalaman lebih dari 30 tahun yang kami miliki di industri
            pengemasan, kami berhasil menciptakan budaya manufaktur yang
            inovatif, sehingga memungkingkan kami untuk mencapai efisiensi
            terbesar yang mendorong keunggulan kompetitif kami.
          </p>

          <ul class="list-unstyled custom-list my-4">
            <li>Cara Pesan Mudah</li>
            <li>Pesanan Datang Tepat Waktu</li>
            <li>Kualitas Product Terjamin</li>
            <li>Harga Best Seller</li>
          </ul>
          <p><a herf="#" class="btn">Explore</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- End We Help Section -->

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
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
