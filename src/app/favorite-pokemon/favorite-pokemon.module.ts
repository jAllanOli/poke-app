import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoritePokemonComponent],
  imports: [CommonModule, SharedModule],
})
export class FavoritePokemonModule {}
