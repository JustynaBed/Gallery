<template>
  <div id="app" class="test">
    <menu-nav></menu-nav>
    <router-view></router-view>
    <Footer-view></Footer-view>
  </div>
</template>

<script>
    import Vue from 'vue'
    import MenuNav from './components/MenuNav/MenuNav.vue'
    import FooterView from './components/Footer/Footer.vue'

    export default {
        name: 'app',
        components: { MenuNav, FooterView}
    }
</script>

<style scoped>
.test {
    display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
