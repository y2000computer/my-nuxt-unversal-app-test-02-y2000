<template>
    <div class="container mx-auto mt-8">
        <ProductCar
            v-for="mountain in mountains"
            :key="mountain.title"
            :product="mountain"
        />
    </div>
</template>

<script>

export default {
    async fetch() {
        this.mountains  = await fetch(
            'https://api.nuxtjs.dev/mountains'
        ). then((res) => res.json())
    },
    data(){
        return {
            mountains: []
        }
     }
    }
</script>
