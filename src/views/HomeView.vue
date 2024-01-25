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

import DynamicForm from '@/components/DynamicForm.vue';
export default {
  components: {
    DynamicForm,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Brand',
          name: 'name',
          as: 'input',
        },
        {
          label: 'Your Email',
          name: 'email',
          as: 'input',
        },
        {
          label: 'Your Password',
          name: 'password',
          as: 'input',
        },
      ],
    };
    return {
      formSchema,
    };
  },
};

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