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
        <v-card>
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
              icon="mdi-heart-outline"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Vos scripts ou imports ici

// récupérer le magasin des pokémons

  import { usePokemonStore } from '@/stores/pokemonStore'

  const pokemonStore = usePokemonStore()

</script>
