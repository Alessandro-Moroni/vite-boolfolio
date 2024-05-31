<script>
   export default {
    name: 'ProjectCard',

        props:{

          project:{
            
            type: Object,
            required: true,

          }
        }
  }
</script>
    
<template>
  <div class="col mb-3">

    <div class="card" style="width: 18rem;">
      <div class="card-body">
  
        <h1 class="card-title">{{ project.title }}</h1>
        <p class="card-text">{{ project.created_at }}</p>
        
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>