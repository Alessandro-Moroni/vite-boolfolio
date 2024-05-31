<script>
   export default {
    name: 'ProjectCard',

        props:{

          propsTitle: String,
          propsCreated_at: String,
        }
  }
</script>
    
<template>


    <div class="card" style="width: 18rem;">
      <div class="card-body">
  
        <h1 class="card-title">{{ propsTitle }}</h1>
        <p class="card-text">{{ propsCreated_at }}</p>
        
      </div>
    </div>


</template>

<style lang="scss" scoped>

</style>