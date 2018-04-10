<template>
    <div class="first_gallery">
        <h1>FIRST DAYS OF SPRING</h1>
        <div class="container">
            <div class="mx-auto row flower">
                <figure @click="showImage(image)" class="col-sm-6 col-md-4 col-lg-3 text-center" v-for="image in images">
                    <img class="img-fluid img-thumbnail center-block pointer" :src="image.src">
                    <p>{{image.title}}</p>
                </figure>
                <single-image :selectedImage="selectedImage" :isOpen="isOpen"></single-image>
            </div>
        </div>
    </div>
</template>

<script>
    import SingleImage from '../components/SingleImage.vue'
    import style from '../assets/css/firstGallery.css'

    export default {
        name: 'gallery',
        components: {SingleImage},
        methods: {
            showImage: function (image) {
                console.log("showImage", image)
                this.selectedImage = image
                this.isOpen = true
            }
        },
        data () {
            return {
                selectedImage: '',
                isOpen: false,
                images: [
                    {id:1, title: 'Img1', src: require("../assets/img/img2.jpg")},
                    {id:2, title: 'Img2', src: require("../assets/img/img3.jpg")},
                    {id:3, title: 'Img3', src: require("../assets/img/img4.jpg")},
                    {id:4, title: 'Img4', src: require("../assets/img/img5.jpg")},
                    {id:5, title: 'Img5', src: require("../assets/img/img2.jpg")},
                    {id:6, title: 'Img6', src: require("../assets/img/img6.jpg")},
                    {id:7, title: 'Img7', src: require("../assets/img/img2.jpg")},
                    {id:8, title: 'Img8', src: require("../assets/img/img7.jpg")}
                ]
            }
        }
    }
</script>