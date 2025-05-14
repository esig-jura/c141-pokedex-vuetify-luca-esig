// Utilities
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

export default createPinia()
const protectedRoutes = [
  '/pokemons/create',
  // Ajouter d’autres routes protégées ici
]
