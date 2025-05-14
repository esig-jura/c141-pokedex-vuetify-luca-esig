<script setup>
  import { computed, defineProps } from 'vue'
  import { usePokemonStore } from '@/stores/pokemonStore'

  const props = defineProps({
    pokemon: {
      type: Object,
      required: true,
    },
  })

  const store = usePokemonStore()

  const pokemonTypes = computed(() =>
    props.pokemon.types.map(id => store.getTypeById(id))
  )
</script>

<template>
  <div>
    <v-chip
      v-for="type in pokemonTypes"
      :key="type.id"
      class="ma-1"
      :color="type?.color || 'grey'"
      text-color="white"
    > <!-- le ? permets que le truc ne plante pas si il n y a pas de couleur -->
      {{ type?.name || 'Inconnu' }}
    </v-chip>
  </div>
</template>

<style scoped>

</style>
