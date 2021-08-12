<template>
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="imgs" alt="Mountain">


        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{headline}}</div>
          <p class="text-gray-700 text-base">
            {{content}}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
     <!--<end> Card 1-->
</template>

<script>
export default {
    props: {
        article_id: {
            type: String,
            default: "Fallback"
        },
        headline: {
            type: String,
            default: "Fallback"
        },        
        content: {
            type: String,
            default: "Fallback"
        },        
        imgs: {
            type: String,
            default: "Fallback"
        },        
    }
}
</script>

