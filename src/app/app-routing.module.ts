import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsListComponent } from './pokemons-list/pokemons-list/pokemons-list.component';
import { PokeSearchComponent } from './poke-search/poke-search/poke-search.component';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon/favorite-pokemon.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons-list' },
  {
    path: 'pokemons-list',
    component: PokemonsListComponent,
  },
  {
    path: 'pokemon-search',
    component: PokeSearchComponent,
  },
  {
    path: 'favorite-pokemon',
    component: FavoritePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
