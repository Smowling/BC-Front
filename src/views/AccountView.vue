<template>
    <div class="about">
      <h1>This is protected content</h1>

    </div>

    <div id="bikeform">
      <div class="inputContainer">
		    <label for="brand"> Brand: </label>
		    <input type="text" id="brand" v-model="brand">
	    </div>
      <div class="inputContainer">
		    <label for="model"> Model: </label>
		    <input type="text" id="model" v-model="model">
	    </div>
      <div class="inputContainer">
		    <label for="year"> Year: </label>
		    <input type="date" id="year" v-model="year">
	    </div>
    </div>

    <div class="buttonContainer">
      <button @click="saveBike"> Save </button>
    </div>

  </template>
  
  <script setup>
  import { supabase } from '../lib/supabaseClient';
  import { onMounted, ref, toRefs } from "vue";
  

  const brand = ref('');
  const model = ref('');
  const year = ref('');
  
  async function saveBike() {
    const { data: { user } } = await supabase.auth.getUser()
    const { error } = await supabase
      .from('bikes')
      .insert({ brand: brand.value, model: model.value, year: year.value, user_id: user.id })

    if (error) {
      console.log(error)
    }
  }


  </script>
  
  <style>
  #account {
      color: green;
  }
  </style>