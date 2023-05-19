import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ApiInitialResponse {
  count: number;
  next: string;
  previous?: string;
  results: DefaultType[];
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: DefaultType[];
  game_indices: Game[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveDetail[];
  name: string;
  order: number;
  past_types: any[];
  species: DefaultType;
  sprites: Sprites;
  stats: Status[];
  types: TypeSlot[];
  weight: number;
}

type DefaultType = {
  name: string;
  url: string;
};

type Ability = {
  ability: DefaultType;
  is_hidden: boolean;
  slot: number;
};

type Game = {
  game_index: number;
  version: DefaultType;
};

type HeldItem = {
  item: DefaultType;
  version_details: VersionDetails[];
};

type VersionDetails = {
  rarity: number;
  version: DefaultType;
};

export type MoveDetail = {
  move: DefaultType;
  version_group_details: MoveVersionDetail[];
};

type MoveVersionDetail = {
  level_learned_at: number;
  move_learn_method: DefaultType;
  version_group: DefaultType;
};

type Sprites = {
  back_default: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
};

type Status = {
  base_stat: number;
  effort: number;
  stat: DefaultType;
};

export type TypeSlot = {
  slot: number;
  type: DefaultType;
};

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemons(offset = 0) {
    return this.http.get<ApiInitialResponse>(
      `${this.baseUrl}/pokemon/?limit=8&offset=${offset}`
    );
  }

  getPokemonDetails(pokemonIdentifier: string | number) {
    return this.http.get<PokemonDetails>(
      `${this.baseUrl}/pokemon/${pokemonIdentifier}`
    );
  }
}
