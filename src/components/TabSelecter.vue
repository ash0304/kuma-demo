<template>
  <div>
    <ul class="nav justify-content-center">
      <li
        v-for="(item, index) in category"
        :key="index"
        class="nav-item"
        @click="selectTab(item, index)"
      >
        <a
          class="nav-link fw-bolder"
          :class="{ active: currentTab === index }"
          href="#"
          >{{ item.label }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TabSelecter",
  props: {
    category: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    selectTab(item, index) {
      this.currentTab = index;
      this.$store.dispatch("filterProject", item.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-link {
  border-bottom: 1px solid #d7d6d6;
  &.active {
    position: relative;
    color: #8751a0 !important;
  }
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #8751a0;
}
</style>
