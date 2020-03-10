<template>
    <div class="item-content">
        <div class="item-img-warper" v-show="this.ifshow"  @click="handleShowGallary">
            <img ref="imgShow1" :class="isHeight ? 'hovImg' : 'verImg'" :src="this.imgs[0].imgUrl">
        </div>

        <div :style=" this.imageWidth" v-show="!this.ifshow" @click="handleShowGallary">
            <ItemImage v-for="item of imgs" :key="item.id" :src="item.imgUrl"></ItemImage>
        </div>
        <CommonGallary :imgs="this.imgs" v-show="this.showGallary" @close="handleCloseGallary"></CommonGallary>
        <div class="item-text">
            {{this.content}}
        </div>
    </div>

</template>

<script>
    import ItemImage from "@/components/home/item/image";
    import CommonGallary from "@/components/common/gallary/gallary";

    export default {
        name: "item-content",
        components: {CommonGallary, ItemImage},
        props:{
            imgs:Array,
            content:String,
        },
        data(){
            return{
                isHeight: null,
                howShow: null,
                imageWidth: 'width:200px',
                ifshow: null,
                showGallary : false,

            }
        },

        methods: {
            handleShowGallary(){
                console.log(this.showGallary)
                this.showGallary = true
            },
            handleCloseGallary(){
                this.showGallary = false;
            },
            loadImage1() {
                if (this.$refs.imgShow1.naturalWidth / this.$refs.imgShow1.naturalHeight > 250 / 260) {
                    this.isHeight = true
                } else {
                    this.isHeight = false
                }
            },

            Imgs() {
                if (this.imgs.length == 1) {
                    this.ifshow = true
                    this.loadImage1()

                } else if (this.imgs.length > 3) {
                    this.ifshow = false
                } else {
                    this.imageWidth = 'width:280px',
                        this.ifshow = false
                }

            }
        },

        mounted() {
            this.Imgs();
        }
    }
</script>

<style scoped>
    .item-content {
        margin-top: 5px;
        margin-left: 45px;
        margin-right: 45px;
    }

    .item-text {
        width: 100%;
        padding-top: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }



    .hovImg {
        width: 250px;
        height: auto;
        border-radius: 10px;

        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;
    }

    .verImg {
        width: auto;
        height: 260px;
        border-radius: 10px;

        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;
    }

    .item-imgs-war {
        width: 280px;
    }
</style>