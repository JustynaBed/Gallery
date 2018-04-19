<template>
    <div class="second-gallery">
        <h1>POLAROID PICTURE FRAME</h1>
        <div class="container-fluid">
            <div class="mx-auto row flower">
                <figure class="col-sm-6 col-md-4 col-lg-3 text-center" v-for="image in images">
                    <img class="img-fluid img-thumbnail center-block img-polaroid"
                         :class="image.transform"
                         :src="require(`../../assets/img/${image.src}`)"
                    >
                    <p>{{image.title}}</p>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    import style from './secondGallery.css'

    export default {
        data () {
            return {
                images: [
                    {id:1, transform: "clockwise", title: 'Img1', src: "img1.jpg"},
                    {id:2, transform: "clockwise", title: 'Img2', src: "img2.jpg"},
                    {id:3, transform: "counter-clockwise", title: 'Img3', src: "img3.jpg"},
                    {id:4, transform: "clockwise", title: 'Img4', src: "img4.jpg"}
                ]
            }
        }
    }
</script>