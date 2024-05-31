<script>
import axios from 'axios';
import { store } from './data/store';
import Main from './components/Main.vue';


  export default {

    components:{
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

        })
      }

    },

    mounted(){
      this.getApi();

    },
  }
</script>



<template>
 
  <Main />
</template>



<style lang="scss" scoped>

</style>