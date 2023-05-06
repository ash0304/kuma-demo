<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <!-- img -->
        <div class="col-md-9 col-12">
          <img :src="targetProject()?.url" class="project-view-img" />
        </div>
        <!-- info -->
        <div class="col-md-3 col-12">
          <div class="d-flex my-2">
            <i
              class="fa fa-arrow-left custom-arrow mx-2"
              :class="{ disable: currentPageQuery === 0 }"
              @click="changeProject(-1)"
            ></i>
            <i
              class="fa fa-arrow-right custom-arrow mx-2"
              :class="{
                disable: currentPageQuery === getProjectList.length - 1,
              }"
              @click="changeProject(1)"
            ></i>
          </div>
          <h3 class="mb-4">{{ `Type-${targetProject()?.id}` }}</h3>
          <hr class="hr-light" />
          <div class="my-3">{{ targetProject()?.descript }}</div>
          <div class="d-flex align-items-center my-3">
            <i class="fa fa-folder-o mx-2"></i>
            <span>Tags</span>
          </div>
          <div>
            <span
              v-for="(i, idx) in targetProject()?.tag"
              :key="idx"
              class="mx-1"
              >{{ transformTagName(i) }}</span
            >
          </div>
          <hr class="hr-light" />
        </div>
      </div>
      <h3 class="my-4">Related Items</h3>
      <div class="row">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="col-lg-3 col-md-6 col-12 mb-3 p-2"
        >
          <ProjectCard
            :card-info="
              getProjectList[
                Math.floor(Math.random() * (getProjectList.length - 1))
              ]
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "ProjectView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      tagsMap: {
        1: "灰",
        2: "白",
        3: "紫",
        4: "洪",
        5: "綠",
        6: "藍",
        7: "黃",
        8: "黑",
        a: "華麗",
        b: "復古",
        c: "小清新",
        d: "扁平化",
        e: "極簡",
        f: "童趣",
        g: "質感",
      },
    };
  },
  computed: {
    ...mapGetters(["getProjectList"]),
    currentPageQuery() {
      return this.$route.query.id;
    },
  },
  methods: {
    transformTagName(key) {
      return this.tagsMap[key];
    },
    targetProject() {
      const temp = this.getProjectList.filter(
        (i) => i.id == this.currentPageQuery
      );
      return temp ? temp[0] : {};
    },
    changeProject(flag) {
      const PageIndex =
        flag > 0
          ? Number(this.currentPageQuery) + 1
          : Number(this.currentPageQuery) - 1;
      if (PageIndex >= 0) {
        // 處理翻頁目標
        const targetPage = this.getProjectList.filter(
          (i) => i.id === PageIndex
        )[0].id;
        this.$router.push({
          name: "project",
          query: { id: targetPage },
        });
      } else {
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.project-view-img {
  width: 100%;
  height: 100%;
}
.custom-arrow {
  cursor: pointer;
  font-size: 48px;
  &.disable {
    color: gray;
    pointer-events: none;
  }
}
</style>
