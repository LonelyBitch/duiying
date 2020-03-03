<template>
    <div>
        <div class="tabbar">
            <router-link class="tabbar-item" to="/">
                <div class="tabbar-item-icon">
                    首页
                </div>

            </router-link>
            <router-link to="/position" class="tabbar-item">
                <div class="tabbar-item-icon">
                    附近
                </div>

            </router-link>
            <router-link to="/release" class="tabbar-item">
                <div class="tabbar-item-icon">
                    发布
                </div>
            </router-link>
            <router-link to="/message" class="tabbar-item">
                <div class="tabbar-item-icon">
                    消息
                </div>
            </router-link>
            <router-link to="/mine" class="tabbar-item">
                <div class="tabbar-item-icon">
                我的
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    .tabbar {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        line-height: 50px;
     }

    .tabbar-item {
        float: left;
        width: 20%;
        font-size: 30px;
    }
    .tabbar-item-icon{
        align-content: center;
        padding-left: 11px;
    }

</style>