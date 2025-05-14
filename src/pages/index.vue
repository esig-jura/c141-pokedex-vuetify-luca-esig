<template>
  <v-container>
    <h1 class="mb-6 text-center">
      Pokédex

      <!--
      bouton pour ajouter un pokémon
        * aria-label : accessibilité pour les lecteurs d'écran
        * v-tooltip : info-bulle au survol
        * @click : navigation vers la page de création
      -->
      <v-btn
        v-tooltip.bottom="'Ajouter un Pokémon'"
        aria-label="Ajouter un Pokémon"
        class="ml-4"
        color="primary"
        icon="mdi-plus"
        @click="$router.push('pokemons/create')"
      />
    </h1>

    <!-- Menu déroulant pour choisir l'ordre de tri -->
    <!-- Ligne contenant uniquement le menu de tri -->
    <v-row class="mb-2" justify="end">
      <v-col cols="auto">
        <v-select
          v-model="sortDirection"
          dense
          :items="['A → Z', 'Z → A']"
          label="Tri"
          outlined
          style="max-width: 150px;"
        />
      </v-col>
    </v-row>

    <v-text-field
      v-model="search"
      clearable
      label="Rechercher un Pokémon"
      prepend-icon="mdi-magnify"
    />

    <!-- Affichage du message si aucun Pokémon trouvé -->
    <v-alert v-if="filteredPokemons.length === 0" class="text-center mt-4" type="warning">
      Aucun Pokémon ne correspond à votre recherche.
    </v-alert>

    <v-row>
      <!-- Exemple de colonne vide (à dupliquer plus tard avec du contenu) -->
      <v-col

        v-for="pokemon in filteredPokemons"
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
  import { computed, ref } from 'vue'
  import { usePokemonStore } from '@/stores/pokemonStore'
  import PokemonCard from '@/components/PokemonCard.vue'

  const pokemonStore = usePokemonStore()
  const search = ref('')
  // recherche dynamique
  const filteredPokemons = computed(() => {
    const query = search.value.toLowerCase().trim()
    return sortedPokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query)
    )
  })
  const sortedPokemons = computed(() => {
    return [...pokemonStore.pokemons].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  })

  const sortDirection = ref('A → Z') // correspond exactement à ce qui est affiché

  const sortedPokemonsZA = computed(() => {
    return [...pokemonStore.pokemons].sort((a, b) =>
      sortDirection.value === 'A → Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
  })

</script>

<style>
.mdi-heart{
  animation: heartbeat 1s ease-in-out;
}

</style>
