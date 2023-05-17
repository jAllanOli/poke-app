import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListModule } from './pokemons-list/pokemons-list.module';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
