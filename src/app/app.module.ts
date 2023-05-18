import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListModule } from './pokemons-list/pokemons-list.module';
import { PokeSearchModule } from './poke-search/poke-search.module';
import { FavoritePokemonModule } from './favorite-pokemon/favorite-pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonsListModule,
    PokeSearchModule,
    FavoritePokemonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
