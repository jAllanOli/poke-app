export type Sprites = {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  other?: any;
  versions?: VersionSprites;
};

export interface VersionSprites {
  'generation-i': {
    'red-blue': Sprites;
    yellow: Sprites;
  };
  'generation-ii': {
    crystal: Sprites;
    gold: Sprites;
    silver: Sprites;
  };
  'generation-iii': {
    emerald: Sprites;
    'firered-leafgreen': Sprites;
    'ruby-saphire': Sprites;
  };
  'generation-iv': {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
  };
  'generation-v': {
    'black-white': BlackWhite;
  };
  'generation-vi': {
    'omegaruby-alphasapphire': Sprites;
    'x-y': Sprites;
  };
  'generation-vii': {
    icons: Sprites;
    'ultra-sun-ultramoon': Sprites;
  };
  'generation-viii': {
    icons: Sprites;
  };
}

interface BlackWhite {
  animated: Sprites;
}
