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
  <div class="text-center my-5 container">


    <div class="row row-cols-3 mt-4" >

      <div class="col mb-3" v-for="project in store.projects" :key="project.id"  >

        <ProjectCard :propsTitle="project.title" :propsCreated_at="project.created_at"/>
        
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>