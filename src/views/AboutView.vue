<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../lib/supabaseClient'

  const countries = ref([])

  async function getTests() {
    const { data } = await supabase.from('custom').select()
    tests.value = data
  }

  onMounted(() => {
    getTests()
  })
  </script>

  <template>
    <ul>
      <li v-for="test in tests" :key="test.id">{{ test.details }}</li>
    </ul>
  </template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
