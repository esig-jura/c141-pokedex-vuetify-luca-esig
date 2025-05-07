<script setup>
  import { usePokemonStore } from '@/stores/pokemonStore'
  const pokemonStore = usePokemonStore()
  defineProps({ pokemon: Object })

</script>

<template>
  <router-link class="text-decoration-none" :to="`/pokemons/${pokemon.id}`">
    <v-card class="pa-2" elevation="2">
      <v-img
        alt="Magicarpe"
        height="200px"
        :src="`/images/${pokemon.img}`"
      />  <!-- les : servent a rendre dynamique et ca devient du js une des solutions = "'/images/'+ pokemon.img"  -->

      <v-card-title>
        {{ pokemon.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ pokemon.level }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="red"
          :icon=" pokemonStore.isFavorite(pokemon) ? 'mdi-heart':'mdi-heart-outline' "
          @click.prevent="pokemonStore.toggleFavorite(pokemon)"
        />
      </v-card-actions>
    </v-card>
  </router-link>
</template>

<style scoped>

</style>
