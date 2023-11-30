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
                                <h1>Shop</h1>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            
                        </div>
                    </div>
                </div>
            </div>
        <!-- End Hero Section -->



        <div class="untree_co-section product-section before-footer-section">
            <div class="container">
                <div class="row">

                    <!-- Start Column 1 -->
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <a class="product-item" href="#">
                                <img src="~/assets/images/1.png" class="img-fluid product-thumbnail">
                                    <h3 class="product-title">
                                        Nordic Chair
                                    </h3>
                                <strong class="product-price">$50.00</strong>

                                <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                                </span>
                            </a>
                        </div> 
                    <!-- End Column 1 -->
                        
                    <!-- Start Column 2 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/2.png" class="img-fluid product-thumbnail">
                                <h3 class="product-title">
                                    Nordic Chair
                                </h3>
                            <strong class="product-price">$50.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div> 
                    <!-- End Column 2 -->

                    <!-- Start Column 3 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/3.png" class="img-fluid product-thumbnail">
                                <h3 class="product-title">
                                    Kruzo Aero Chair
                                </h3>
                            <strong class="product-price">$78.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div>
                    <!-- End Column 3 -->

                    <!-- Start Column 4 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/4.png" class="img-fluid product-thumbnail">
                            <h3 class="product-title">Ergonomic Chair</h3>
                            <strong class="product-price">$43.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div>
                    <!-- End Column 4 -->


                    <!-- Start Column 1 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/5.png" class="img-fluid product-thumbnail">
                            <h3 class="product-title">Nordic Chair</h3>
                            <strong class="product-price">$50.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div> 
                    <!-- End Column 1 -->
                        
                    <!-- Start Column 2 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/6.png" class="img-fluid product-thumbnail">
                            <h3 class="product-title">Nordic Chair</h3>
                            <strong class="product-price">$50.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div> 
                    <!-- End Column 2 -->

                    <!-- Start Column 3 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/7.png" class="img-fluid product-thumbnail">
                            <h3 class="product-title">Kruzo Aero Chair</h3>
                            <strong class="product-price">$78.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div>
                    <!-- End Column 3 -->

                    <!-- Start Column 4 -->
                    <div class="col-12 col-md-4 col-lg-3 mb-5">
                        <a class="product-item" href="#">
                            <img src="~/assets/images/8.png" class="img-fluid product-thumbnail">
                            <h3 class="product-title">Ergonomic Chair</h3>
                            <strong class="product-price">$43.00</strong>

                            <span class="icon-cross">
                                <img src="~/assets/images/cross.svg" class="img-fluid">
                            </span>
                        </a>
                    </div>
                    <!-- End Column 4 -->

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

        </template>
        <script setup lang="ts">
        definePageMeta({
          layout: "dashboard",
        });
        const product = useProduct();
        onMounted(() => {
          product.getListProductDashboard();
        });
        </script>


        <style>

        @import url("@/assets/css/bootstrap.min.css");

        /* Pastikan import style yang diperlukan */
        @import url("~/assets/css/style.css");
        @import url("~/assets/css/tiny-slider.css");
        </style>