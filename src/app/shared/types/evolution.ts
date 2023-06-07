import { DefaultType } from './default';

export interface evolutionChain {
  id: number;
  chain: Chain;
}

export type Chain = {
  is_baby: boolean;
  species: DefaultType;
  evolution_details?: EvolutionDetail[];
  evolves_to: Chain[];
};

export type EvolutionDetail = {
  item: any;
  trigger: DefaultType;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  location: DefaultType;
};
