<template>

  <!-- Browser rendering content -->
  <main class="flex-grow">

    <div class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 
      <ListItem v-for="(title,i) in titles" :key="i" :title="title" />

  
    </div>
  

  </main>
  <!-- Browser rendering content -->
  


</template>

<script>

import ListItem from "~/components/ListItem";

  export default {
      components: [
        {
          ListItem
        }
      ],    
      data: () =>(
        {
          titles:["Title one", "Tite two", "Title three"]
        }
      ),
      created() {
          /*
          console.log('create() =', this.titles);
          */
      },    
      mounted() {
          /*
          console.log('mounted() = ', this.titles);
          */
      }    
    
      
    }

</script>

<style>


</style>