import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
  ],
  imports: [CommonModule],
  exports: [AlertModalComponent, PokemonCardComponent, DetailsModalComponent],
})
export class SharedModule {}
