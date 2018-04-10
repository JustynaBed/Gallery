import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/Home.vue'
import FirstGallery from './components/FirstGallery.vue'


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/galeria1', component: FirstGallery },
    ]
});

export default router