<script setup>
  import { useRoute } from 'vue-router'
  import { usePokemonStore } from '@/stores/pokemonStore'

  const route = useRoute()
  const pokemonStore = usePokemonStore()
  const id = (route.params.id)
  const pokemon = pokemonStore.getPokemonById(id)
</script>
<template>
  <v-container v-if="pokemon">
    <v-row>
      <v-col cols="12" md="4">
        <v-img contain height="300" :src="`/images/${pokemon.img}`" />
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="text-h4">{{ pokemon.name }}</h1>
        <p>Niveau : {{ pokemon.level }}</p>
        <p>Types :
          <v-chip
            v-for="typeId in pokemon.types"
            :key="typeId"
            class="ma-1"
            color="primary"
            label
            small
          >
            {{ pokemonStore.getTypeById(typeId)?.name }}
          </v-chip>
        </p>

        <!-- Placeholder pour stats -->
        <v-card class="mt-4">
          <v-card-title>Statistiques</v-card-title>
          <v-card-text>
            <p>HP : {{ pokemon.stats.hp }}</p>
            <p>Attaque : {{ pokemon.stats.attack }}</p>
            <p>Défense : {{ pokemon.stats.defense }}</p>
            <p>Vitesse : {{ pokemon.stats.speed }}</p>
          </v-card-text>
        </v-card>
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
