<template>

  <!-- Static content -->
  <main class="flex-grow">

    <div class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="~assets/upload/article_01_photo.jpg" alt="Mountain">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Mountain</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <!--Card 2-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="~assets/upload/article_02_photo.jpg" alt="River">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">River</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        </div>
      </div>
  
      <!--Card 3-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="~assets/upload/article_03_photo.jpg" alt="Forest">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Forest</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        </div>
      </div>
    </div>
  
   </main>
  <!-- Static content -->
  


</template>

<script>
    export default {
      mounted () {
       
          console.log("pages>index.vue succesfully mounted")
          console.log('apiURL =', this.$nuxt.context.env.apiURL)

      },
    }
</script>

<style>


</style>