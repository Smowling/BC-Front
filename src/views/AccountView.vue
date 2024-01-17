<template>
    <div class="about">
      <h1>This is protected content</h1>
      <p id="account"> Account: {{  account.data.session.user.email  }}</p>
      <p> Protect the secret password: **TMX$$ </p>
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
  import { supabase } from '../lib/supabaseClient'
  import { ref } from "vue";
  
  
  const account = ref();
  getSession();
  const brand = ref('');
  const model = ref('');
  const year = ref('');
  
  async function saveBike() {
    const payload = {
      "brand": brand,
      "model": model,
      "year": year,
    }
    const { error } = await supabase
      .from('bikes')
      .insert({ brand: brand.value, model: model.value, year: year.value })

      if (error) {
        console.log(error)
      }

  }

  async function getSession() {
      account.value = await supabase.auth.getSession();
      console.log(account.data.session.user.email)
  }
  </script>
  
  <style>
  #account {
      color: green;
  }
  </style>