<script>
import Header from './components/Header.vue';


  export default {

    components:{
      Header,
     
    },

    data(){
      return {
        
        
      }
    },


    methods:{
      

    },

    mounted(){

    },
  }
</script>



<template>

  <Header />
  
  <div class="container">

    <router-view></router-view>
    
  </div>

</template>



<style lang="scss" scoped>

</style>


<!-- npm install vue-router@4 -->

<!-- import { createRouter, createWebHistory } from 'vue-router'; -->

<!-- path: '/:pathMatch(.*)*', -->

<!-- <router-view></router-view> -->