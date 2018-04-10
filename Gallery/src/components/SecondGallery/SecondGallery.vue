<template>
    <div class="second_gallery">
        <h1>POLAROID PICTURE FRAME</h1>
        <div class="container-fluid">
            <div class="mx-auto row flower">
                <figure class="col-sm-6 col-md-4 col-lg-3 text-center" v-for="image in images">
                    <img class="img-fluid img-thumbnail center-block photo" :class="image.transform" :src="require(`../../assets/img/${image.src}`)">
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
                    {id:1, transform: "clockWise", title: 'Img1', src: "img1.jpg"},
                    {id:2, transform: "clockWise", title: 'Img2', src: "img2.jpg"},
                    {id:3, transform: "counterClockWise", title: 'Img3', src: "img3.jpg"},
                    {id:4, transform: "clockWise", title: 'Img4', src: "img4.jpg"}
                ]
            }
        }
    }
</script>