import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favoritesArrayName = 'favoritePokemons';

  constructor() {}

  putFavorite(pokemonId: number): void {
    const favorites = this.getFromStorage();
    favorites.push(pokemonId);
    this.saveOnStorage(favorites);
  }

  removeFavorite(pokemonId: number) {
    const favorites = this.getFromStorage();
    const resultingArr = favorites.filter((id) => id !== pokemonId);
    this.saveOnStorage(resultingArr);
  }

  saveOnStorage(favArr: number[]): void {
    const stringfiedObj = JSON.stringify(favArr);
    localStorage.setItem(this.favoritesArrayName, stringfiedObj);
  }

  getFromStorage(): number[] {
    return JSON.parse(localStorage.getItem(this.favoritesArrayName) || '[]');
  }
}
