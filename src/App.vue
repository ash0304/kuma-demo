<template>
  <div id="app">
    <TopNavbar />
    <div class="container-fluid d-flex px-0">
      <!-- Side Navbar -->
      <SideBar />
      <!-- View Content  -->
      <div class="content">
        <Top-content />
        <!-- Router View -->
        <div class="customer-router-view">
          <router-view></router-view>
        </div>
        <!-- Footer -->
        <FooterContent />
      </div>
    </div>
    <!-- 全域彈窗 -->
    <CheckImgModal />
  </div>
</template>

<script>
import TopNavbar from "@/layouts/TopNavbar";
import SideBar from "@/layouts/SideBar";
import TopContent from "@/layouts/TopContent";
import FooterContent from "@/layouts/FooterContent";
import CheckImgModal from "@/components/CheckImgModal";

export default {
  name: "App",
  components: {
    TopNavbar,
    SideBar,
    TopContent,
    FooterContent,
    CheckImgModal,
  },
};
</script>

<style lang="scss">
#app {
  a {
    text-decoration: none;
    color: inherit;
  }
}
.content {
  /* 讓內容區域佔據剩餘的空間 */
  flex: 1;
  .customer-router-view {
    min-height: calc(100vh - 70px);
  }
}
</style>
