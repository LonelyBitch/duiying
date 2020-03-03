<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-show="$route.meta.ifshow"></tabbar>
   </div>
</template>

<script>


  import Tabbar from "@/components/common/Tabbar";
  export default {
  name: 'App',
    components: {Tabbar},
  }
 </script>

<style>

</style>
