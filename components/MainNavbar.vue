<script setup>
const user = useSupabaseUser();
const router = useRouter();
function profile() {
  if (user.value) {
    router.push({ path: "/profile" });
  } else {
    router.push({ path: "/auth/login" });
  }
}
</script>
<template>
  <nav
    class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div class="container">
      <NuxtLink class="navbar-brand" to="/"
        >PT. Starindo Multi Industri<span>.</span></NuxtLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-link" to="/shop/shop">Shop</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-link" to="/customerservice/cs"
              >Customer Service</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="nav-link" to="/about">About us</NuxtLink>
          </li>
        </ul>

        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a class="nav-link" @click="profile">
              <img src="@/assets/images/user.svg" />
            </a>
          </li>
          <li>
            <NuxtLink class="nav-link" to="/checkout/chart">
              <img src="@/assets/images/cart.svg" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url("@/assets/css/bootstrap.min.css");
@import url("@/assets/css/style.css");
@import url("@/assets/css/tiny-slider.css");
</style>
