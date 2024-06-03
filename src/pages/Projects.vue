<script>
import {store} from '../data/store';
import axios from 'axios';

   export default {
    name: 'Projects',

    data(){
      return{
        projects: [],
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          this.projects = result.data;
        })
        .catch(error =>{
          this.projects = error.data;
          
        })
      }
    },

    mounted(){
      this.getApi();
    }

     
  }
</script>
    
<template>


  <div class="container">

    <h1>Projects</h1>

    <div class="row row-cols-3">

      <div class="col mb-3" v-for="project in projects" :key="project.id">
  
        <div class="card " style="width: 18rem;">
          <div class="card-body">
      
            <h1 class="card-title">{{ project.title }}</h1>
            <p class="card-text">{{ project.created_at }}</p>
            
          </div>
        </div>

    </div>
    

    </div>

  </div>


</template>

<style lang="scss" scoped>

</style>