import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 比對Breadcrumb
    RouteMap: {
      home: "首頁",
      style: "風格",
      color: "色系",
      contact: "聯絡我們",
      project: "作品",
    },
    // 原始展示表
    ProjectList: [
      {
        id: 0,
        tag: ["1", "a"],
        url: "https://picsum.photos/seed/1/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 1,
        tag: ["1", "b"],
        url: "https://picsum.photos/seed/2/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 2,
        tag: ["2", "3", "4", "c"],
        url: "https://picsum.photos/seed/3/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 3,
        tag: ["4", "a", "b", "e"],
        url: "https://picsum.photos/seed/4/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 4,
        tag: ["5", "6", "d", "e"],
        url: "https://picsum.photos/seed/5/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 5,
        tag: ["3", "6", "b", "c"],
        url: "https://picsum.photos/seed/6/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 6,
        tag: ["3", "6", "a", "e"],
        url: "https://picsum.photos/seed/7/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 7,
        tag: ["2", "8", "e", "g"],
        url: "https://picsum.photos/seed/8/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
      {
        id: 8,
        tag: ["1", "7", "f", "g"],
        url: "https://picsum.photos/seed/9/980/600",
        descript:
          "首页廣告轮播圖片尺寸依設計為主 导览列/网页字型：预设系统字型 以上两点如有特殊需求请告知...",
      },
    ],
    // 篩選後展示表
    FilteredProjectList: [],
    // 風格頁篩選目錄
    StyleFilterList: [
      {
        label: "全部",
        value: "-1",
      },
      {
        label: "華麗",
        value: "a",
      },
      {
        label: "復古",
        value: "b",
      },
      {
        label: "小清新",
        value: "c",
      },
      {
        label: "扁平化",
        value: "d",
      },
      {
        label: "極簡",
        value: "e",
      },
      {
        label: "童趣",
        value: "f",
      },
      {
        label: "質感",
        value: "g",
      },
    ],
    // 色系頁篩選目錄
    ColorFilterList: [
      {
        label: "全部",
        value: "-1",
      },
      {
        label: "灰",
        value: "1",
      },
      {
        label: "白",
        value: "2",
      },
      {
        label: "紫",
        value: "3",
      },
      {
        label: "紅",
        value: "4",
      },
      {
        label: "綠",
        value: "5",
      },
      {
        label: "藍",
        value: "6",
      },
      {
        label: "黃",
        value: "7",
      },
      {
        label: "黑",
        value: "8",
      },
    ],
    // 圖片檢視彈窗開關
    showModal: false,
    currentObj: null,
  },
  getters: {
    getRouteMap: (state) => state.RouteMap,
    getProjectList: (state) => state.ProjectList,
    getFilteredProjectList: (state) => state.FilteredProjectList,
    getStyleFilterList: (state) => state.StyleFilterList,
    getColorFilterList: (state) => state.ColorFilterList,
  },
  mutations: {
    // 篩選展示表
    FILTER_PROJECT(state, payload) {
      state.FilteredProjectList = payload;
    },
    // 彈窗
    SET_MODAL(state, payload) {
      state.showModal = payload.show;
      state.currentObj = payload.currentObj;
    },
  },
  actions: {
    // 透過條件篩選展示表
    filterProject({ state, commit }, params) {
      if (params === "-1") {
        commit("FILTER_PROJECT", state.ProjectList);
      } else {
        const tempArr = [];
        state.ProjectList.forEach((item) => {
          if (item.tag.includes(params)) {
            tempArr.push(item);
          }
        });
        commit("FILTER_PROJECT", tempArr);
      }
    },
    // 觸發彈窗開關
    setModal({ commit }, payload) {
      commit("SET_MODAL", payload);
    },
  },
  modules: {},
});
