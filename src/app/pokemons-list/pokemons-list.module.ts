import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonsListComponent, PokemonCardComponent],
  imports: [CommonModule, SharedModule],
})
export class PokemonsListModule {}
