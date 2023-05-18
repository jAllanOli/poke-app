import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [AlertModalComponent, PokemonCardComponent],
  imports: [CommonModule],
  exports: [AlertModalComponent, PokemonCardComponent],
})
export class SharedModule {}
