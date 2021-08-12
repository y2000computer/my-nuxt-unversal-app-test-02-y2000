<template>
    <div class="md:flex">
        <div class="md:flex-shrink-0">
        <img
            class="rounded-lg md:w-56"
            :src="product.image"
         />    
        </div>

        <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm font-bold">
               {{ product.continent }}
        <div class="mt-2 text-gray-600">
               {{ product.description }}
        </div>             </div> 
        </div>   

  
             
    </div>

  
</template>

<script>

export default {
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    }
}
</script>


