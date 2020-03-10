<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="swiper-image"
                         :src="item.imgUrl"/>
                </swiper-slide>
                <div class="swiper-pagination " slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents:true,
                    observer:true
                },

            }
        },
        props: {
            imgs: Array
        },
        methods:{
            handleGallaryClick(){
                this.$emit('close')
            }
        }
    }
</script>

<style  scoped>


    .container {
        display: flex;
        flex-direction :column;
        justify-content :center;
        position :fixed;
        z-index :999;
        left :0;
        right :0;
        top :0;
        bottom :0;
        width: 100%;
        height: 100%;
        background :black;
    }

    .wrapper {
        height :0;
        width :100%;
        padding-bottom :100%;

    }

    .swiper-image {
        width :100%;
    }

    .swiper-pagination {
        margin-bottom: -5px;
        color :#fff;
    }


</style>