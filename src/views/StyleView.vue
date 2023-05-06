<template>
  <div class="style">
    <div class="container">
      <!-- Tab -->
      <Tab-selecter :category="getStyleFilterList" class="my-5" />
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
  name: "StyleView",
  components: {
    ProjectCard,
    TabSelecter,
  },
  computed: {
    ...mapGetters(["getFilteredProjectList", "getStyleFilterList"]),
  },
  mounted() {
    this.$store.dispatch("filterProject", "-1");
  },
};
</script>
