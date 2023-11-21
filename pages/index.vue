<script setup lang="ts">
definePageMeta({
  layout:'dashboard'
})
const route = useRoute()
</script>

<template>
  <!-- Start Header/Navigation -->
  <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
  <a class="navbar-brand" href="index.html">PT. Starindo Multi Industri<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li><a class="nav-link" href="shop.html">Shop</a></li>
      <li><a class="nav-link" href="shop.html">Customer Service</a></li>
      <li><a class="nav-link" href="about.html">About us</a></li>
    </ul>

    <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a class="nav-link" href="#"><img src="@/assets/images/user.svg"></a></li>
      <li><a class="nav-link" href="cart.html"><img src="@/assets/images/cart.svg"></a></li>
    </ul>
  </div>
</div>
  
</nav>
<!-- End Header/Navigation -->

<!-- Start Hero Section -->
<div class="hero">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-5">
        <div class="intro-excerpt">
          <h1>Modern Tape Industri Packaging</H1>
          <p class="mb-4">Pita perekat yang kami produksi memiliki kualitas yang bagus, tebal, kuat, dan di jamin menempel! Di Starindo, kami percaya pada produk berkualitas tinggi namun hemat biaya,dan hanya memilih untuk memasang merek kami pada produk yang memenuhi standar pengembangan yang ketat. </p>
          <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="hero-img-wrap">
          <img src="@/assets/images/bg1.png" class="img-fluid" style="width: 100%; height: auto; object-fit: cover;">
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
      <p class="mb-4">Produk best seller kami memukau pelanggan dengan desain inovatif, kualitas premium, dan tampilan yang memikat. </p>
      <p><a href="shop.html" class="btn">Explore</a></p>
    </div> 
    <!-- End Column 1 -->

    <!-- Start Column 2 -->
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="@/assets/images/opptape.png" class="img-fluid product-thumbnail">
        <h3 class="product-title">Opp Tape</h3>
        <strong class="product-price">Rp 250.000/Dus</strong>

        <span class="icon-cross">
          <img src="@/assets/images/cross.svg" class="img-fluid">
        </span>
      </a>
    </div> 
    <!-- End Column 2 -->

    <!-- Start Column 3 -->
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="@/assets/images/krafttape.png" class="img-fluid product-thumbnail">
        <h3 class="product-title">Kraft tape</h3>
        <strong class="product-price">Rp 310.000/Dus</strong>

        <span class="icon-cross">
          <img src="@/assets/images/cross.svg" class="img-fluid">
        </span>
      </a>
    </div>
    <!-- End Column 3 -->

    <!-- Start Column 4 -->
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="@/assets/images/clothtape.png" class="img-fluid product-thumbnail">
        <h3 class="product-title">Cloth tape</h3>
        <strong class="product-price">Rp 365.000/Dus</strong>

        <span class="icon-cross">
          <img src="@/assets/images/cross.svg" class="img-fluid">
        </span>
      </a>
    </div>
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
      <p>Kami menjaga kualitas dan berbagai aspek agar consument puas pada product kami.</p>

      <div class="row my-5">
        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="@/assets/images/truck.svg" alt="Image" class="imf-fluid">
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>Kami memastikan pesanan anda sampai tepat waktu .</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="@/assets/images/bag.svg" alt="Image" class="imf-fluid">
            </div>
            <h3>Easy to Shop</h3>
            <p>Kami membuat produk kami mudah untuk didapatkan dan bisa dipesan kapanpun dan dimanapun. </p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="@/assets/images/support.svg" alt="Image" class="imf-fluid">
            </div>
            <h3>24/7 Support</h3>
            <p>Kami menggunakan mesin dan bahan dengan kualitas terbaik untuk menjamin kualitas produk dan kepuasan pelanggan.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="@/assets/images/return.svg" alt="Image" class="imf-fluid">
            </div>
            <h3>Hassle Free Returns</h3>
            <p>Jika ada hal yang belum jelas baik untuk masalah produk, pembelian, ataupun bisnis, konsultasikan apa yang belum anda pahami kepada kami. Tim kami siap membantu anda.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="col-lg-5">
      <div class="img-wrap">
        <img src="@/assets/images/image1.jpg" alt="Image" class="img-fluid">
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
        <div class="grid grid-1"><img src="@/assets/images/image3.jpg" alt="Untree.co"></div>
        <div class="grid grid-2"><img src="@/assets/images/image2.webp" alt="Untree.co"></div>
        <div class="grid grid-3"><img src="@/assets/images/image4.jpg" alt="Untree.co"></div>
        
      </div>
    </div>
    <div class="col-lg-5 ps-lg-5">
      <h2 class="section-title mb-4">We Help You to Product Quality duct tape</h2>
      <p>Dengan pengalaman lebih dari 30 tahun yang kami miliki di industri pengemasan, kami berhasil menciptakan budaya manufaktur yang inovatif, sehingga memungkingkan kami untuk mencapai efisiensi terbesar yang mendorong keunggulan kompetitif kami.</p>

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
<footer class="footer-section">
<div class="container relative">

  <div class="sofa-img">
    <img src="@/assets/images/people.png" alt="Image" class="img-fluid">
  </div>

  <div class="row">
    <div class="col-lg-8">
      <div class="subscription-form">
        <h3 class="d-flex align-items-center"><span class="me-1"><img src="@/assets/images/envelope-outline.svg" alt="Image" class="img-fluid"></span><span>Subscribe to Newsletter</span></h3>

        <form action="#" class="row g-3">
          <div class="col-auto">
            <input type="text" class="form-control" placeholder="Enter your name">
          </div>
          <div class="col-auto">
            <input type="email" class="form-control" placeholder="Enter your email">
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

  <div class="row g-5 mb-5">
    <div class="col-lg-4">
      <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">PT. Starindo Multi Industri<span>.</span></a></div>
      <p class="mb-4">Pita perekat yang kami produksi memiliki kualitas yang bagus, tebal, kuat, dan di jamin menempel! Di Starindo, kami percaya pada produk berkualitas tinggi namun hemat biaya,dan hanya memilih untuk memasang merek kami pada produk yang memenuhi standar pengembangan yang ketat.</p>

      <ul class="list-unstyled custom-social">
        <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
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
        <p class="mb-2 text-center text-lg-start">Copyright &copy; date here All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  <!-- License information: https://untree.co/license/ -->
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