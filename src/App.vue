<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const cust = ref([])

async function getcust() {

  let { data: custom, error } = await supabase
  .from('custom')
  .select('*')
  cust.value = data["custom"]
}

onMounted(() => {
  getcust()
})
</script>

<template>
  <ul>
    <li v-for="c in cust" :key="c.id">{{ c.details }}</li>
  </ul>
</template>