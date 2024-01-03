import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index";
// import demo from "../src/pages/home/demo.vue";
const app = createApp(App);

// type ProTableInstance =  InstanceType<typeof demo>;
// console.log("type", type);

app.use(router).mount("#app");
