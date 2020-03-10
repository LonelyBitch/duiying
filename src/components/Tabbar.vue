<template>
    <div>
        <div class="tabbar">
            <router-link class="tabbar-item" to="/">
                <div class="iconfont tabbar-item-icon">
                    &#xe608;
                </div>

            </router-link>
            <router-link to="/position" class="tabbar-item">
                <div class="iconfont tabbar-item-icon">
                    &#xe602;
                </div>

            </router-link>
            <router-link to="/release" class="tabbar-item">
                <div class="iconfont tabbar-item-icon">
                    &#xe781;
                </div>
            </router-link>
            <router-link to="/message" class="tabbar-item">
                <div class="iconfont tabbar-item-icon">
                    &#xe603;
                </div>
            </router-link>
            <router-link to="/mine" class="tabbar-item">
                <div class="iconfont tabbar-item-icon">
                    &#xe601;
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
        z-index:15;
        background: white;
     }

    .tabbar-item {
        float: left;
        width: 20%;

    }

    a {
        text-decoration: none;
    }


    .tabbar-item-icon{
         font-size: 30px;
        align-items: center;
        justify-content: center;
        display:-webkit-flex;
        color: black;
    }

</style>