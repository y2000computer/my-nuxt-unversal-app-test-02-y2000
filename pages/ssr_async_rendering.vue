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
const axios = require("axios");
const url ="https://jsonplaceholder.typicode.com/posts";

  export default {
      components: [
        {
          ListItem
        }
      ],    
      async asyncData() {
        
        const response = await axios.get(url);
        const data = response.data;
        const titles = data.map(({ title }) => title);
        return {
            titles  
            };
      },
      created() {
          /*
          console.log('create() =', this.titles);
          */
      },      
      mounted() {
      }    
    
      
    }

</script>

<style>


</style>