<template>
    <div class="third_gallery">
        <div class="container">
            <h2>MEMORIES</h2>
            <div class="mx-auto row flower">
                <div class="col-sm-8 col-md-4 card memoryImg" v-for="image in images">
                    <span></span>
                    <img class="card-img-top" :src="image.src">
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
    import style from '../assets/css/style.css'

    const currentDate = new Date();

    export default {
        components: {
        },
        data () {
            return {
                msg: currentDate.getDate() + "." + '0' + (currentDate.getMonth()+1) + "." + (currentDate.getFullYear()-10),
                images: [
                    {id:1, title: 'One1', src: require("../assets/img/img8.jpg")},
                    {id:2, title: 'One2', src: require("../assets/img/img9.jpg")},
                    {id:3, title: 'One3', src: require("../assets/img/img10.jpg")},
                ]
            }
        }
    }
</script>