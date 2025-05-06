<template>
  <v-container>
    <h1 class="mb-6 text-center">Pokédex</h1>

    <v-text-field
      clearable
      label="Rechercher un Pokémon"
      prepend-icon="mdi-magnify"
    />

    <v-row>
      <!-- Exemple de colonne vide (à dupliquer plus tard avec du contenu) -->
      <v-col
        v-for="pokemon in pokemonStore.pokemons"
        :key="pokemon.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xl="2"
      >
        <PokemonCard :pokemon="pokemon" />  <!-- reprends la v card  qu il faut importer dans le scirpt -->
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
// Vos scripts ou imports ici

// récupérer le magasin des pokémons

  import { usePokemonStore } from '@/stores/pokemonStore'
  import PokemonCard from '@/components/PokemonCard.vue'

  const pokemonStore = usePokemonStore()

</script>

<style>
.mdi-heart{
  animation: heartbeat 1s ease-in-out;
}

</style>
