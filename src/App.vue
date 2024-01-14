<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const custdata = ref([])

async function getcustdata() {
  const { data } = await supabase
  .from('custom')
  .select()
  custdata.value = data
}

onMounted(() => {
  getcustdata()
  console.log(custdata.value)
})
</script>

<template>
  <p>dupa dupa</p>
  <ul>
    <li v-for="cus in custdata" :key="cus.id">{{ cus.details }}</li>
  </ul>
</template>