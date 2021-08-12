<template>
    <div>
        <br> 
          analytics Page
       <div><p>
           Counter: {{ counter }} </p>
            <button @click="increment">Add counter</button>   
            <br>
       
             <button @click="$store.commit('increment')">
                 Add counter other method:   {{ $store.state.counter }}
               
            </button> <br>

        </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
        fetch ({ store }) {
            store.commit('increment')
        },
        computed: mapState([
            'counter'
        ]),
        methods: {
            increment () {
            this.$store.commit('increment')
            }
        }
    }
</script>

<style>


</style>