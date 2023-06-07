import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PokemonDetails } from '../types/pokemon';
import { ApiInitialResponse } from '../types/pokemons-list';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemons(offset = 0) {
    return this.http.get<ApiInitialResponse>(
      `${this.baseUrl}/pokemon/?limit=20&offset=${offset}`
    );
  }

  getPokemonDetails(pokemonIdentifier: string | number) {
    return this.http.get<PokemonDetails>(
      `${this.baseUrl}/pokemon/${pokemonIdentifier}`
    );
  }
}
