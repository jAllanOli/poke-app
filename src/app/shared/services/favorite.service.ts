import { Injectable } from '@angular/core';
import { PokemonDetails } from './pokemons.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritePokemons: PokemonDetails[] = [];

  constructor() {}

  putFavorite(pokemon: PokemonDetails) {
    this.favoritePokemons.push(pokemon);
    this.saveOnStorage(pokemon);
  }

  getFavorites() {
    return this.favoritePokemons.map((pokemon) =>
      this.getFromStorage(pokemon.name)
    );
  }

  saveOnStorage(pokemon: PokemonDetails): void {
    const stringfiedObj = JSON.stringify(pokemon);
    localStorage.setItem(pokemon.name, stringfiedObj);
  }

  getFromStorage(pokemonName: string) {
    return JSON.parse(localStorage.getItem(pokemonName) as string);
  }
}
