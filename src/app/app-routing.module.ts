import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list/pokemons-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons-list' },
  {
    path: 'pokemons-list',
    component: PokemonsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
