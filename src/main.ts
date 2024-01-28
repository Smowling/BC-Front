import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue';

import helpers from './helpers.js';

Vue.mixin({
  methods: {
    ...helpers
  }
});

const app = createApp(App)

app.use(router)

app.mount('#app')