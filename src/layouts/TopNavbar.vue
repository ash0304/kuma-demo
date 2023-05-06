<template>
  <div>
    <!-- Top navbar -->
    <nav class="navbar navbar-transparent top-navbar d-lg-none px-4">
      <div class="container-fluid px-0">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="../assets/header-kuma-logo.png"
            class="top-logo"
            alt="logo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <!-- Top navbar expend -->
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <ul class="navbar-nav text-white justify-content-end flex-grow-1 pe-3">
          <router-link exact to="/">
            <li class="nav-item">
              <a class="nav-link" href="#">首頁</a>
            </li>
          </router-link>
          <router-link exact to="/style">
            <li class="nav-item">
              <a class="nav-link" href="#">風格</a>
            </li>
          </router-link>
          <router-link exact to="/color">
            <li class="nav-item">
              <a class="nav-link" href="#">色系</a>
            </li>
          </router-link>
          <router-link exact to="/contact">
            <li class="nav-item">
              <a class="nav-link" href="#">聯絡我們</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNavbar",
};
</script>
<style lang="scss" scoped>
.top-navbar {
  height: 128px;
  .top-logo {
    width: 88px;
    height: 98px;
  }
}
.collapse {
  .nav-item {
    color: #6b6868;
  }
  .router-link-exact-active {
    .nav-item {
      .nav-link {
        color: #fff !important;
      }
    }
  }
}
</style>
