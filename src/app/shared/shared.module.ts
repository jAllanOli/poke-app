import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
