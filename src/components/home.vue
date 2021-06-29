<template>
<div>
    <navbar />

    <div id="app">
                              <Slider/> </div>

    </div>
</template>

<script>



import navbar from './nav.vue'
import Slider from './Slider.vue'


    export default {
        name : 'home',
        components : {
            navbar ,
            Slider,
        },
        
    }
</script>

<style scoped>

</style>