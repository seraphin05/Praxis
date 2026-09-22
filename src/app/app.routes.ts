import { Routes } from '@angular/router';

import { Accueil } from './components/accueil/accueil';
import { APropos } from './components/a-propos/a-propos';

export const routes: Routes = [

  {
    path: '',
    component: Accueil
  },

  {
    path: 'apropos',
    component: APropos
  },

  {
    path: 'formations',
    component: Accueil
  },

  {
    path: 'contact',
    component: Accueil
  }

];
