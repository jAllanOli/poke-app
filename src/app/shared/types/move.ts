import { DefaultType } from './default';

export type MoveDetail = {
  move: DefaultType;
  version_group_details: MoveVersionDetail[];
};

type MoveVersionDetail = {
  level_learned_at: number;
  move_learn_method: DefaultType;
  version_group: DefaultType;
};
