import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
console.log("Debug Mode:", import.meta.env.VITE_DEBUG_MODE);
