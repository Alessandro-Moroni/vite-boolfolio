<script>
import ProjectCard from './partials/ProjectCard.vue';
import {store} from '../data/store'


  export default {

    components:{
      ProjectCard,
    },

    data(){
      return{
        store,
       
      }
    },

    
  }
</script>


<template>

  <div class="text-center my-5 container a">


    <div class="row row-cols-3 mt-4" >
    

      <!-- <ProjectCard v-for="project in store.projects" :key="project.id"  :project="project" /> -->
        

    </div>
  </div>

</template>



<style lang="scss" scoped>
.a{
  background-color: blue;
  }
</style>