import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExportacaoView from '../views/ExportacaoView.vue'
import QualidadeView from '../views/QualidadeView.vue'
import MeioAmbienteView from '../views/MeioAmbienteView.vue'
import ReceitaView from '../views/ReceitaView.vue'
import QuemSomosView from '../views/QuemSomosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exportacao',
      name: 'exportacao',
      component: ExportacaoView
    },
    {
      path: '/qualidade',
      name: 'qualidade',
      component: QualidadeView
    },
    {
      path: '/meioambiente',
      name: 'meioambiente',
      component: MeioAmbienteView
    },
    {
      path: '/receita',
      name: 'receita',
      component: ReceitaView
    },
    {
      path: '/quemsomos',
      name: 'quemsomos',
      component: QuemSomosView
    }
  ]
})

export default router
