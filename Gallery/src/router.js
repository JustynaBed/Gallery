import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/Home.vue'
import FirstGallery from './components/FirstGallery.vue'
import SecondGallery from './components/SecondGallery.vue'
import ThirdGallery from './components/ThirdGallery.vue'


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/galeria1', component: FirstGallery },
        { path: '/galeria2', component: SecondGallery },
        { path: '/galeria3', component: ThirdGallery },
    ]
});

export default router