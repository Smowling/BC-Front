<template>
    <div class="bikeshops">
        <div v-for="(bikestore, index) in bikeshops" :key="index">
            <p>{{ bikestore.name }}</p> 
            <p>{{ bikestore.description }}</p>
        </div>
    </div>

  </template>

<script setup>

import { supabase } from '../lib/supabaseClient';
import { ref, onMounted } from "vue";

const bikeshops = ref();

getBikeshops();

  async function getBikeshops() {
    const { data: dbData, error } = await supabase.from('bikeshops').select()
    if (error) console.log("Error", error);
    else bikeshops.value = dbData;
  }


</script>