import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import AppLoader from './components/AppLoader.vue'

const app = createApp(App)

app.component('AppLoader', AppLoader)

app.mount('#app')
