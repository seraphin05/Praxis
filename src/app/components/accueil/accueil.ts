import { Component } from '@angular/core';

import { Presentation } from '../presentation/presentation';
import { APropos } from '../a-propos/a-propos';
import { Formations } from '../formations/formations';
import { Partenaires } from '../partenaires/partenaires';
import { Realisations } from '../realisations/realisations';
import { Equipe } from '../equipe/equipe';

@Component({
  selector: 'app-accueil',
  imports: [
    Presentation,
    APropos,
    Formations,
    Partenaires,
    Realisations,
    Equipe
  ],
  templateUrl: './accueil.html'
})
export class Accueil {}
