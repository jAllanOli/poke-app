import { DefaultType, Name } from './default';

export interface PokemonSpecies {
  id: number;
  name: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  evolves_from_species: DefaultType;
  evolution_chain: { url: string };
  generation: DefaultType;
  names: Name[];
  genera: Genus[];
}

type Genus = {
  genus: string;
  language: DefaultType;
};
