<template>
    <div class="second_gallery">
        <h1>POLAROID PICTURE FRAME</h1>
        <div class="container-fluid">
            <div class="mx-auto row flower">
                <figure class="col-sm-6 col-md-4 col-lg-3 text-center" v-for="image in images">
                    <img class="img-fluid img-thumbnail center-block photo" :src="image.src">
                    <p>{{image.title}}</p>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    import style from '../assets/css/style.css'

    export default {
        data () {
            return {
                images: [
                    {id:1, title: 'Img1', src: require("../assets/img/img1.jpg")},
                    {id:2, title: 'Img2', src: require("../assets/img/img2.jpg")},
                    {id:3, title: 'Img3', src: require("../assets/img/img3.jpg")},
                    {id:4, title: 'Img4', src: require("../assets/img/img4.jpg")}
                ]
            }
        }
    }
</script>

<style>

</style>
