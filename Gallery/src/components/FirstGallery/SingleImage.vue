<template>
    <div>
        <b-modal ref="myModalRef" hide-footer title="FIRST DAYS OF SPRING">
            <div class="d-block text-center">
                <img :src="selectedImage.src" style="width: 80%">
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-modal>
    </div>
</template>

<script>
    import style from '../SecondGallery/secondGallery.css'

    export default {
        name: 'singleImage',
        props: ["selectedImage", "isOpen"],
        methods: {
            showModal () {
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide()
                this.isOpen = false
            }
        },
        updated() {
            if (this.isOpen) {
                this.$refs.myModalRef.show()
            }
        }
    }
</script>