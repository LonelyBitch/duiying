import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/common/home/Home";
import Position from "@/components/common/position/Position";
import Release from "@/components/common/release/Release";
import Message from "@/components/common/message/Message";
import Mine from "@/components/common/mine/Mine";

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
            meta:{ifshow:true}

        },
        {
            path:'/position',
            name:'Position',
            component:Position,
            meta:{ifshow:true}

        },
        {
            path:'/release',
            name:'Release',
            component:Release,
            meta:{ifshow:true}

        },
        {
            path:'/message',
            name:'Message',
            component:Message,
            meta:{ifshow:true}

        },
        {
            path:'/mine',
            name:'Mine',
            component:Mine,
            meta:{ifshow:true}

        },

    ]
})