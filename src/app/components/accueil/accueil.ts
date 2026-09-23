import { Component } from '@angular/core';

import { Presentation } from '../presentation/presentation';
import { APropos } from '../a-propos/a-propos';
import { Formations } from '../formations/formations';
import { Partenaires } from '../partenaires/partenaires';

@Component({
  selector: 'app-accueil',
  imports: [
    Presentation,
    APropos,
    Formations,
    Partenaires
  ],
  templateUrl: './accueil.html'
})
export class Accueil {}
