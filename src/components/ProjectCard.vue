<template>
  <div class="card">
    <div class="card-img-top-box">
      <!-- img -->
      <img :src="CardInfo.url" class="card-img-top" alt="..." />
      <!-- overlay -->
      <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div class="card-img-overlay-title text-white text-center my-1">
          {{ `Type-${CardInfo.id}` }}
        </div>
        <div class="card-img-overlay-tag text-white text-center my-1">
          <span v-for="(i, idx) in CardInfo.tag" :key="idx" class="mx-1">{{
            transformTagName(i)
          }}</span>
        </div>
        <div class="card-action d-flex justify-content-center text-white px-4">
          <i class="fa fa-link mx-4" @click="directToProject(CardInfo)"></i>
          <i class="fa fa-search-plus mx-4" @click="toggleDetail(CardInfo)"></i>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ `Type-${CardInfo.id}` }}</h5>
      <p class="card-text fs-6">
        {{ CardInfo.descript }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectCard",
  props: {
    CardInfo: {
      type: Object,
      default: () => {},
    },
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
  methods: {
    transformTagName(key) {
      return this.tagsMap[key];
    },
    directToProject(item) {
      this.$router.push({
        path: "/project",
        query: { id: item.id },
      });
    },
    toggleDetail(item) {
      console.log(item);
      this.$store.dispatch("setModal", { show: true, currentObj: item });
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  border: none;
  .card-img-top-box {
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    .card-img-overlay {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(131, 61, 164, 0.5); /* 遮罩顏色和透明度 */
      opacity: 0;
      transition: opacity 0.3s ease; /* 過渡效果 */
    }
    .card-img-top {
      width: 100%;
      transition: transform 0.2s ease-in-out;
    }
    &:hover {
      .card-img-top {
        transform: scale(1.2);
      }
      .card-img-overlay {
        opacity: 1;
      }
    }
  }
}
</style>
