<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import { store } from './data/store';


  export default {

    components:{
      Header,
      Main,
    },

    data(){
      return {
        store,
        
      }
    },


    methods:{
      getApi(){
        axios.get(this.store.apiUrl)
        
        .then(result =>{
          // console.log(result.data);
          this.store.projects = result.data;
          
        })
        .catch(error =>{
          console.log(error.data);
          this.error = error.message

        })
      }

    },

    mounted(){
      this.getApi();

    },
  }
</script>



<template>

  <Header />
  
  <div class="container">

    <router-view></router-view>

  </div>

  <Main />

</template>



<style lang="scss" scoped>

</style>


<!-- npm install vue-router@4 -->

<!-- import { createRouter, createWebHistory } from 'vue-router'; -->

<!-- path: '/:pathMatch(.*)*', -->

<!-- <router-view></router-view> -->