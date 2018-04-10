<template>
  <div id="app">
    <menu-nav></menu-nav>
    <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue'
    import MenuNav from './components/MenuNav.vue'

    export default {
        name: 'app',
        components: { MenuNav }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #040001;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
