<script>
import axios from 'axios';
import {store} from '../data/store';
import Loader from '@/components/partials/Loader.vue';

   export default {
    name: 'ProjectDetail',

    components:{
      Loader,
    },

    data(){
      return{
        project: {},
        loading: false,
        store,
      }
    },
    
    methods:{
      getApi(){
        const slug = this.$route.params.slug;
        axios.get(store.apiUrl + 'project-by-slug/' + slug)
        .then(result =>{
          this.loading = true,
          this.project = result.data.project;
          console.log(result.data);        
          
        })
        .catch(error =>{
          
          this.loading = true,
          console.log(error);        
          
        })

      }
    },

    computed:{

      type(){
        if(!this.project.type){
          return 'No Types founded';
        }
        return this.project.type.title;
      }

    },

    mounted(){
      this.getApi();
    },
     
  }
</script>
    
<template>

  <Loader v-if="loading = false" />

  <div class="container" v-else>

    <h1 class="my-3">{{ project.title }}</h1>
    
    <p>
      Technologies:
      <span v-for="technology in project.technologies" :key="technology" class="badge text-bg-primary me-3">{{ technology.title }}</span>
    </p>

    <p>
      Types: 
      <span class="badge rounded-pill text-bg-success">{{ type }}</span>
    </p>
    
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti facilis quo, laudantium nam eligendi. Eum nemo iusto eaque incidunt impedit deserunt quae laborum ipsa placeat cumque quaerat, ut similique.</p>

    <img class="img-fluid" :src="project.image" >

  </div>


</template>

<style lang="scss" scoped>
img{
  height: 500px;
  width: 500px;
  object-fit: contain;
}
</style>