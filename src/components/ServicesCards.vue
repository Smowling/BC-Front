<template>
    <div class="card" v-for="(service, index) in services" :key="index">
        
    </div>
</template>

<script setup>

    const props = defineProps(['services'])

</script>

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

