import { DefaultType } from './default';
import { Game } from './game';
import { MoveDetail } from './move';
import { Sprites } from './sprites';
import { TypeSlot } from './type';

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

type Ability = {
  ability: DefaultType;
  is_hidden: boolean;
  slot: number;
};

type HeldItem = {
  item: DefaultType;
  version_details: PokemonHeldItemVersion[];
};

type PokemonHeldItemVersion = {
  rarity: number;
  version: DefaultType;
};

type Status = {
  base_stat: number;
  effort: number;
  stat: DefaultType;
};
