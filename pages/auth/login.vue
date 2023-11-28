<script setup lang="ts">
const auth = useAuth();
</script>
<template>
  <div id="main-wrapper" class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="card border-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="mb-5">
                    <h3 class="h4 font-weight-bold text-theme">Login</h3>
                  </div>

                  <h6 class="h5 mb-0">Welcome back!</h6>
                  <p class="text-muted mt-2 mb-5">
                    Enter your email address and password to access admin panel.
                  </p>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      v-model="auth.email"
                    />
                  </div>
                  <div class="form-group mb-5">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      v-model="auth.password"
                    />
                  </div>
                  <button @click="auth.signInWithEmail" class="btn btn-theme">
                    Login
                  </button>
                  <a href="#l" class="forgot-link float-right text-primary"
                    >Forgot password?</a
                  >
                </div>
              </div>

              <div class="col-lg-6 d-none d-lg-inline-block">
                <div class="account-block rounded-right">
                  <div class="overlay rounded-right"></div>
                  <div class="account-testimonial">
                    <h4 class="text-white mb-4">This beautiful theme yours!</h4>
                    <p class="lead text-white">
                      "Best investment i made for a long time. Can only
                      recommend it for other users."
                    </p>
                    <p>- Admin User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <p class="text-muted text-center mt-3 mb-0">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-primary ml-1"
            >register</NuxtLink
          >
        </p>

        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- Row -->
  </div>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");

main-wrapper {
  margin-top: 20px;
  background: #f6f9fc;
}
.account-block {
  padding: 0;
  background-image: url(https://bootdey.com/img/Content/bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
}
.account-block .overlay {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
  text-align: center;
  color: #fff;
  position: absolute;
  margin: 0 auto;
  padding: 0 1.75rem;
  bottom: 3rem;
  left: 0;
  right: 0;
}

.text-theme {
  color: #5369f8 !important;
}

.btn-theme {
  background-color: #5369f8;
  border-color: #5369f8;
  color: #fff;
}
</style>
