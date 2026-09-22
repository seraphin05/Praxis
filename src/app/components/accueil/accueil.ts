import { Component } from '@angular/core';

import { Presentation } from '../presentation/presentation';
import { APropos } from '../a-propos/a-propos';

@Component({
  selector: 'app-accueil',
  imports: [
    Presentation,
    APropos
  ],
  templateUrl: './accueil.html'
})
export class Accueil {}
