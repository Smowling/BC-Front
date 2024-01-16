<!-- <script setup>
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
</template> -->
<!-- 
<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './lib/supabaseClient'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template> -->


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/secret">Secret</RouterLink>
		<RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <div class="content">
	<RouterView />
  </div>

</template>

<style scoped>
nav {
	display: flex;
	justify-content: center;
}

nav a {
	padding: 1em;
}

.content {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 500px;
	border: solid 1px black;
	margin-left: auto;
	margin-right: auto;
	border-radius: 1em;
	padding: 2em 0 2em 0;
}
</style>