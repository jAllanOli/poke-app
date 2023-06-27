import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FavoritePokemonComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavoritePokemonComponent,
      },
    ]),
  ],
})
export class FavoritePokemonModule {}
