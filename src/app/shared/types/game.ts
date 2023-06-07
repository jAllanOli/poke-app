import { DefaultType } from './default';

export type Game = {
  game_index: number;
  version: DefaultType;
};

export type GenGameIndex = {
  game_index: number;
  generation: DefaultType;
};
