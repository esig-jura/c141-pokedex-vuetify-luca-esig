<script setup>
  defineProps({
    stats: {
      type: Object,
      required: true,
    },
  })

  const statColors = {
    hp: '#FF5959',
    attack: '#C03028',
    defense: '#6890F0',
    speed: '#F08030',
  }
</script>

<template>
  <div class="pokemon-stats">
    <v-list-item v-for="(value, key) in stats" :key="key">
      <v-list-item-title>{{ key.toUpperCase() }}: {{ value }}</v-list-item-title>

      <v-progress-linear
        :color="statColors[key] || 'grey'"
        height="25"
        :model-value="value"
      >
        <strong>{{ value }}</strong>
      </v-progress-linear>
    </v-list-item>
  </div>
</template>

<style scoped>
.pokemon-stats {
  margin-top: 1rem;
}
.v-list-item {
  margin-bottom: 1rem;
}
</style>
