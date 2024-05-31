<script>
import axios from 'axios';
import { store } from './data/store';

  export default {
    data(){
      return {

      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          console.log(result.data);
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
  <div>

  </div>
</template>



<style lang="scss" scoped>

</style>