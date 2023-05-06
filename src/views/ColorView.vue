<template>
  <div class="color">
    <div class="container">
      <!-- Tab -->
      <Tab-selecter :category="getColorFilterList" class="my-5" />
      <!-- Project -->
      <div class="row">
        <div
          v-for="(item, index) in getFilteredProjectList"
          :key="index"
          class="col-lg-4 col-md-6 col-12 mb-3"
        >
          <ProjectCard :card-info="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectCard";
import TabSelecter from "@/components/TabSelecter.vue";

export default {
  name: "ColorView",
  components: {
    ProjectCard,
    TabSelecter,
  },
  computed: {
    ...mapGetters(["getFilteredProjectList", "getColorFilterList"]),
  },
  mounted() {
    this.$store.dispatch("filterProject", "-1");
  },
};
</script>
