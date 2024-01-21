<template>
  <button @click="active = !active">Add</button>
  <div v-if="active" class="bikelist">
    <ul>
      <li v-for="(bike, index) in bikes" :key="index"
      > {{ bike.brand }} {{ bike.model }} {{ bike.year.slice(0, 4) }}
      <button @click="deleteBike(bike.id)">X</button>
      </li>
    </ul>
  </div>
  <BikeForm v-else />

</template>

<script setup>

import { supabase } from '../lib/supabaseClient';
import { ref } from "vue";
import BikeForm from '../components/BikeForm.vue'

const bikes = ref();
const active = ref(true);



getBikes();

  async function getBikes() {
    const { data: dbData, error } = await supabase.from('bikes').select()
    if (error) console.log("Error, error");
    else bikes.value = dbData;
  }

  async function deleteBike(bikeid) {
    const { error } = await supabase
        .from('bikes')
        .delete()
        .eq('id', bikeid)
    if (error) console.log("Error", error);
    getBikes();
  }


</script>