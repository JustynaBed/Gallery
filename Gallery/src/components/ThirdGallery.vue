<template>
    <div class="third_gallery">
        <h1>MEMORIES</h1>
        <div class="container">
            <div class="mx-auto row flower">
                <div class="col-sm-8 col-md-4 card memoryImg" v-for="image in images">
                    <span></span>
                    <img class="card-img-top" :src="require(`../assets/img/${image.src}`)">
                    <div class="card-body">
                        <h5 class="card-title">{{ msg }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import style from '../assets/css/thirdGallery.css'

    const currentDate = new Date();

    export default {
        components: {
        },
        data () {
            return {
                msg: (currentDate.toLocaleDateString()),
                images: [
                    {id:1, title: 'One1', src: "img8.jpg"},
                    {id:2, title: 'One2', src: "img9.jpg"},
                    {id:3, title: 'One3', src: "img10.jpg"},
                ]
            }
        }
    }
</script>