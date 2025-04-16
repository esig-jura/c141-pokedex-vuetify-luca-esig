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
        v-for="i in 20"
        :key="i"
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
            src="/images/magicarpe.png"
          />

          <v-card-title>
            Pokémont {{ i }}
          </v-card-title>

          <v-card-subtitle>
            Niveau: {{ i }}
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
</script>
