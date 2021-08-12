<template>
    <div>
        <br> 
          analytics Page
        <p>
             <button @click="$store.commit('increment')">
                 Add counter other method:   {{ $store.state.counter }}
            </button>
        </p>
         <br>

        </div>
   </div>
</template>

<script>


export default {
   
    }
</script>

<style>


</style>