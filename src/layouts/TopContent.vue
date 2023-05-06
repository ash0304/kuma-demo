<template>
  <div
    v-if="currentRouteName !== 'home'"
    class="top-content d-flex align-items-center justify-content-between p-5"
  >
    <h5 class="fw-bolder">{{ getRouteMap[currentRouteName] }}</h5>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/">首頁</a>
        </li>
        <li class="breadcrumb-item active">
          {{ getRouteMap[currentRouteName] }}
        </li>
        <li
          v-if="getRouteMap[currentRouteName] === '作品'"
          class="breadcrumb-item active"
        >
          {{ `Type-${currentPageQuery}` }}
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TopContent",
  computed: {
    ...mapGetters(["getRouteMap"]),
    currentRouteName() {
      return this.$route.name;
    },
    currentPageQuery() {
      return this.$route.query.id;
    },
  },
};
</script>
<style lang="scss" scoped>
.top-content {
  height: 135px;
  background-color: #f8f9fa;
}
</style>
