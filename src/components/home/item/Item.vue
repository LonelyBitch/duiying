<template>
    <div>
        <div class="item" v-for="item of dynamic" :key="item.id">
            <ItemTitle :name="item.name" :time="item.time" :avatar="item.avatar"></ItemTitle>
            <ItemContent :imgs="item.imgs" :content="item.content"></ItemContent>
            <ItemFooter></ItemFooter>
        </div>
    </div>
</template>

<script>
    import ItemFooter from "@/components/home/item/footer";
    import ItemTitle from "@/components/home/item/title";
    import ItemContent from "@/components/home/item/content";

    export default {
        name: "Item",
        components: {ItemContent, ItemFooter, ItemTitle},
        data() {
            return {
                dynamic: [{
                    id:0,
                    name: '独孤剑人',
                    avatar: 'WechatIMG156.jpeg',
                    time: '2020年3月5日',
                    content: '重要的是花不花在你身上！重要的是心里是否牵挂你',
                    imgs: [
                        {
                            id: 0,
                            imgUrl: 'c0ef653bgy1gcn0qyejxbj20u0190qa0.jpg',
                        },

                    ]
                },{
                    id:1,
                    name: '独孤剑人',
                    avatar: 'WechatIMG156.jpeg',
                    time: '2020年3月5日',
                    content: '鱼刺卡过喉咙你却还是喜欢吃鱼，被狗咬过被猫抓过你却还是热爱动物，满口蛀牙你还是嗜甜如命，他弃你于千里之外，你却还是愿意为了见他走遍千山外水。',
                    imgs: [
                        {
                            id: 0,
                            imgUrl: 'c0ef653bgy1gcn0qvtlbfj20u0190agg.jpg',
                        },
                        {
                            id: 1,
                            imgUrl: '007bfBK9gy1gco2dnue6qj31jk1jkn91.jpg'
                        },
                        {
                            id: 2,
                            imgUrl: '007bfBK9gy1gco2da8r82j30b30b3dlh.jpg'
                        },
                        {
                            id: 3,
                            imgUrl: 'WechatIMG90249.jpeg'
                        }
                    ]
                },{
                    id:2,
                    name: '独孤剑人',
                    avatar: 'WechatIMG156.jpeg',
                    time: '2020年3月5日',
                    content:'Don\'t be stupid enough to judge a relationship by the length of time you know it. ​',
                    imgs: [
                        {
                            id: 0,
                            imgUrl: 'c609d66agy1ft4ox340byj20j60grtb0.jpg',
                        },
                        {
                            id: 1,
                            imgUrl: 'c609d66agy1ft4ox37pr7j20j60lpag3.jpg'
                        },
                        {
                            id: 2,
                            imgUrl: 'c609d66agy1ft4ox34w3dj20j60cjn01.jpg'
                        },
                        {
                            id: 3,
                            imgUrl: 'c609d66agy1ft4ox3jzt5j20j60pk0ys.jpg'
                        }
                    ]
                },{
                    id:3,
                    name: '独孤剑人',
                    avatar: 'WechatIMG156.jpeg',
                    time: '2020年3月5日',
                    content: '你要学会自己走开',
                    imgs: [

                        {
                            id: 2,
                            imgUrl: 'WechatIMG5.jpeg'
                        },
                        {
                            id: 3,
                            imgUrl: 'WechatIMG90249.jpeg'
                        }
                    ]
                },
                    {
                        id:4,
                        name: '独孤剑人',
                        avatar: 'WechatIMG156.jpeg',
                        time: '2020年3月5日',
                        content: '不要着急，最好的总会在最不经意的时候出现。',
                        imgs: [
                            {
                                id: 0,
                                imgUrl: '006ak040gy1gcosiwa21zj30u01csgv9.jpg',
                            },
                            {
                                id: 1,
                                imgUrl: '006ak040gy1gcosivnktlj30u00u040x.jpg'
                            },

                            {
                                id: 2,
                                imgUrl: '006ak040gy1gcosiuhkiej30u00u0tb1.jpg'
                            }
                        ]
                    }
                ],


            }
        },


    }
</script>
<style scoped>

    .item {
        margin-top: 15px;
    }


</style>
