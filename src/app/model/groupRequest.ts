import Group from "./group";
import User from "./user";


export interface GroupRequest {
    id: number;
    approved: boolean;
    createdAt: string;
    at: string;
    userRequesting: User;
    forGroup: Group;
  }