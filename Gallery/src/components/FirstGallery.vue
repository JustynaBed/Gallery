<template>
    <div>

        <b-alert show variant="secondary"><h1>{{ msg }}</h1></b-alert>
        <p v-for="item in items">{{ item.title }}</p>

    </div>
</template>

<script>
    export default {
        name: 'firstGallery',
        data () {
            return {
                msg: 'Vue.js Photo Gallery',
                items: [
                    {title: 'Example1'},
                    {title: 'Example2'},
                    {title: 'Example3'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>