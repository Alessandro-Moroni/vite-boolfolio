<script>
import ProjectCard from './partials/ProjectCard.vue';
import {store} from '../data/store'
import axios from 'axios';

  export default {
    name:'App',
    components:{
      ProjectCard,
    },
    data(){
      return{
        store,
        projects: []
      };
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          this.projects = result.data;
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
  <div class="text-center my-5 container">


    <div class="row row-cols-3 mt-4" >
      <ProjectCard :project="project" v-for="project in projects" :key="project.id"  />

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>