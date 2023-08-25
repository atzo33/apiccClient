import { EReactionType } from "./EReactionType";
import User from "./user";


export default interface Reaction {
    id: number 
    type: EReactionType;
    reactedBy: User;
    commentIdReactedTo: number | null;
    postIdReactedTo: number | null;
  }