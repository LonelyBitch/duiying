<template>
    <div class="item-title">
        <div class="item-Avatar">
            <el-avatar :size="40" :src="this.avatar"></el-avatar>
        </div>
        <div class="item-warper">
            <div class="item-name">{{this.name}}</div>
            <div class="item-time">{{this.time}}</div>
        </div>
        <div class="item-bottom">
            <el-dropdown>
                      <span class="iconfont el-dropdown-link">
                       &#xe600;
                      </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-show="true" >关注</el-dropdown-item>
                    <el-dropdown-item v-show="false">取消关注</el-dropdown-item>
                    <el-dropdown-item >私聊</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-title",
        props:{
            avatar: String,
            time:String,
            name:String,

        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .item-title {
        width: 100%;
        display: flex;
        position: relative;

    }
    .item-warper {
        margin-left: 10px;
    }

    .item-bottom {
        position: absolute;
        top: 0;
        right: 5px;
    }

    /*ui引入*/
    .el-dropdown-link {
        cursor: pointer;
        color: black;
    }

</style>