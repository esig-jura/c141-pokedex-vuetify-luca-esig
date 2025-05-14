<script setup>
// Importation de la fonction ref de Vue pour créer des variables réactives
  import { ref } from 'vue'

  // Importation du store Pinia contenant la logique métier des Pokémon
  import { usePokemonStore } from '@/stores/pokemonStore'

  // Importation de l'objet useRouter pour effectuer des redirections
  import { useRouter } from 'vue-router'

  // Initialisation du store Pokémon pour accéder aux types et à la fonction addPokemon
  const pokemonStore = usePokemonStore()

  // Initialisation du routeur pour pouvoir rediriger l'utilisateur vers une autre page
  const router = useRouter()

  // Données du formulaire regroupées dans un objet réactif
  // - name : nom du Pokémon (champ texte)
  // - level : niveau du Pokémon (champ numérique)
  // - img : nom de fichier image (champ texte)
  // - description : description textuelle
  // - types : tableau contenant les identifiants des types sélectionnés
  const pokemonData = ref({
    name: '',
    level: null,
    img: '',
    description: '',
    types: [],
  })

  // Message d'erreur affiché si l'ajout échoue
  const msgErreur = ref(null)

  // Booléen déclenchant l'affichage de la snackbar de succès
  const msgSucces = ref(false)

  /**
   * Fonction appelée lors de la soumission du formulaire
   * Elle utilise l'action addPokemon() du store Pinia
   * Affiche un message d'erreur si la validation échoue
   * Affiche un message de succès puis redirige vers la page d'accueil
   */
  function addPokemon () {
    // Réinitialisation des messages d’état
    msgErreur.value = null
    msgSucces.value = false

    // Tentative d’ajout du Pokémon via le store
    const response = pokemonStore.addPokemon(pokemonData.value)

    // Si l’ajout échoue, on affiche le message d’erreur renvoyé par le store
    if (!response.success) {
      msgErreur.value = response.message
      return
    }

    // Si l’ajout réussit, on réinitialise le formulaire
    pokemonData.value = {
      name: '',
      level: '',
      img: '',
      description: '',
      types: [],
    }

    // On active la snackbar de confirmation
    msgSucces.value = true

    // Après 500 ms, on redirige automatiquement vers la page d'accueil
    setTimeout(() => router.push('/'), 500)
  }
</script>

<template>
  <!--
  Conteneur principal pour structurer la page
    * v-container : Fournit une mise en page fluide et centrée sur l'écran.
  -->
  <v-container>
    <!--
    Feuille contenant le formulaire
      * class="mx-auto bg-transparent" : Centre le contenu horizontalement (mx-auto) et applique un fond transparent (bg-transparent).
      * max-width="400" : Définit une largeur maximale de 400px pour la feuille.
    -->
    <v-sheet class="mx-auto bg-transparent" max-width="400">
      <!-- Titre principal de la page -->
      <h1 class="mb-4">Ajouter un Pokémon</h1>

      <!--
      Formulaire d'ajout de Pokémon
        * @submit.prevent="addPokemon" : Empêche le comportement par défaut du formulaire (rechargement de la page) et exécute la fonction `addPokemon`.
      -->
      <v-form @submit.prevent="addPokemon">
        <!--
        Champ de texte pour le nom du Pokémon
          * v-model.trim="pokemonData.name" : Liaison bidirectionnelle avec suppression des espaces inutiles en début et fin de texte.
          * label="Nom" : Ajoute une étiquette pour le champ.
          * :rules="[val => !!val || 'Le nom est requis']" : Définit une règle pour le champ (le nom est requis).
        -->
        <v-text-field
          v-model.trim="pokemonData.name"
          label="Nom"
          :rules="[val => !!val || 'Le nom est requis']"
        />

        <!--
        Champ numérique pour le niveau du Pokémon
        -->
        <v-text-field
          v-model.number="pokemonData.level"
          label="Niveau"
          :rules="[val => !!val || 'Le niveau est requis']"
          type="number"
        />

        <!--
        Champ texte pour l'image du Pokémon
        -->
        <v-text-field
          v-model.trim="pokemonData.img"
          class="pb-0 mb-0"
          label="Image du Pokémon"
        />

        <!--
        Champ de texte étendu pour la description
        -->
        <v-textarea
          v-model.trim="pokemonData.description"
          label="Description"
        />

        <!--
        Groupe de cases à cocher pour sélectionner les types
        -->
        <fieldset class="pa-6 mb-6">
          <legend class="font-weight-bold">Types</legend>
          <v-row>
            <v-col
              v-for="type in pokemonStore.types"
              :key="type.id"
              class="pa-0 ma-0"
              cols="4"
            >
              <v-checkbox
                v-model="pokemonData.types"
                density="compact"
                :label="type.name"
                :value="type.id"
              />
            </v-col>
          </v-row>
        </fieldset>

        <!--
        Message d'erreur affiché si l'ajout échoue
        -->
        <v-alert
          v-if="msgErreur"
          border="start"
          class="mb-6"
          color="warning"
          type="error"
        >
          {{ msgErreur }}
        </v-alert>

        <!--
        Bouton pour soumettre le formulaire
        -->
        <v-btn
          color="primary"
          size="large"
          type="submit"
        >
          Ajouter le Pokémon
        </v-btn>
      </v-form>

      <!--
      Snackbar pour afficher un message de succès
      -->
      <v-snackbar
        v-model="msgSucces"
        color="success"
      >
        Pokémon créé avec succès !
      </v-snackbar>
    </v-sheet>
  </v-container>
</template>

<style scoped>

</style>
