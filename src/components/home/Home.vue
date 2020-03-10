<template>
    <div class="warp">
        <div class="navList">
            <ul>
                <li :class="{myColor:index==isActive}" v-for="(item,index) of navList" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="container">
            <swiper :options="swiperOption" refs="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <Item></Item>
                </swiper-slide>
                <swiper-slide>
                    <Item></Item>

                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

    import Item from "@/components/home/item/Item";
    var _this = {}
    export default {

        name: "Home",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

                navList: [
                    {name: '关注'},
                    {name: '推荐'}
                ],
                contentList: [
                    {name: 'follow'},
                    {name: 'recommend'}
                ],
                isActive: 0,
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    centeredSlides: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    on: {
                        slideChangeTransitionEnd: function () {
                            _this.isActive = this.activeIndex
                        }
                    },

                }

            }
        },
        components:{
            Item
        },
        methods: {
            liseGo(index) {
                this.isActive = index;
                this.mySwiper.slideTo(index, 500, false);
            },

        },


        beforeCreate() {
            _this = this;
        },

    }
</script>

<style scoped>


    .navList {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        background: white;
        z-index: 15;
    }

    ul {
        margin: 6px 0px;
        padding-right: 30px;
        justify-content: center;
        text-align: center;
    }

    li {
        width: 62.5px;
        display: inline-block;
        padding: 3.5px 0px;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        justify-content: center;

    }

    .container {
        overflow: hidden;
        position: relative;
        left: 0;
        top: 70px;
        right: 0;
        overflow: auto;
        z-index: 10;
    }

    .myColor {
        color: black;
        font-weight: 500;
        position: relative;
        font-size: 20px;
    }


    .myColor::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 35%;
        height: 2px;
        width: 30%;
        background: #5e1581;
        transition: 800ms ease all;

    }


</style>