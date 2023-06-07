import { DefaultType, Name } from './default';
import { GenGameIndex } from './game';

export type Location = {
  id: number;
  name: string;
  region: DefaultType;
  names: Name[];
  game_indices: GenGameIndex[];
  areas: DefaultType[];
};

export type LocationArea = {
  id: number;
  name: string;
  game_index: number;
  location: DefaultType;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
};

type PokemonEncounter = {
  pokemon: DefaultType;
  version_details: VersionEncounterDetail[];
};

type VersionEncounterDetail = {
  version: DefaultType;
  max_chance: number;
  encounter_details: Encounter[];
};

type Encounter = {
  min_level: number;
  max_level: number;
  condition_values: DefaultType;
  chance: number;
  method: DefaultType;
};
