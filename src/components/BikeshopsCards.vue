<template>
  <div class="card" v-for="(bikestore, index) in bikeshops" :key="index">
    <div class="container">
      <p class="name">{{ bikestore.name }}</p> 
      <p class="desc">{{ bikestore.description }}</p>
    </div>
  </div>
</template>


<style scoped>
.name {
  font-weight: bold;
}
.desc {
  font-weight: 400;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>


<script setup>

const props = defineProps(['bikeshops'])

</script>