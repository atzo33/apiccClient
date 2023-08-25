import { EReactionType } from "./EReactionType";

export interface ReactionExistance {
    doesExist: boolean;
    reactionType: EReactionType | null;
    reactionID: number | null;
  }