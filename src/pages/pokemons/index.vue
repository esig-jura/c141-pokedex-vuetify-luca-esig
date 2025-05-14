<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
</script>

<!-- src/pages/[id]/index.vue -->
<template>
  <h1>Détail du Pokémon {{ route.params.id }}</h1>
</template>

<style scoped>

</style>
