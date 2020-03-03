<template>
    <div class="warp">
        <div class="navList">
            <ul class="navWarp">
                <li :class="{myColor:index==isActive}" @click="liseGo(index)" v-for="(item,index) of navList"
                    :key="index">
                    {{item.name}}
                </li>

            </ul>
        </div>
        <div class="mainContent">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item ,index) of contentList" :key="index">
                    <div>{{item.name}}</div>
                </swiper-slide>
            </swiper>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
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
                }
            }
        },

        methods: {
            liseGo(index) {
                this.isActive = index;
                this.$refs.mySwiper.swiper.slideTo(index,500,false);
            }
        }
    }
</script>

<style scoped>
    ul {
        display: -webkit-box;
        overflow-x: scroll;
        white-space: nowrap;
        justify-content: center;
        text-align: center;
    }

    li {
        width: 62.5px;
        display: inline-block;
        padding: 3.5px 10px;
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        justify-content: center;

    }

    .myColor {
        color: black;
        font-size: 23px;
        font-weight: 500;
        border-bottom: 5px  solid #f89;
        /*content: '';*/
        /*position: absolute;*/
        /*bottom: 0;*/
        /*left: 25%;*/
        /*height: 2px;*/
        /*width: 50%;*/
        /*background: #5e1581;*/
        /*transition: 800ms ease all;*/

    }
</style>