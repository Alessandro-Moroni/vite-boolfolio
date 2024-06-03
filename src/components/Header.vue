<script>
   export default {
    name: 'Header',

     
  }
</script>
    
<template>

<header>

  <div class="container my-3">
  
  
    <h1 class="text-center">Header</h1>
    
    <div class="mt-3">
      <nav>
        <ul>
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'blog'}">Blog</router-link></li>
          <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
  
  </div>
</header>



</template>

<style lang="scss" scoped>

header{

  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;

    li{
      list-style: none;

      a{
        text-decoration: none;
        color: blue;
      }
    }
  }

}

</style>