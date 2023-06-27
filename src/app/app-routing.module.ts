import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FullDetailsPageComponent } from './full-details-page/full-details-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons-list' },
  {
    path: 'pokemons-list',
    loadChildren: () =>
      import('./pokemons-list/pokemons-list.module').then(
        (module) => module.PokemonsListModule
      ),
  },
  {
    path: 'pokemon-search',
    loadChildren: () =>
      import('./poke-search/poke-search.module').then(
        (module) => module.PokeSearchModule
      ),
  },
  {
    path: 'favorite-pokemon',
    loadChildren: () =>
      import('./favorite-pokemon/favorite-pokemon.module').then(
        (module) => module.FavoritePokemonModule
      ),
  },
  { path: ':id', component: FullDetailsPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
