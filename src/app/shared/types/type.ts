import { DefaultType, Name } from './default';
import { GenGameIndex } from './game';

export type TypeSlot = {
  slot: number;
  type: DefaultType;
};

export type Type = {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  game_indices: GenGameIndex;
  generation: DefaultType;
  move_damage_class: DefaultType;
  names: Name[];
  pokemon: typePokemon[];
  moves: DefaultType;
};

type TypeRelations = {
  no_damage_to: DefaultType[];
  half_damage_to: DefaultType[];
  double_damage_to: DefaultType[];
  no_damage_from: DefaultType[];
  half_damage_from: DefaultType[];
  double_damage_from: DefaultType[];
};

type typePokemon = {
  slot: number;
  pokemon: DefaultType;
};
