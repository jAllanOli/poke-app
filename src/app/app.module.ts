import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListModule } from './pokemons-list/pokemons-list.module';
import { PokeSearchModule } from './poke-search/poke-search.module';
import { FavoritePokemonModule } from './favorite-pokemon/favorite-pokemon.module';
import { HeaderComponent } from './header/header.component';
import { FullDetailsPageComponent } from './full-details-page/full-details-page.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FullDetailsPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PokemonsListModule,
    PokeSearchModule,
    FavoritePokemonModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
