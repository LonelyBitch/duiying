<template>
    <div class="imgs-warper">
        <img ref="imgShow2" :class="howShow ? 'isHeight' : 'isWidth'" :src="this.src">
    </div>
</template>

<script>
    export default {
        name: "itemImage",
        props: {
            src: String
        },

        methods: {

            showImage() {
                console.log(this.$refs.imgShow2.naturalWidth)
                if (this.$refs.imgShow2.naturalWidth / this.$refs.imgShow2.naturalHeight > 1) {
                    this.howShow = true
                } else {
                    this.howShow = false
                }
            }
        },

        data() {
            return {
                howShow: false,
            }
        },

        mounted() {
            this.showImage()
        }
    }
</script>

<style scoped>
    .imgs-warper {
        display: flex;
        float: left;
        overflow: hidden;
        margin-left: 5px;
        margin-top: 5px;
        width: 88px;
        height: 88px;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        text-align: center;

        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;

    }

    .isHeight {
        width: auto;
        height: 88px;
    }

    .isWidth {
        height: auto;
        width: 88px;

    }


</style>