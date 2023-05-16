import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface apiResponse {
  count: number;
  next: string;
  previous?: string;
  results: any[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<apiResponse>(
      'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0'
    );
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url);
  }
}
