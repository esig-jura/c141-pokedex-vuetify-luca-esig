<script setup>

  const faqList = ref([
    {
      question: "Qu'est-ce qu'un Pokédex ?",
      answer: 'Un Pokédex est un dispositif électronique qui répertorie et fournit des informations sur les différentes espèces de Pokémon. Notre application est une version numérique de cet outil.',
    },
    {
      question: 'Comment puis-je ajouter un Pokémon à mes favoris ?',
      answer: "Pour ajouter un Pokémon à vos favoris, cliquez simplement sur l'icône en forme de cœur sur la carte du Pokémon. L'icône deviendra rouge pour indiquer que le Pokémon est maintenant dans vos favoris.",
    },
    {
      question: 'Pourquoi certains Pokémon ont-ils plusieurs types ?',
      answer: 'Certains Pokémon possèdent des caractéristiques de plusieurs types, ce qui se reflète dans leurs capacités et leurs faiblesses. Par exemple, Charizard est à la fois de type Feu et Vol.',
    },
    {
      question: 'Comment fonctionne la recherche de Pokémon ?',
      answer: 'Vous pouvez rechercher des Pokémon en tapant leur nom dans la barre de recherche. La liste se mettra à jour automatiquement pour afficher les Pokémon dont le nom correspond à votre recherche.',
    },
    {
      question: 'Que signifient les différentes statistiques des Pokémon ?',
      answer: "Les statistiques comme HP, Attaque, Défense et Vitesse représentent les capacités de base d'un Pokémon. HP représente les points de vie, Attaque la puissance offensive, Défense la résistance aux attaques, et Vitesse détermine l'ordre d'action en combat.",
    },
    {
      question: "L'application est-elle mise à jour régulièrement avec de nouveaux Pokémon ?",
      answer: "Oui, nous nous efforçons de maintenir notre base de données à jour avec les derniers Pokémon découverts. Cependant, la fréquence des mises à jour peut varier en fonction des nouvelles sorties de jeux et d'informations officielles.",
    },
  ])
</script>

<template>
  <v-container>
    <h1 class="text-center mb-6">Foire Aux Questions (FAQ)</h1>

    <v-expansion-panels class="mb-6">
      <v-expansion-panel
        v-for="(item, index) in faqList"
        :key="index"
        class="mb-2"
      >
        <v-expansion-panel-title class="text-subtitle-1 font-weight-medium">
          {{ item.question }}
        </v-expansion-panel-title>

        <v-expansion-panel-text class="pa-4">
          {{ item.answer }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<!-- on peut aussi faire un panels suivi d un autre " manuelleement" genre :   <v-expansion-panel
        text="Les statistiques comme HP, Attaque, Défense et Vitesse représentent les capacités de base d'un Pokémon. HP représente les points de vie, Attaque la puissance offensive, Défense la résistance aux attaques, et Vitesse détermine l'ordre d'action en combat."
        title="Que signifient les différentes statistiques des Pokémon ?"
      /> faut juste l enrober dans expanison panels avec s -->

<style scoped>

</style>
