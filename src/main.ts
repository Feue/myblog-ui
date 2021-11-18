import router from "@/router/index";
import store from "@/store/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
