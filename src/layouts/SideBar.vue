<template>
  <nav
    class="navbar side-navbar d-none d-lg-flex flex-column justify-content-start"
  >
    <!-- Logo -->
    <router-link to="/">
      <img src="../assets/kuma-logo.png" class="side-logo my-5" alt="logo" />
    </router-link>
    <!-- Nav Item -->
    <ul class="navbar-nav mt-5">
      <router-link exact to="/">
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="#">首頁</a>
        </li>
      </router-link>
      <router-link exact to="/style">
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="#">風格</a>
        </li>
      </router-link>
      <router-link exact to="/color">
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="#">色系</a>
        </li>
      </router-link>
      <router-link exact to="/contact">
        <li class="nav-item">
          <a class="nav-link fw-bolder" href="#">聯絡我們</a>
        </li>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "SideBar",
};
</script>
<style lang="scss" scoped>
.side-navbar {
  width: 319px;
  height: 100vh;
  border-right: 1px solid #d7d6d6;
  .side-logo {
    width: 206px;
    height: 230px;
  }
  .navbar-nav {
    width: 100%;
    text-align: center;
  }
  .router-link-exact-active {
    .nav-item {
      .nav-link {
        color: #8751a0 !important;
      }
    }
  }
}
</style>
