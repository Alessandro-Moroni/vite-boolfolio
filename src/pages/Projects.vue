<script>
import {store} from '../data/store';
import axios from 'axios';
import Loader from '../components/partials/Loader.vue';

   export default {
    name: 'Projects',

    components:{
      Loader,
    },

    data(){
      return{
        projects: [],
        technologies: [],
        types: [],
        loading: true,
      }
    },

    methods:{
      getApi(apiUrl, type = ''){
        this.loading = true;
        axios.get(store.apiUrl + type)
        .then(result =>{
          
          this.loading = false;

          switch(type){

            case 'types':
              this.types = result.data;
              break;

            case 'technologies':
              this.technologies = result.data;
              break;

            default:
              this.projects = result.data;
              break;
           
          }
        })
        .catch(error =>{
          this.loading = false;
          console.log(error);
         
          
        })
      }
    },

    mounted(){
      this.getApi(store.apiUrl, 'projects');
      this.getApi(store.apiUrl, 'technologies');
      this.getApi(store.apiUrl, 'types');
    }

     
  }
</script>
    
<template>


  <div class="container">

    <h1>Projects</h1>
   
    <div v-if="!loading">


      
      <div class="my-3">
  
        <span class="badge rounded-pill text-bg-primary me-2" v-for="technology in technologies" :key="technology.id">{{ technology.title }}</span>
  
      </div>
  
      <div class="my-3">
  
        <span class="badge text-bg-success me-2" v-for="item in types" :key="item.id">{{ item.title }}</span>
  
      </div>
  
      
  
      <div class="my-3">
  
        <div class="row row-cols-3" >
    
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
      
    </div>
    
    <Loader v-else />
      
      

  </div>


</template>

<style lang="scss" scoped>

</style>