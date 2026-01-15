import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'avances',
    loadComponent: () => import('./page/avances/avances.page').then( m => m.AvancesPage)
  },
  {
    path: 'sobremi',
    loadComponent: () => import('./page/sobremi/sobremi.page').then(m => m.SobreMiPage),
  },
  {
   path: 'diseñoj',
   loadComponent: () => import('./page/diseñoj/diseñoj.page').then(m => m.DiseñojPage),
  },
  {
   path: 'pruebas',
   loadComponent: () => import('./page/pruebas/pruebas.page').then(m => m.PruebasPage),
  },
  {
   path: 'cartas',
   loadComponent: () => import('./page/cartas/cartas.page').then(m => m.CartasPage),
  },
  {
   path: 'prototipo',
   loadComponent: () => import('./page/prototipo/prototipo.page').then(m => m.PrototipoPage),
  },
];
