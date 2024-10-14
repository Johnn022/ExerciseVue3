// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import './assets/main.css'


import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/pages/LoginPage.vue';
import RegisterPage from './components/pages/RegisterPage.vue';
import DashboardPage from './components/pages/DashboardPage.vue';
import OfferPage from './components/pages/OfferPage.vue';
import HomePage from './components/pages/HomePage.vue';
  
axios.defaults.baseURL = "https://mock-api.binaryboxtuts.com/";//process.env.VUE_APP_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = "binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt";//process.env.VUE_APP_API_KEY;
  return config;
});
  
  
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/offer', component: OfferPage },
    { path: '/home', component: HomePage },
  ],
});
  
createApp(App).use(router).mount('#app');
