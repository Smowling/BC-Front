<template>

    <div>
        <!-- <h2> {{ $route.params.bikestore }} </h2> -->
        <p> test paragraf {{ $route.params.name }} {{ $route.params.id }}</p>
        <BikeshopDetails :storeid="$route.params.id" />
    </div>

</template>


<script setup>

import BikeshopDetails from '../components/BikeshopDetails.vue'

</script>