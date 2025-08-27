import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { useTaskStore } from "./store/taskStore";
import "./index.css"; // Tailwind

const app = createApp(App);

app.use(createPinia());
app.use(router);

const taskStore = useTaskStore();
taskStore.init();

app.mount("#app");