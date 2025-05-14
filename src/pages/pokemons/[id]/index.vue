<script setup>
  import { useRoute } from 'vue-router'
  import { usePokemonStore } from '@/stores/pokemonStore'
  import PokemonTypesChips from '@/components/PokemonTypesChips.vue'
  import PokemonStats from '@/components/PokemonStats.vue'

  const route = useRoute()
  const pokemonStore = usePokemonStore()
  const pokemon = pokemonStore.getPokemonById(route.params.id)
  // coalescence ?
</script>

<template>
  <v-container v-if="pokemon">
    <v-row class="align-start">
      <v-col cols="12" md="4">
        <v-img
          :alt="pokemon.name"
          class="rounded"
          cover
          height="300"
          :src="`/images/${pokemon.img}`"
        />
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h4 mb-2">{{ pokemon.name }}</h1>
        <p class="text-subtitle-1 mb-2">Niveau : {{ pokemon.level }}</p>

        <!-- Les types et stats seront ajoutés dans les chapitres suivants -->

        <p class="mt-6 text-body-1">{{ pokemon.description }}</p>
        <PokemonTypesChips class="mt-4" :pokemon="pokemon" />
        <PokemonStats class="mt-6" :stats="pokemon.stats" />

        <v-btn
          class="mt-8"
          color="primary"
          prepend-icon="mdi-arrow-left"
          to="/"
          variant="tonal"
        >
          Retour
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <v-alert class="text-center" type="error">
      Pokémon introuvable.
    </v-alert>
  </v-container>

</template>

<style scoped>

</style>
