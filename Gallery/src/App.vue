<template>
  <div id="app">
    <menu-nav></menu-nav>
    <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue'
    import MenuNav from './components/MenuNav/MenuNav.vue'

    export default {
        name: 'app',
        components: { MenuNav }
    }
</script>
