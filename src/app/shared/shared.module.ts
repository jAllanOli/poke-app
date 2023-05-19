import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';

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
