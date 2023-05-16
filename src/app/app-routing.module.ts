import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons-list' },
  {
    path: 'pokemons-list',
    loadChildren: () =>
      import('./pokemons-list/pokemons-list.module').then(
        (m) => m.PokemonsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
