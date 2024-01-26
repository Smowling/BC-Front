<script setup>

import BikeshopsCards from "../components/BikeshopsCards.vue"
import { supabase } from '../lib/supabaseClient';
import { ref, onMounted } from "vue";

const bikeshops = ref();

onMounted(()=> {
  getBikeshops();

})


  async function getBikeshops() {
    const { data: dbData, error } = await supabase.from('bikeshops').select()
    if (error) console.log("Error", error);
    else bikeshops.value = dbData;
  }


</script>

<template>
  <h1> Bikeshops </h1>
  <div class="flex-container">
    <BikeshopsCards :bikeshops="bikeshops"/>
  </div>

</template>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}

</style>