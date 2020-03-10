<template>
    <div class="footer">
        <div class="footer-forword ">
            <div class="iconfont icon">&#xe65f;</div>
        </div>
        <div class="footer-Favorite">
            <div class="iconfont icon">&#xe77f;</div>
        </div>
        <div class="footer-comment">
            <div class="iconfont icon">&#xe607;</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-footer"
    }
</script>

<style scoped>

    .footer{
        margin-top: 5px;
        display: flex;
    }
    .footer-forword{
        margin-left: 45px;
        float: left;
        font-size: 20px;

    }
    .footer-Favorite{
        margin-left: 165px;
        float: right;
        font-size: 20px;
    }
    .footer-comment{
        margin-left: 65px;
        float: right;
        font-size: 20px;
    }
    .icon{
        font-size: 20px;
    }

</style>