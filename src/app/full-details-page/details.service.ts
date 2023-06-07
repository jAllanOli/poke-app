import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { evolutionChain } from '../shared/types/evolution';
import { Location } from '../shared/types/location';
import { PokemonSpecies } from '../shared/types/species';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getPokemonSpecies(id: number): Observable<PokemonSpecies> {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species';
    return this.http.get<PokemonSpecies>(`${baseUrl}/${id}`);
  }

  getPokemonEvolutionFamily(url: string): Observable<evolutionChain> {
    return this.http.get<evolutionChain>(url);
  }

  getLocation(url: string): Observable<Location> {
    return this.http.get<Location>(url);
  }
}
