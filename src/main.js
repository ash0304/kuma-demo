import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// bootsrap引入
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// 引入font-awesome 4.7 css
import "font-awesome/css/font-awesome.min.css";
// 引入animate.css
import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
